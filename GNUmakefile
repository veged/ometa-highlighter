
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
			ometa-highlighter2bemjson.ometajs.js \
		; do \
			cat $</$$i >> $@ \
		; done

tests: FORCE
	./bin/ohl2html -i $@/bla.js -o $@/bla.html -f js
	cat $@/bla.js | ./bin/ohl2html -f js > $@/bla.html.stdout
	
	./bin/ohl2html -i $@/test.xml -o $@/test.html -f xml
	cat $@/test.xml | ./bin/ohl2html -f xml > $@/test.html.stdout
	
	./bin/ohl2bemjson -i $@/bla.js -o $@/bla.bemjson.js -f js
	cat $@/bla.js | ./bin/ohl2bemjson -f js > $@/bla.bemjson.js.stdout
	
	./bin/ohl2bemjson -i $@/test.xml -o $@/test.bemjson.js -f xml
	cat $@/test.xml | ./bin/ohl2bemjson -f xml > $@/test.bemjson.js.stdout

.PHONY: all FORCE
