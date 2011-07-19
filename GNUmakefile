
all: lib

src: $(patsubst %.ometajs,%.ometajs.js,$(wildcard src/*.ometajs))

%.ometajs.js: %.ometajs
	ometajs2js -i $< -o $@

lib: lib/ometa-highlighter.js

lib/ometa-highlighter.js: src
	-rm $@
	for i in \
			ometa-highlighter.js \
			ometa-highlighter.ometajs.js \
			ometa-highlighter2html.ometajs.js \
		; do \
			cat $</$$i >> $@ \
		; done

tests: FORCE
	./bin/ohl2html -i $@/bla.js -o $@/bla.html
	cat $@/bla.js | ./bin/ohl2html > $@/bla.html.stdout

.PHONY: all FORCE
