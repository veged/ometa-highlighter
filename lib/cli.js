exports.main = function () {

    var sys = require('sys'),
        fs = require('fs');

    require('coa').Cmd()
        .name(process.argv[1])
        .title('OMeta Highlighter command line utility')
        .helpful()
        .opt()
            .name('version')
            .title('Show version')
            .long('version')
            .flag()
            .act(function(opts) {
                this.exit(
                    JSON.parse(require('fs').readFileSync(__dirname + '/../package.json'))
                        .version);
            })
            .end()
        .opt()
            .name('input')
            .title('Input file. Defaults to stdin')
            .short('i')
            .long('input')
            .end()
        .opt()
            .name('output')
            .title('Output file. Defaults to stdout')
            .short('o')
            .long('output')
            .end()
        .opt()
            .name('lang')
            .title('Language: js, xml')
            .short('l')
            .long('lang')
            .req()
            .val(function(value) {
                (['js', 'xml'].indexOf(value) == -1) && this.end()
                    .errorExit('Wrong language "' + value + '" specified, must be one of "js" or "xml"');
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
                (['html', 'bemjson'].indexOf(value) == -1) && this.end()
                    .errorExit('Wrong output format "' + value + '" specified, must be one of "html" or "bemjson"');
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
            (opts.input ?
                // if input file
                function(inputFn) {
                    fs.readFile(opts.input, 'utf8', function(err, input){
                        if (err) throw err;
                        inputFn(input);
                    });
                } :
                // if STDIN
                function(inputFn) {
                    var input = '';
                    process.openStdin()
                        .on('data', function(s) { input += s })
                        .on('end', function() { inputFn(input) });
                })(function(input){
                    try {
                        var ohl = require('./ometa-highlighter'),
                            ast = ohl.OmetaHighlighter.matchAll(input, opts.lang),
                            result = (opts.format == 'html' ?
                                ohl.OmetaHighlighterToHtml.match(ast, 'topLevel') :
                                JSON.stringify(ohl.OmetaHighlighterToBemjson.match(ast, 'topLevel'), null, 4) + '\n');
                        opts.output ?
                            fs.writeFile(opts.output, result, 'utf8', function(err) {
                                    if (err) throw err;
                                    opts.verbose && sys.error('  create : ' + opts.output);
                                }) :
                            process.stdout.write(result);
                    } catch (e) {
                        e.errorPos != undefined &&
                            sys.error(
                                input.slice(0, e.errorPos) +
                                "\n--- Parse error ->" +
                                input.slice(e.errorPos) + '\n');
                        throw e;
                    }
                });
        })
        .parse(process.argv.slice(2));
};
