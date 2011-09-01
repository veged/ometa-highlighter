
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
	./bin/ohl -i $@/bla.js -o $@/bla.html -l js -f html
	cat $@/bla.js | ./bin/ohl -l js -f html > $@/bla.html.stdout

	./bin/ohl -i $@/test.xml -o $@/test.html -l xml -f html
	cat $@/test.xml | ./bin/ohl -l xml -f html > $@/test.html.stdout

	./bin/ohl -i $@/bla.js -o $@/bla.bemjson.js -l js -f bemjson
	cat $@/bla.js | ./bin/ohl -l js -f bemjson > $@/bla.bemjson.js.stdout

	./bin/ohl -i $@/test.xml -o $@/test.bemjson.js -l xml -f bemjson
	cat $@/test.xml | ./bin/ohl -l xml -f bemjson > $@/test.bemjson.js.stdout

.PHONY: all FORCE
