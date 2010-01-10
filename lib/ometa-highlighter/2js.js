var file = require('file'),
    parser = exports.parser = new (require('args').Parser)();

parser.option('-i', '--input', 'inputFile')
    .help('specifies filename to read the input source, if omit use STDIN')
    .set();

parser.option('-o', '--output', 'outFile')
    .help('specifies filename to write the output, if omit use STDOUT')
    .set();

parser.helpful();

exports.main = function () {
    var options = parser.parse(system.args),
        input = options.inputFile ? file.read(options.inputFile) : system.stdin.read();

    var m = require('ometa-highlighter'),
        result = m.OmetaHighlighterToHtml.match(
            m.OmetaHighlighter.matchAll(input, 'js'), // TODO: use format from options
            'topLevel'
        );

    options.outFile ? file.write(options.outFile, result) : system.stdout.write(result);
};
