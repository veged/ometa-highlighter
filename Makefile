
all: ometa-highlighter.js ometa-highlighter2html.js

ometa-highlighter.js: ometa-highlighter.txt
	./translate.js -o ometa-highlighter.js ometa-highlighter.txt

ometa-highlighter2html.js: ometa-highlighter2html.txt
	./translate.js -o ometa-highlighter2html.js ometa-highlighter2html.txt
