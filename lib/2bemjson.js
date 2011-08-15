exports.main = function() {

    var sys = require('sys'),
        fs = require('fs'),
        args = process.argv.slice(2),
        arg,
        options = {};

    while(args.length) {
        arg = args.shift();
        switch (arg) {
            case '-h':
            case '--help':
                sys.puts([
                    'Usage: ohl2bemjson [options]',
                    '',
                    'Options:',
                    '  -i, --input : pecifies filename to read the input source, if omit use STDIN',
                    '  -o, --output : specifies filename to write the output, if omit use STDOUT',
                    '  -f, --format : specifies code format, valid values are "js" and "xml", if omit use "js"',
                    '  -h, --help : Output help information'
                ].join('\n'));
                process.exit(1);
                break;
            case '-i':
            case '--input':
                options.input = args.shift();
                break;
            case '-o':
            case '--output':
                options.output = args.shift();
                break;
            case '-f':
            case '--format':
                options.format = args.shift();
                if (['javascript', 'js', 'xml'].indexOf(options.format) == -1) {
                    sys.error('Wrong format "' + options.format + '" specified, must be one of "js" or "xml"');
                    process.exit(1);
                }
                break;
        }
    }

    (options.input ?
        // if input file
        function(inputFn) {
            fs.readFile(options.input, 'utf8', function(err, input){
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
                    result = JSON.stringify(ohl.OmetaHighlighterToBemjson.match(
                        ohl.OmetaHighlighter.matchAll(input, options.format || 'js'),
                        'topLevel'
                    ), null, 4) + '\n';
                    //result = JSON.stringify(ohl.OmetaHighlighter.matchAll(input, options.format || 'js'), null, 4) + '\n';
                options.output ?
                    fs.writeFile(options.output, result, 'utf8', function(err) {
                            if (err) throw err;
                            sys.error('  create : ' + options.output);
                        }) :
                    process.stdout.write(result);
            } catch (e) {
                e.errorPos != undefined &&
                    sys.error(
                        input.slice(0, e.errorPos) +
                        "\n--- Parse error ->" +
                        input.slice(e.errorPos) + '\n');
                throw e
            }
        });

};
