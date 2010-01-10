ometajs:
	$(MAKE) -C src
	-rm lib/ometa-highlighter.js
	cat src/ometa-highlighter.js >> lib/ometa-highlighter.js
	cat src/ometa-highlighter.ometajs.js >> lib/ometa-highlighter.js
	cat src/ometa-highlighter2html.ometajs.js >> lib/ometa-highlighter.js
