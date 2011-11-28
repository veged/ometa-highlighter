exports.main = function () {

    var fs = require('fs'),
        q = require('q');

    require('coa').Cmd()
        .name(process.argv[1])
        .title('OMeta Highlighter command line utility')
        .helpful()
        .opt()
            .name('version')
            .title('Show version')
            .long('version')
            .flag()
            .only()
            .act(function(opts) {
                return JSON.parse(require('fs').readFileSync(__dirname + '/../package.json'))
                    .version;
            })
            .end()
        .opt()
            .name('input')
            .title('Input file. Defaults to stdin')
            .short('i')
            .long('input')
            .input()
            .end()
        .opt()
            .name('output')
            .title('Output file. Defaults to stdout')
            .short('o')
            .long('output')
            .output()
            .end()
        .opt()
            .name('lang')
            .title('Language: js, xml')
            .short('l')
            .long('lang')
            .req()
            .val(function(value) {
                // FIXME: don't use private API _usage()
                if (!value) {
                    return this.reject("Missing required option value\n" + this._usage());
                }
                if (['js', 'xml'].indexOf(value) == -1) {
                    return this.reject('Wrong language "' + value + '" specified, must be one of "js" or "xml"');
                }
                return value;
            })
            .end()
        .opt()
            .name('format')
            .title('Output format: html, bemjson. Defaults to html')
            .short('f')
            .long('format')
            .def('html')
            .val(function(value) {
                // FIXME: don't use private API _usage()
                if (!value) {
                    return this.reject("Missing required option value\n" + this._usage());
                }
                if (['html', 'bemjson'].indexOf(value) == -1) {
                    return this.reject('Wrong output format "' + value + '" specified, must be one of "html" or "bemjson"');
                }
                return value;
            })
            .end()
        .opt()
            .name('verbose')
            .title('Show verbose output')
            .long('verbose')
            .short('v')
            .flag()
            .end()
        .act(function(opts) {
            var deferred = q.defer();

            readStream(opts.input, function(err, input) {
                if (err) throw err;

                // remove BOM if present
                if (input.charCodeAt(0) === 0xFEFF) input = input.slice(1);

                try {
                    var ohl = require('./ometa-highlighter'),
                        ast = ohl.OmetaHighlighter.matchAll(input, opts.lang),
                        result = (opts.format == 'html' ?
                            ohl.OmetaHighlighterToHtml.match(ast, 'topLevel') :
                            JSON.stringify(ohl.OmetaHighlighterToBemjson.match(ast, 'topLevel'), null, 4)) + '\n';
                    opts.output.write(result);
                    if (opts.output !== process.stdout) opts.output.end();
                } catch (e) {
                    e.errorPos != undefined &&
                        console.error(
                            input.slice(0, e.errorPos) +
                            "\n--- Parse error ->" +
                            input.slice(e.errorPos) + '\n');
                    throw e;
                }
                deferred.resolve();
            });

            return deferred.promise;
        })
        .run();
};

function readStream(stream, callback) {
    var data = '';
    stream
        .on('data', function(chunk) {
            data += chunk;
        })
        .on('error', function(err) {
            callback(err);
        })
        .on('end', function() {
            callback(null, data);
        })
        .resume();
}
