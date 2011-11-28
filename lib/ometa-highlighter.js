var ometajs = require('ometajs'),
    OMeta = ometajs.OMeta,
    Parser = ometajs.Parser;
var ometajs_ = require('ometajs').globals || global;var StringBuffer = ometajs_.StringBuffer;
var objectThatDelegatesTo = ometajs_.objectThatDelegatesTo;
var isImmutable = ometajs_.isImmutable;
var digitValue = ometajs_.digitValue;
var isSequenceable = ometajs_.isSequenceable;
var escapeChar = ometajs_.escapeChar;
var unescape = ometajs_.unescape;
var getTag = ometajs_.getTag;
var inspect = ometajs_.inspect;
var lift = ometajs_.lift;
var clone = ometajs_.clone;
var Parser = ometajs_.Parser;
var fail = ometajs_.fail;
var OMeta = ometajs_.OMeta;
var BSNullOptimization = ometajs_.BSNullOptimization;
var BSAssociativeOptimization = ometajs_.BSAssociativeOptimization;
var BSSeqInliner = ometajs_.BSSeqInliner;
var BSJumpTableOptimization = ometajs_.BSJumpTableOptimization;
var BSOMetaOptimizer = ometajs_.BSOMetaOptimizer;
var BSOMetaParser = ometajs_.BSOMetaParser;
var BSOMetaTranslator = ometajs_.BSOMetaTranslator;
var BSJSParser = ometajs_.BSJSParser;
var BSSemActionParser = ometajs_.BSSemActionParser;
var BSJSIdentity = ometajs_.BSJSIdentity;
var BSJSTranslator = ometajs_.BSJSTranslator;
var BSOMetaJSParser = ometajs_.BSOMetaJSParser;
var BSOMetaJSTranslator = ometajs_.BSOMetaJSTranslator;
if (global === ometajs_) {
  fail = (function(fail) {
    return function() { return fail };
  })(fail);
  OMeta = require('ometajs').OMeta;
}{
    var OmetaHighlighterJs = exports.OmetaHighlighterJs = objectThatDelegatesTo(OMeta, {
        fromTo: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y, s, c, e;
            return function() {
                x = this._apply("anything");
                y = this._apply("anything");
                s = this._applyWithArgs("seq", x);
                c = this._many(function() {
                    return function() {
                        this._not(function() {
                            return this._applyWithArgs("seq", y);
                        });
                        return this._apply("char");
                    }.call(this);
                });
                e = this._applyWithArgs("seq", y);
                return [ s, c.join(""), e ];
            }.call(this);
        },
        nameFirst: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("letter");
            }, function() {
                return function() {
                    switch (this._apply("anything")) {
                      case "$":
                        return "$";
                      case "_":
                        return "_";
                      default:
                        throw fail();
                    }
                }.call(this);
            });
        },
        nameRest: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("nameFirst");
            }, function() {
                return this._apply("digit");
            });
        },
        name: function() {
            var $elf = this, _fromIdx = this.input.idx, r;
            return function() {
                r = this._applyWithArgs("firstAndRest", "nameFirst", "nameRest");
                return [ "name", r.join("") ];
            }.call(this);
        },
        builtin: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = function() {
                    switch (this._apply("anything")) {
                      case "S":
                        return function() {
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "r");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "n");
                            this._applyWithArgs("exactly", "g");
                            return "String";
                        }.call(this);
                      case "N":
                        return function() {
                            this._applyWithArgs("exactly", "u");
                            this._applyWithArgs("exactly", "m");
                            this._applyWithArgs("exactly", "b");
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "r");
                            return "Number";
                        }.call(this);
                      case "d":
                        return function() {
                            switch (this._apply("anything")) {
                              case "o":
                                return function() {
                                    this._applyWithArgs("exactly", "c");
                                    this._applyWithArgs("exactly", "u");
                                    this._applyWithArgs("exactly", "m");
                                    this._applyWithArgs("exactly", "e");
                                    this._applyWithArgs("exactly", "n");
                                    this._applyWithArgs("exactly", "t");
                                    return "document";
                                }.call(this);
                              case "e":
                                return function() {
                                    switch (this._apply("anything")) {
                                      case "c":
                                        return function() {
                                            switch (this._apply("anything")) {
                                              case "o":
                                                return function() {
                                                    switch (this._apply("anything")) {
                                                      case "d":
                                                        return function() {
                                                            switch (this._apply("anything")) {
                                                              case "e":
                                                                return function() {
                                                                    switch (this._apply("anything")) {
                                                                      case "U":
                                                                        return function() {
                                                                            switch (this._apply("anything")) {
                                                                              case "R":
                                                                                return function() {
                                                                                    switch (this._apply("anything")) {
                                                                                      case "I":
                                                                                        return this._or(function() {
                                                                                            return "decodeURI";
                                                                                        }, function() {
                                                                                            return function() {
                                                                                                switch (this._apply("anything")) {
                                                                                                  case "C":
                                                                                                    return function() {
                                                                                                        this._applyWithArgs("exactly", "o");
                                                                                                        this._applyWithArgs("exactly", "m");
                                                                                                        this._applyWithArgs("exactly", "p");
                                                                                                        this._applyWithArgs("exactly", "o");
                                                                                                        this._applyWithArgs("exactly", "n");
                                                                                                        this._applyWithArgs("exactly", "e");
                                                                                                        this._applyWithArgs("exactly", "n");
                                                                                                        this._applyWithArgs("exactly", "t");
                                                                                                        return "decodeURIComponent";
                                                                                                    }.call(this);
                                                                                                  default:
                                                                                                    throw fail();
                                                                                                }
                                                                                            }.call(this);
                                                                                        });
                                                                                      default:
                                                                                        throw fail();
                                                                                    }
                                                                                }.call(this);
                                                                              default:
                                                                                throw fail();
                                                                            }
                                                                        }.call(this);
                                                                      default:
                                                                        throw fail();
                                                                    }
                                                                }.call(this);
                                                              default:
                                                                throw fail();
                                                            }
                                                        }.call(this);
                                                      default:
                                                        throw fail();
                                                    }
                                                }.call(this);
                                              default:
                                                throw fail();
                                            }
                                        }.call(this);
                                      default:
                                        throw fail();
                                    }
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "E":
                        return function() {
                            switch (this._apply("anything")) {
                              case "r":
                                return function() {
                                    switch (this._apply("anything")) {
                                      case "r":
                                        return function() {
                                            switch (this._apply("anything")) {
                                              case "o":
                                                return function() {
                                                    switch (this._apply("anything")) {
                                                      case "r":
                                                        return this._or(function() {
                                                            return "Error";
                                                        }, function() {
                                                            return "Error";
                                                        });
                                                      default:
                                                        throw fail();
                                                    }
                                                }.call(this);
                                              default:
                                                throw fail();
                                            }
                                        }.call(this);
                                      default:
                                        throw fail();
                                    }
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "t":
                        return function() {
                            this._applyWithArgs("exactly", "h");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "s");
                            return "this";
                        }.call(this);
                      case "e":
                        return function() {
                            switch (this._apply("anything")) {
                              case "n":
                                return function() {
                                    switch (this._apply("anything")) {
                                      case "c":
                                        return function() {
                                            switch (this._apply("anything")) {
                                              case "o":
                                                return function() {
                                                    switch (this._apply("anything")) {
                                                      case "d":
                                                        return function() {
                                                            switch (this._apply("anything")) {
                                                              case "e":
                                                                return function() {
                                                                    switch (this._apply("anything")) {
                                                                      case "U":
                                                                        return function() {
                                                                            switch (this._apply("anything")) {
                                                                              case "R":
                                                                                return function() {
                                                                                    switch (this._apply("anything")) {
                                                                                      case "I":
                                                                                        return this._or(function() {
                                                                                            return "encodeURI";
                                                                                        }, function() {
                                                                                            return function() {
                                                                                                switch (this._apply("anything")) {
                                                                                                  case "C":
                                                                                                    return function() {
                                                                                                        this._applyWithArgs("exactly", "o");
                                                                                                        this._applyWithArgs("exactly", "m");
                                                                                                        this._applyWithArgs("exactly", "p");
                                                                                                        this._applyWithArgs("exactly", "o");
                                                                                                        this._applyWithArgs("exactly", "n");
                                                                                                        this._applyWithArgs("exactly", "e");
                                                                                                        this._applyWithArgs("exactly", "n");
                                                                                                        this._applyWithArgs("exactly", "t");
                                                                                                        return "encodeURIComponent";
                                                                                                    }.call(this);
                                                                                                  default:
                                                                                                    throw fail();
                                                                                                }
                                                                                            }.call(this);
                                                                                        });
                                                                                      default:
                                                                                        throw fail();
                                                                                    }
                                                                                }.call(this);
                                                                              default:
                                                                                throw fail();
                                                                            }
                                                                        }.call(this);
                                                                      default:
                                                                        throw fail();
                                                                    }
                                                                }.call(this);
                                                              default:
                                                                throw fail();
                                                            }
                                                        }.call(this);
                                                      default:
                                                        throw fail();
                                                    }
                                                }.call(this);
                                              default:
                                                throw fail();
                                            }
                                        }.call(this);
                                      default:
                                        throw fail();
                                    }
                                }.call(this);
                              case "v":
                                return function() {
                                    this._applyWithArgs("exactly", "a");
                                    this._applyWithArgs("exactly", "l");
                                    return "eval";
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "s":
                        return function() {
                            this._applyWithArgs("exactly", "u");
                            this._applyWithArgs("exactly", "n");
                            return "sun";
                        }.call(this);
                      case "B":
                        return function() {
                            this._applyWithArgs("exactly", "o");
                            this._applyWithArgs("exactly", "o");
                            this._applyWithArgs("exactly", "l");
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "n");
                            return "Boolean";
                        }.call(this);
                      case "D":
                        return function() {
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "e");
                            return "Date";
                        }.call(this);
                      case "F":
                        return function() {
                            this._applyWithArgs("exactly", "u");
                            this._applyWithArgs("exactly", "n");
                            this._applyWithArgs("exactly", "c");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "o");
                            this._applyWithArgs("exactly", "n");
                            return "Function";
                        }.call(this);
                      case "w":
                        return function() {
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "n");
                            this._applyWithArgs("exactly", "d");
                            this._applyWithArgs("exactly", "o");
                            this._applyWithArgs("exactly", "w");
                            return "window";
                        }.call(this);
                      case "M":
                        return function() {
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "h");
                            return "Math";
                        }.call(this);
                      case "i":
                        return function() {
                            switch (this._apply("anything")) {
                              case "s":
                                return function() {
                                    switch (this._apply("anything")) {
                                      case "N":
                                        return function() {
                                            this._applyWithArgs("exactly", "a");
                                            this._applyWithArgs("exactly", "N");
                                            return "isNaN";
                                        }.call(this);
                                      case "F":
                                        return function() {
                                            this._applyWithArgs("exactly", "i");
                                            this._applyWithArgs("exactly", "n");
                                            this._applyWithArgs("exactly", "i");
                                            this._applyWithArgs("exactly", "t");
                                            this._applyWithArgs("exactly", "e");
                                            return "isFinite";
                                        }.call(this);
                                      default:
                                        throw fail();
                                    }
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "A":
                        return function() {
                            this._applyWithArgs("exactly", "r");
                            this._applyWithArgs("exactly", "r");
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "y");
                            return "Array";
                        }.call(this);
                      case "O":
                        return function() {
                            this._applyWithArgs("exactly", "b");
                            this._applyWithArgs("exactly", "j");
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "c");
                            this._applyWithArgs("exactly", "t");
                            return "Object";
                        }.call(this);
                      case "n":
                        return function() {
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "s");
                            this._applyWithArgs("exactly", "c");
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "p");
                            this._applyWithArgs("exactly", "e");
                            return "netscape";
                        }.call(this);
                      case "P":
                        return function() {
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "c");
                            this._applyWithArgs("exactly", "k");
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "g");
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "s");
                            return "Packages";
                        }.call(this);
                      case "p":
                        return function() {
                            switch (this._apply("anything")) {
                              case "a":
                                return function() {
                                    switch (this._apply("anything")) {
                                      case "r":
                                        return function() {
                                            switch (this._apply("anything")) {
                                              case "s":
                                                return function() {
                                                    switch (this._apply("anything")) {
                                                      case "e":
                                                        return function() {
                                                            switch (this._apply("anything")) {
                                                              case "I":
                                                                return function() {
                                                                    this._applyWithArgs("exactly", "n");
                                                                    this._applyWithArgs("exactly", "t");
                                                                    return "parseInt";
                                                                }.call(this);
                                                              case "F":
                                                                return function() {
                                                                    this._applyWithArgs("exactly", "l");
                                                                    this._applyWithArgs("exactly", "o");
                                                                    this._applyWithArgs("exactly", "a");
                                                                    this._applyWithArgs("exactly", "t");
                                                                    return "parseFloat";
                                                                }.call(this);
                                                              default:
                                                                throw fail();
                                                            }
                                                        }.call(this);
                                                      default:
                                                        throw fail();
                                                    }
                                                }.call(this);
                                              default:
                                                throw fail();
                                            }
                                        }.call(this);
                                      default:
                                        throw fail();
                                    }
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "R":
                        return function() {
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "g");
                            this._applyWithArgs("exactly", "E");
                            this._applyWithArgs("exactly", "x");
                            this._applyWithArgs("exactly", "p");
                            return "RegExp";
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
                return [ "name.builtin", c ];
            }.call(this);
        },
        declaration: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = function() {
                    switch (this._apply("anything")) {
                      case "f":
                        return function() {
                            this._applyWithArgs("exactly", "u");
                            this._applyWithArgs("exactly", "n");
                            this._applyWithArgs("exactly", "c");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "o");
                            this._applyWithArgs("exactly", "n");
                            return "function";
                        }.call(this);
                      case "w":
                        return function() {
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "h");
                            return "with";
                        }.call(this);
                      case "v":
                        return function() {
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "r");
                            return "var";
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
                return [ "keyword.declaration", c ];
            }.call(this);
        },
        reserved: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = function() {
                    switch (this._apply("anything")) {
                      case "p":
                        return function() {
                            switch (this._apply("anything")) {
                              case "a":
                                return function() {
                                    this._applyWithArgs("exactly", "c");
                                    this._applyWithArgs("exactly", "k");
                                    this._applyWithArgs("exactly", "a");
                                    this._applyWithArgs("exactly", "g");
                                    this._applyWithArgs("exactly", "e");
                                    return "package";
                                }.call(this);
                              case "r":
                                return function() {
                                    switch (this._apply("anything")) {
                                      case "o":
                                        return function() {
                                            this._applyWithArgs("exactly", "t");
                                            this._applyWithArgs("exactly", "e");
                                            this._applyWithArgs("exactly", "c");
                                            this._applyWithArgs("exactly", "t");
                                            this._applyWithArgs("exactly", "e");
                                            this._applyWithArgs("exactly", "d");
                                            return "protected";
                                        }.call(this);
                                      case "i":
                                        return function() {
                                            this._applyWithArgs("exactly", "v");
                                            this._applyWithArgs("exactly", "a");
                                            this._applyWithArgs("exactly", "t");
                                            this._applyWithArgs("exactly", "e");
                                            return "private";
                                        }.call(this);
                                      default:
                                        throw fail();
                                    }
                                }.call(this);
                              case "u":
                                return function() {
                                    this._applyWithArgs("exactly", "b");
                                    this._applyWithArgs("exactly", "l");
                                    this._applyWithArgs("exactly", "i");
                                    this._applyWithArgs("exactly", "c");
                                    return "public";
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "b":
                        return function() {
                            switch (this._apply("anything")) {
                              case "y":
                                return function() {
                                    this._applyWithArgs("exactly", "t");
                                    this._applyWithArgs("exactly", "e");
                                    return "byte";
                                }.call(this);
                              case "o":
                                return function() {
                                    this._applyWithArgs("exactly", "o");
                                    this._applyWithArgs("exactly", "l");
                                    this._applyWithArgs("exactly", "e");
                                    this._applyWithArgs("exactly", "a");
                                    this._applyWithArgs("exactly", "n");
                                    return "boolean";
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "f":
                        return function() {
                            switch (this._apply("anything")) {
                              case "i":
                                return function() {
                                    this._applyWithArgs("exactly", "n");
                                    this._applyWithArgs("exactly", "a");
                                    this._applyWithArgs("exactly", "l");
                                    return "final";
                                }.call(this);
                              case "l":
                                return function() {
                                    this._applyWithArgs("exactly", "o");
                                    this._applyWithArgs("exactly", "a");
                                    this._applyWithArgs("exactly", "t");
                                    return "float";
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "t":
                        return function() {
                            switch (this._apply("anything")) {
                              case "r":
                                return function() {
                                    this._applyWithArgs("exactly", "a");
                                    this._applyWithArgs("exactly", "n");
                                    this._applyWithArgs("exactly", "s");
                                    this._applyWithArgs("exactly", "i");
                                    this._applyWithArgs("exactly", "e");
                                    this._applyWithArgs("exactly", "n");
                                    this._applyWithArgs("exactly", "t");
                                    return "transient";
                                }.call(this);
                              case "h":
                                return function() {
                                    this._applyWithArgs("exactly", "r");
                                    this._applyWithArgs("exactly", "o");
                                    this._applyWithArgs("exactly", "w");
                                    this._applyWithArgs("exactly", "s");
                                    return "throws";
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "a":
                        return function() {
                            this._applyWithArgs("exactly", "b");
                            this._applyWithArgs("exactly", "s");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "r");
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "c");
                            this._applyWithArgs("exactly", "t");
                            return "abstract";
                        }.call(this);
                      case "e":
                        return function() {
                            switch (this._apply("anything")) {
                              case "x":
                                return function() {
                                    switch (this._apply("anything")) {
                                      case "p":
                                        return function() {
                                            this._applyWithArgs("exactly", "o");
                                            this._applyWithArgs("exactly", "r");
                                            this._applyWithArgs("exactly", "t");
                                            return "export";
                                        }.call(this);
                                      case "t":
                                        return function() {
                                            this._applyWithArgs("exactly", "e");
                                            this._applyWithArgs("exactly", "n");
                                            this._applyWithArgs("exactly", "d");
                                            this._applyWithArgs("exactly", "s");
                                            return "extends";
                                        }.call(this);
                                      default:
                                        throw fail();
                                    }
                                }.call(this);
                              case "n":
                                return function() {
                                    this._applyWithArgs("exactly", "u");
                                    this._applyWithArgs("exactly", "m");
                                    return "enum";
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "s":
                        return function() {
                            switch (this._apply("anything")) {
                              case "y":
                                return function() {
                                    this._applyWithArgs("exactly", "n");
                                    this._applyWithArgs("exactly", "c");
                                    this._applyWithArgs("exactly", "h");
                                    this._applyWithArgs("exactly", "r");
                                    this._applyWithArgs("exactly", "o");
                                    this._applyWithArgs("exactly", "n");
                                    this._applyWithArgs("exactly", "i");
                                    this._applyWithArgs("exactly", "z");
                                    this._applyWithArgs("exactly", "e");
                                    this._applyWithArgs("exactly", "d");
                                    return "synchronized";
                                }.call(this);
                              case "t":
                                return function() {
                                    this._applyWithArgs("exactly", "a");
                                    this._applyWithArgs("exactly", "t");
                                    this._applyWithArgs("exactly", "i");
                                    this._applyWithArgs("exactly", "c");
                                    return "static";
                                }.call(this);
                              case "h":
                                return function() {
                                    this._applyWithArgs("exactly", "o");
                                    this._applyWithArgs("exactly", "r");
                                    this._applyWithArgs("exactly", "t");
                                    return "short";
                                }.call(this);
                              case "u":
                                return function() {
                                    this._applyWithArgs("exactly", "p");
                                    this._applyWithArgs("exactly", "e");
                                    this._applyWithArgs("exactly", "r");
                                    return "super";
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "n":
                        return function() {
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "v");
                            this._applyWithArgs("exactly", "e");
                            return "native";
                        }.call(this);
                      case "i":
                        return function() {
                            switch (this._apply("anything")) {
                              case "n":
                                return function() {
                                    switch (this._apply("anything")) {
                                      case "t":
                                        return this._or(function() {
                                            return "int";
                                        }, function() {
                                            return function() {
                                                switch (this._apply("anything")) {
                                                  case "e":
                                                    return function() {
                                                        this._applyWithArgs("exactly", "r");
                                                        this._applyWithArgs("exactly", "f");
                                                        this._applyWithArgs("exactly", "a");
                                                        this._applyWithArgs("exactly", "c");
                                                        this._applyWithArgs("exactly", "e");
                                                        return "interface";
                                                    }.call(this);
                                                  default:
                                                    throw fail();
                                                }
                                            }.call(this);
                                        });
                                      default:
                                        throw fail();
                                    }
                                }.call(this);
                              case "m":
                                return function() {
                                    switch (this._apply("anything")) {
                                      case "p":
                                        return function() {
                                            switch (this._apply("anything")) {
                                              case "o":
                                                return function() {
                                                    this._applyWithArgs("exactly", "r");
                                                    this._applyWithArgs("exactly", "t");
                                                    return "import";
                                                }.call(this);
                                              case "l":
                                                return function() {
                                                    this._applyWithArgs("exactly", "e");
                                                    this._applyWithArgs("exactly", "m");
                                                    this._applyWithArgs("exactly", "e");
                                                    this._applyWithArgs("exactly", "n");
                                                    this._applyWithArgs("exactly", "t");
                                                    this._applyWithArgs("exactly", "s");
                                                    return "implements";
                                                }.call(this);
                                              default:
                                                throw fail();
                                            }
                                        }.call(this);
                                      default:
                                        throw fail();
                                    }
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "d":
                        return function() {
                            switch (this._apply("anything")) {
                              case "o":
                                return function() {
                                    this._applyWithArgs("exactly", "u");
                                    this._applyWithArgs("exactly", "b");
                                    this._applyWithArgs("exactly", "l");
                                    this._applyWithArgs("exactly", "e");
                                    return "double";
                                }.call(this);
                              case "e":
                                return function() {
                                    this._applyWithArgs("exactly", "b");
                                    this._applyWithArgs("exactly", "u");
                                    this._applyWithArgs("exactly", "g");
                                    this._applyWithArgs("exactly", "g");
                                    this._applyWithArgs("exactly", "e");
                                    this._applyWithArgs("exactly", "r");
                                    return "debugger";
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "v":
                        return function() {
                            this._applyWithArgs("exactly", "o");
                            this._applyWithArgs("exactly", "l");
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "l");
                            this._applyWithArgs("exactly", "e");
                            return "volatile";
                        }.call(this);
                      case "c":
                        return function() {
                            switch (this._apply("anything")) {
                              case "o":
                                return function() {
                                    this._applyWithArgs("exactly", "n");
                                    this._applyWithArgs("exactly", "s");
                                    this._applyWithArgs("exactly", "t");
                                    return "const";
                                }.call(this);
                              case "h":
                                return function() {
                                    this._applyWithArgs("exactly", "a");
                                    this._applyWithArgs("exactly", "r");
                                    return "char";
                                }.call(this);
                              case "l":
                                return function() {
                                    this._applyWithArgs("exactly", "a");
                                    this._applyWithArgs("exactly", "s");
                                    this._applyWithArgs("exactly", "s");
                                    return "class";
                                }.call(this);
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "g":
                        return function() {
                            this._applyWithArgs("exactly", "o");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "o");
                            return "goto";
                        }.call(this);
                      case "l":
                        return function() {
                            this._applyWithArgs("exactly", "o");
                            this._applyWithArgs("exactly", "n");
                            this._applyWithArgs("exactly", "g");
                            return "long";
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
                return [ "keyword.reserved", c ];
            }.call(this);
        },
        constant: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = function() {
                    switch (this._apply("anything")) {
                      case "f":
                        return function() {
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "l");
                            this._applyWithArgs("exactly", "s");
                            this._applyWithArgs("exactly", "e");
                            return "false";
                        }.call(this);
                      case "t":
                        return function() {
                            this._applyWithArgs("exactly", "r");
                            this._applyWithArgs("exactly", "u");
                            this._applyWithArgs("exactly", "e");
                            return "true";
                        }.call(this);
                      case "N":
                        return function() {
                            this._applyWithArgs("exactly", "a");
                            this._applyWithArgs("exactly", "N");
                            return "NaN";
                        }.call(this);
                      case "I":
                        return function() {
                            this._applyWithArgs("exactly", "n");
                            this._applyWithArgs("exactly", "f");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "n");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "t");
                            this._applyWithArgs("exactly", "y");
                            return "Infinity";
                        }.call(this);
                      case "n":
                        return function() {
                            this._applyWithArgs("exactly", "u");
                            this._applyWithArgs("exactly", "l");
                            this._applyWithArgs("exactly", "l");
                            return "null";
                        }.call(this);
                      case "u":
                        return function() {
                            this._applyWithArgs("exactly", "n");
                            this._applyWithArgs("exactly", "d");
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "f");
                            this._applyWithArgs("exactly", "i");
                            this._applyWithArgs("exactly", "n");
                            this._applyWithArgs("exactly", "e");
                            this._applyWithArgs("exactly", "d");
                            return "undefined";
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
                return [ "keyword.constant", c ];
            }.call(this);
        },
        keyword: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return this._or(function() {
                return this._apply("declaration");
            }, function() {
                return this._apply("reserved");
            }, function() {
                return this._apply("constant");
            }, function() {
                return function() {
                    c = function() {
                        switch (this._apply("anything")) {
                          case "b":
                            return function() {
                                this._applyWithArgs("exactly", "r");
                                this._applyWithArgs("exactly", "e");
                                this._applyWithArgs("exactly", "a");
                                this._applyWithArgs("exactly", "k");
                                return "break";
                            }.call(this);
                          case "f":
                            return function() {
                                switch (this._apply("anything")) {
                                  case "o":
                                    return function() {
                                        this._applyWithArgs("exactly", "r");
                                        return "for";
                                    }.call(this);
                                  case "i":
                                    return function() {
                                        this._applyWithArgs("exactly", "n");
                                        this._applyWithArgs("exactly", "a");
                                        this._applyWithArgs("exactly", "l");
                                        this._applyWithArgs("exactly", "l");
                                        this._applyWithArgs("exactly", "y");
                                        return "finally";
                                    }.call(this);
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                          case "t":
                            return function() {
                                switch (this._apply("anything")) {
                                  case "y":
                                    return function() {
                                        this._applyWithArgs("exactly", "p");
                                        this._applyWithArgs("exactly", "e");
                                        this._applyWithArgs("exactly", "o");
                                        this._applyWithArgs("exactly", "f");
                                        return "typeof";
                                    }.call(this);
                                  case "r":
                                    return function() {
                                        this._applyWithArgs("exactly", "y");
                                        return "try";
                                    }.call(this);
                                  case "h":
                                    return function() {
                                        switch (this._apply("anything")) {
                                          case "i":
                                            return function() {
                                                this._applyWithArgs("exactly", "s");
                                                return "this";
                                            }.call(this);
                                          case "r":
                                            return function() {
                                                this._applyWithArgs("exactly", "o");
                                                this._applyWithArgs("exactly", "w");
                                                return "throw";
                                            }.call(this);
                                          default:
                                            throw fail();
                                        }
                                    }.call(this);
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                          case "e":
                            return function() {
                                this._applyWithArgs("exactly", "l");
                                this._applyWithArgs("exactly", "s");
                                this._applyWithArgs("exactly", "e");
                                return "else";
                            }.call(this);
                          case "s":
                            return function() {
                                this._applyWithArgs("exactly", "w");
                                this._applyWithArgs("exactly", "i");
                                this._applyWithArgs("exactly", "t");
                                this._applyWithArgs("exactly", "c");
                                this._applyWithArgs("exactly", "h");
                                return "switch";
                            }.call(this);
                          case "w":
                            return function() {
                                this._applyWithArgs("exactly", "h");
                                this._applyWithArgs("exactly", "i");
                                this._applyWithArgs("exactly", "l");
                                this._applyWithArgs("exactly", "e");
                                return "while";
                            }.call(this);
                          case "n":
                            return function() {
                                this._applyWithArgs("exactly", "e");
                                this._applyWithArgs("exactly", "w");
                                return "new";
                            }.call(this);
                          case "i":
                            return function() {
                                switch (this._apply("anything")) {
                                  case "f":
                                    return "if";
                                  case "n":
                                    return this._or(function() {
                                        return "in";
                                    }, function() {
                                        return function() {
                                            switch (this._apply("anything")) {
                                              case "s":
                                                return function() {
                                                    this._applyWithArgs("exactly", "t");
                                                    this._applyWithArgs("exactly", "a");
                                                    this._applyWithArgs("exactly", "n");
                                                    this._applyWithArgs("exactly", "c");
                                                    this._applyWithArgs("exactly", "e");
                                                    this._applyWithArgs("exactly", "o");
                                                    this._applyWithArgs("exactly", "f");
                                                    return "instanceof";
                                                }.call(this);
                                              default:
                                                throw fail();
                                            }
                                        }.call(this);
                                    });
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                          case "d":
                            return function() {
                                switch (this._apply("anything")) {
                                  case "o":
                                    return "do";
                                  case "e":
                                    return function() {
                                        switch (this._apply("anything")) {
                                          case "f":
                                            return function() {
                                                this._applyWithArgs("exactly", "a");
                                                this._applyWithArgs("exactly", "u");
                                                this._applyWithArgs("exactly", "l");
                                                this._applyWithArgs("exactly", "t");
                                                return "default";
                                            }.call(this);
                                          case "l":
                                            return function() {
                                                this._applyWithArgs("exactly", "e");
                                                this._applyWithArgs("exactly", "t");
                                                this._applyWithArgs("exactly", "e");
                                                return "delete";
                                            }.call(this);
                                          default:
                                            throw fail();
                                        }
                                    }.call(this);
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                          case "r":
                            return function() {
                                this._applyWithArgs("exactly", "e");
                                this._applyWithArgs("exactly", "t");
                                this._applyWithArgs("exactly", "u");
                                this._applyWithArgs("exactly", "r");
                                this._applyWithArgs("exactly", "n");
                                return "return";
                            }.call(this);
                          case "v":
                            return function() {
                                this._applyWithArgs("exactly", "o");
                                this._applyWithArgs("exactly", "i");
                                this._applyWithArgs("exactly", "d");
                                return "void";
                            }.call(this);
                          case "c":
                            return function() {
                                switch (this._apply("anything")) {
                                  case "o":
                                    return function() {
                                        this._applyWithArgs("exactly", "n");
                                        this._applyWithArgs("exactly", "t");
                                        this._applyWithArgs("exactly", "i");
                                        this._applyWithArgs("exactly", "n");
                                        this._applyWithArgs("exactly", "u");
                                        this._applyWithArgs("exactly", "e");
                                        return "continue";
                                    }.call(this);
                                  case "a":
                                    return function() {
                                        switch (this._apply("anything")) {
                                          case "t":
                                            return function() {
                                                this._applyWithArgs("exactly", "c");
                                                this._applyWithArgs("exactly", "h");
                                                return "catch";
                                            }.call(this);
                                          case "s":
                                            return function() {
                                                this._applyWithArgs("exactly", "e");
                                                return "case";
                                            }.call(this);
                                          default:
                                            throw fail();
                                        }
                                    }.call(this);
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                          default:
                            throw fail();
                        }
                    }.call(this);
                    return [ "keyword", c ];
                }.call(this);
            });
        },
        escapeChar: function() {
            var $elf = this, _fromIdx = this.input.idx, e, c;
            return function() {
                e = this._applyWithArgs("exactly", "\\");
                c = this._apply("char");
                return [ "string.escape", [ e, c ] ];
            }.call(this);
        },
        nonEscapeChar: function() {
            var $elf = this, _fromIdx = this.input.idx, q;
            return function() {
                q = this._apply("anything");
                this._not(function() {
                    return this._applyWithArgs("seq", q);
                });
                return this._apply("char");
            }.call(this);
        },
        quote: function() {
            var $elf = this, _fromIdx = this.input.idx, q, c;
            return function() {
                q = this._apply("anything");
                c = this._applyWithArgs("seq", q);
                return [ "punctuation", c ];
            }.call(this);
        },
        anyString: function() {
            var $elf = this, _fromIdx = this.input.idx, q, n, qp, cs;
            return function() {
                q = this._apply("anything");
                n = this._apply("anything");
                qp = this._applyWithArgs("quote", q);
                cs = this._many(function() {
                    return this._or(function() {
                        return this._apply("escapeChar");
                    }, function() {
                        return this._applyWithArgs("nonEscapeChar", q);
                    });
                });
                this._applyWithArgs("quote", q);
                return function() {
                    cs.unshift(qp);
                    cs.push(qp);
                    return [ "string" + "." + n, cs ];
                }.call(this);
            }.call(this);
        },
        string: function() {
            var $elf = this, _fromIdx = this.input.idx, r, f;
            return this._or(function() {
                return this._applyWithArgs("anyString", "'", "single");
            }, function() {
                return this._applyWithArgs("anyString", '"', "double");
            }, function() {
                return function() {
                    r = this._applyWithArgs("anyString", "/", "regex");
                    f = this._many(function() {
                        return function() {
                            switch (this._apply("anything")) {
                              case "i":
                                return "i";
                              case "m":
                                return "m";
                              case "g":
                                return "g";
                              default:
                                throw fail();
                            }
                        }.call(this);
                    });
                    return function() {
                        r[1] = r[1].concat(f);
                        return r;
                    }.call(this);
                }.call(this);
            });
        },
        integer: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._many1(function() {
                    return this._apply("digit");
                });
                return [ "number.integer", c ];
            }.call(this);
        },
        "float": function() {
            var $elf = this, _fromIdx = this.input.idx, ws, fs;
            return function() {
                ws = this._many(function() {
                    return this._apply("digit");
                });
                this._applyWithArgs("exactly", ".");
                fs = this._many(function() {
                    return this._apply("digit");
                });
                this._pred(ws["length"] + fs["length"] != 0);
                return [ "number.float", ws.concat([ [ "punctuation", "." ] ]).concat(fs) ];
            }.call(this);
        },
        hex: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                this._applyWithArgs("exactly", "0");
                this._applyWithArgs("exactly", "x");
                c = this._many(function() {
                    return this._or(function() {
                        return this._apply("digit");
                    }, function() {
                        return function() {
                            switch (this._apply("anything")) {
                              case "b":
                                return "b";
                              case "f":
                                return "f";
                              case "a":
                                return "a";
                              case "e":
                                return "e";
                              case "d":
                                return "d";
                              case "c":
                                return "c";
                              default:
                                throw fail();
                            }
                        }.call(this);
                    });
                });
                return [ "number.hex", [ "0" ].concat([ [ "punctuation", "x" ] ]).concat(c) ];
            }.call(this);
        },
        number: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("float");
            }, function() {
                return this._apply("hex");
            }, function() {
                return this._apply("integer");
            });
        },
        comment: function() {
            var $elf = this, _fromIdx = this.input.idx, p, c, b;
            return this._or(function() {
                return function() {
                    p = function() {
                        this._applyWithArgs("exactly", "/");
                        this._applyWithArgs("exactly", "/");
                        return "//";
                    }.call(this);
                    c = this._many(function() {
                        return function() {
                            this._not(function() {
                                return this._applyWithArgs("exactly", "\n");
                            });
                            return this._apply("char");
                        }.call(this);
                    });
                    return [ "comment.single", [ [ "punctuation", p ] ].concat(c) ];
                }.call(this);
            }, function() {
                return function() {
                    b = this._applyWithArgs("fromTo", "/*", "*/");
                    return [ "comment.multiline", [ [ "punctuation", b[0] ] ].concat(b[1]).concat([ [ "punctuation", b[2] ] ]) ];
                }.call(this);
            });
        },
        operator: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = function() {
                    switch (this._apply("anything")) {
                      case "/":
                        return this._or(function() {
                            return function() {
                                switch (this._apply("anything")) {
                                  case "=":
                                    return "/=";
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                        }, function() {
                            return "/";
                        });
                      case ":":
                        return ":";
                      case "=":
                        return this._or(function() {
                            return function() {
                                switch (this._apply("anything")) {
                                  case "=":
                                    return this._or(function() {
                                        return function() {
                                            switch (this._apply("anything")) {
                                              case "=":
                                                return "===";
                                              default:
                                                throw fail();
                                            }
                                        }.call(this);
                                    }, function() {
                                        return "==";
                                    });
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                        }, function() {
                            return "=";
                        });
                      case "*":
                        return this._or(function() {
                            return function() {
                                switch (this._apply("anything")) {
                                  case "=":
                                    return "*=";
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                        }, function() {
                            return "*";
                        });
                      case "-":
                        return this._or(function() {
                            return function() {
                                switch (this._apply("anything")) {
                                  case "=":
                                    return "-=";
                                  case "-":
                                    return "--";
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                        }, function() {
                            return "-";
                        });
                      case ".":
                        return ".";
                      case "<":
                        return this._or(function() {
                            return function() {
                                switch (this._apply("anything")) {
                                  case "=":
                                    return "<=";
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                        }, function() {
                            return "<";
                        });
                      case "!":
                        return this._or(function() {
                            return function() {
                                switch (this._apply("anything")) {
                                  case "=":
                                    return this._or(function() {
                                        return function() {
                                            switch (this._apply("anything")) {
                                              case "=":
                                                return "!==";
                                              default:
                                                throw fail();
                                            }
                                        }.call(this);
                                    }, function() {
                                        return "!=";
                                    });
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                        }, function() {
                            return "!";
                        });
                      case "|":
                        return function() {
                            switch (this._apply("anything")) {
                              case "|":
                                return this._or(function() {
                                    return function() {
                                        switch (this._apply("anything")) {
                                          case "=":
                                            return "||=";
                                          default:
                                            throw fail();
                                        }
                                    }.call(this);
                                }, function() {
                                    return "||";
                                });
                              default:
                                throw fail();
                            }
                        }.call(this);
                      case "%":
                        return this._or(function() {
                            return function() {
                                switch (this._apply("anything")) {
                                  case "=":
                                    return "%=";
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                        }, function() {
                            return "%";
                        });
                      case ">":
                        return this._or(function() {
                            return function() {
                                switch (this._apply("anything")) {
                                  case "=":
                                    return ">=";
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                        }, function() {
                            return ">";
                        });
                      case "+":
                        return this._or(function() {
                            return function() {
                                switch (this._apply("anything")) {
                                  case "=":
                                    return "+=";
                                  case "+":
                                    return "++";
                                  default:
                                    throw fail();
                                }
                            }.call(this);
                        }, function() {
                            return "+";
                        });
                      case "?":
                        return "?";
                      case "&":
                        return function() {
                            switch (this._apply("anything")) {
                              case "&":
                                return this._or(function() {
                                    return function() {
                                        switch (this._apply("anything")) {
                                          case "=":
                                            return "&&=";
                                          default:
                                            throw fail();
                                        }
                                    }.call(this);
                                }, function() {
                                    return "&&";
                                });
                              default:
                                throw fail();
                            }
                        }.call(this);
                      default:
                        throw fail();
                    }
                }.call(this);
                return [ "operator", [ c ] ];
            }.call(this);
        },
        punctuation: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = function() {
                    switch (this._apply("anything")) {
                      case ",":
                        return ",";
                      case "[":
                        return "[";
                      case ";":
                        return ";";
                      case "{":
                        return "{";
                      case "]":
                        return "]";
                      case ")":
                        return ")";
                      case "(":
                        return "(";
                      case "}":
                        return "}";
                      default:
                        throw fail();
                    }
                }.call(this);
                return [ "punctuation", [ c ] ];
            }.call(this);
        },
        nonText: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return this._or(function() {
                return function() {
                    c = this._apply("keyword");
                    this._not(function() {
                        return this._apply("nameRest");
                    });
                    return c;
                }.call(this);
            }, function() {
                return this._apply("name");
            }, function() {
                return this._apply("comment");
            }, function() {
                return this._apply("string");
            }, function() {
                return this._apply("number");
            }, function() {
                return this._apply("operator");
            }, function() {
                return this._apply("punctuation");
            });
        },
        topLevel: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._many(function() {
                return this._or(function() {
                    return this._apply("nonText");
                }, function() {
                    return this._apply("char");
                });
            });
        }
    });
    var OmetaHighlighterXml = exports.OmetaHighlighterXml = objectThatDelegatesTo(OMeta, {
        fromTo: function() {
            var $elf = this, _fromIdx = this.input.idx, x, y, s, c, e;
            return function() {
                x = this._apply("anything");
                y = this._apply("anything");
                s = this._applyWithArgs("seq", x);
                c = this._many(function() {
                    return function() {
                        this._not(function() {
                            return this._applyWithArgs("seq", y);
                        });
                        return this._apply("char");
                    }.call(this);
                });
                e = this._applyWithArgs("seq", y);
                return [ s, c.join(""), e ];
            }.call(this);
        },
        nameFirst: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("letter");
            }, function() {
                return function() {
                    switch (this._apply("anything")) {
                      case ":":
                        return ":";
                      case "_":
                        return "_";
                      default:
                        throw fail();
                    }
                }.call(this);
            });
        },
        nameRest: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("nameFirst");
            }, function() {
                return this._apply("digit");
            }, function() {
                return function() {
                    switch (this._apply("anything")) {
                      case "-":
                        return "-";
                      case ".":
                        return ".";
                      default:
                        throw fail();
                    }
                }.call(this);
            });
        },
        name: function() {
            var $elf = this, _fromIdx = this.input.idx, r;
            return function() {
                r = this._applyWithArgs("firstAndRest", "nameFirst", "nameRest");
                return [ "name", r.join("") ];
            }.call(this);
        },
        quote: function() {
            var $elf = this, _fromIdx = this.input.idx, q, c;
            return function() {
                q = this._apply("anything");
                c = this._applyWithArgs("seq", q);
                return [ "punctuation", c ];
            }.call(this);
        },
        anyString: function() {
            var $elf = this, _fromIdx = this.input.idx, q, n, qp, cs;
            return function() {
                q = this._apply("anything");
                n = this._apply("anything");
                qp = this._applyWithArgs("quote", q);
                cs = this._many(function() {
                    return function() {
                        this._not(function() {
                            return this._applyWithArgs("seq", q);
                        });
                        return this._apply("char");
                    }.call(this);
                });
                this._applyWithArgs("quote", q);
                return function() {
                    cs.unshift(qp);
                    cs.push(qp);
                    return [ "string" + "." + n, cs ];
                }.call(this);
            }.call(this);
        },
        preproc: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._or(function() {
                    return this._applyWithArgs("fromTo", "<?", "?>");
                }, function() {
                    return this._applyWithArgs("fromTo", "<![CDATA[", "]]>");
                });
                return [ "comment.preproc", [ [ "punctuation", c[0] ] ].concat(c[1]).concat([ [ "punctuation", c[2] ] ]) ];
            }.call(this);
        },
        string: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._applyWithArgs("anyString", "'", "single");
            }, function() {
                return this._applyWithArgs("anyString", '"', "double");
            });
        },
        attr: function() {
            var $elf = this, _fromIdx = this.input.idx, n, s1, p, s2, s;
            return function() {
                n = this._apply("name");
                s1 = this._apply("spaces");
                p = this._applyWithArgs("exactly", "=");
                s2 = this._apply("spaces");
                s = this._apply("string");
                return [ "name.attribute", [ n[1] ].concat(s1).concat([ [ "punctuation", p ] ]).concat(s2).concat([ s ]) ];
            }.call(this);
        },
        tag: function() {
            var $elf = this, _fromIdx = this.input.idx, p1, s1, n, s2, a, s3, as, as, s4, p2, p1, s1, p2, n, s2, p3;
            return this._or(function() {
                return function() {
                    p1 = this._applyWithArgs("exactly", "<");
                    s1 = this._apply("spaces");
                    n = this._apply("name");
                    as = function() {
                        as = this._many(function() {
                            return function() {
                                s2 = this._apply("spaces");
                                a = this._apply("attr");
                                s3 = this._apply("spaces");
                                return s2.concat([ a ]).concat(s3);
                            }.call(this);
                        });
                        return Array["prototype"]["concat"].apply([], as);
                    }.call(this);
                    s4 = this._apply("spaces");
                    p2 = function() {
                        switch (this._apply("anything")) {
                          case "/":
                            return function() {
                                this._applyWithArgs("exactly", ">");
                                return "/>";
                            }.call(this);
                          case ">":
                            return ">";
                          default:
                            throw fail();
                        }
                    }.call(this);
                    return [ "name.tag", [ [ "punctuation", p1 ] ].concat(s1).concat(n[1]).concat(as).concat(s4).concat([ [ "punctuation", p2 ] ]) ];
                }.call(this);
            }, function() {
                return function() {
                    p1 = this._applyWithArgs("exactly", "<");
                    s1 = this._apply("spaces");
                    p2 = this._applyWithArgs("exactly", "/");
                    n = this._apply("name");
                    s2 = this._apply("spaces");
                    p3 = this._applyWithArgs("exactly", ">");
                    return [ "name.tag", [ [ "punctuation", p1 + p2 ] ].concat(s1).concat(n[1]).concat(s2).concat([ [ "punctuation", p3 ] ]) ];
                }.call(this);
            });
        },
        entity: function() {
            var $elf = this, _fromIdx = this.input.idx, p1, n, p2;
            return function() {
                p1 = this._applyWithArgs("exactly", "&");
                n = this._apply("name");
                p2 = this._applyWithArgs("exactly", ";");
                return [ "name.entity", [ [ "punctuation", p1 ] ].concat(n[1]).concat([ [ "punctuation", p2 ] ]) ];
            }.call(this);
        },
        comment: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._applyWithArgs("fromTo", "<!--", "-->");
                return [ "comment", [ [ "punctuation", c[0] ] ].concat(c[1]).concat([ [ "punctuation", c[2] ] ]) ];
            }.call(this);
        },
        nonText: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._or(function() {
                return this._apply("comment");
            }, function() {
                return this._apply("preproc");
            }, function() {
                return this._apply("entity");
            }, function() {
                return this._apply("tag");
            });
        },
        topLevel: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._many(function() {
                return this._or(function() {
                    return this._apply("nonText");
                }, function() {
                    return this._apply("char");
                });
            });
        }
    });
    var OmetaHighlighter = exports.OmetaHighlighter = objectThatDelegatesTo(OMeta, {
        js: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._many(function() {
                    return this._apply("char");
                });
                return [ "js", OmetaHighlighterJs.matchAll(c.join(""), "topLevel") ];
            }.call(this);
        },
        javascript: function() {
            var $elf = this, _fromIdx = this.input.idx;
            return this._apply("js");
        },
        xml: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                c = this._many(function() {
                    return this._apply("char");
                });
                return [ "xml", OmetaHighlighterXml.matchAll(c.join(""), "topLevel") ];
            }.call(this);
        }
    });
}var ometajs_ = require('ometajs').globals || global;var StringBuffer = ometajs_.StringBuffer;
var objectThatDelegatesTo = ometajs_.objectThatDelegatesTo;
var isImmutable = ometajs_.isImmutable;
var digitValue = ometajs_.digitValue;
var isSequenceable = ometajs_.isSequenceable;
var escapeChar = ometajs_.escapeChar;
var unescape = ometajs_.unescape;
var getTag = ometajs_.getTag;
var inspect = ometajs_.inspect;
var lift = ometajs_.lift;
var clone = ometajs_.clone;
var Parser = ometajs_.Parser;
var fail = ometajs_.fail;
var OMeta = ometajs_.OMeta;
var BSNullOptimization = ometajs_.BSNullOptimization;
var BSAssociativeOptimization = ometajs_.BSAssociativeOptimization;
var BSSeqInliner = ometajs_.BSSeqInliner;
var BSJumpTableOptimization = ometajs_.BSJumpTableOptimization;
var BSOMetaOptimizer = ometajs_.BSOMetaOptimizer;
var BSOMetaParser = ometajs_.BSOMetaParser;
var BSOMetaTranslator = ometajs_.BSOMetaTranslator;
var BSJSParser = ometajs_.BSJSParser;
var BSSemActionParser = ometajs_.BSSemActionParser;
var BSJSIdentity = ometajs_.BSJSIdentity;
var BSJSTranslator = ometajs_.BSJSTranslator;
var BSOMetaJSParser = ometajs_.BSOMetaJSParser;
var BSOMetaJSTranslator = ometajs_.BSOMetaJSTranslator;
if (global === ometajs_) {
  fail = (function(fail) {
    return function() { return fail };
  })(fail);
  OMeta = require('ometajs').OMeta;
}{
    var OmetaHighlighterToHtml = exports.OmetaHighlighterToHtml = objectThatDelegatesTo(OMeta, {
        token: function() {
            var $elf = this, _fromIdx = this.input.idx, t, c, c;
            return this._or(function() {
                return function() {
                    this._form(function() {
                        return function() {
                            t = this._apply("anything");
                            this._pred(t["length"] > 1);
                            return c = this._apply("tokens");
                        }.call(this);
                    });
                    return '<span class="' + OmetaHighlighterToHtml._makeClass(t) + '">' + c + "</span>";
                }.call(this);
            }, function() {
                return function() {
                    c = this._apply("anything");
                    return OmetaHighlighterToHtml._escape(c);
                }.call(this);
            });
        },
        tokens: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                this._form(function() {
                    return c = this._many(function() {
                        return this._apply("token");
                    });
                });
                return c.join("");
            }.call(this);
        },
        topLevel: function() {
            var $elf = this, _fromIdx = this.input.idx, lang, c;
            return function() {
                this._form(function() {
                    return function() {
                        lang = this._apply("anything");
                        return c = this._apply("tokens");
                    }.call(this);
                });
                return '<pre class="ohl ohl-' + lang + '"><code>' + c + "</code></pre>";
            }.call(this);
        }
    });
    OmetaHighlighterToHtml["_escape"] = function() {
        var amp = new RegExp("&", "g"), lt = new RegExp("<", "g"), gt = new RegExp(">", "g"), apos = new RegExp("'", "g"), quot = new RegExp('"', "g");
        return function(s) {
            return String(s).replace(amp, "&amp;").replace(lt, "&lt;").replace(gt, "&gt;").replace(apos, "&apos;").replace(quot, "&quot;");
        };
    }();
    OmetaHighlighterToHtml["_makeClass"] = function() {
        var type2class = {};
        return function(type) {
            var types = [], typeParts = type.split(".");
            while (typeParts["length"]) {
                types.unshift(typeParts.join("-"));
                typeParts.pop();
            }
            var typeClass = "";
            while (types["length"]) {
                var t = types.shift();
                typeClass += " ohl-" + (type2class.hasOwnProperty(t) ? type2class[t] : t);
            }
            return typeClass.slice(1);
        };
    }();
}var ometajs_ = require('ometajs').globals || global;var StringBuffer = ometajs_.StringBuffer;
var objectThatDelegatesTo = ometajs_.objectThatDelegatesTo;
var isImmutable = ometajs_.isImmutable;
var digitValue = ometajs_.digitValue;
var isSequenceable = ometajs_.isSequenceable;
var escapeChar = ometajs_.escapeChar;
var unescape = ometajs_.unescape;
var getTag = ometajs_.getTag;
var inspect = ometajs_.inspect;
var lift = ometajs_.lift;
var clone = ometajs_.clone;
var Parser = ometajs_.Parser;
var fail = ometajs_.fail;
var OMeta = ometajs_.OMeta;
var BSNullOptimization = ometajs_.BSNullOptimization;
var BSAssociativeOptimization = ometajs_.BSAssociativeOptimization;
var BSSeqInliner = ometajs_.BSSeqInliner;
var BSJumpTableOptimization = ometajs_.BSJumpTableOptimization;
var BSOMetaOptimizer = ometajs_.BSOMetaOptimizer;
var BSOMetaParser = ometajs_.BSOMetaParser;
var BSOMetaTranslator = ometajs_.BSOMetaTranslator;
var BSJSParser = ometajs_.BSJSParser;
var BSSemActionParser = ometajs_.BSSemActionParser;
var BSJSIdentity = ometajs_.BSJSIdentity;
var BSJSTranslator = ometajs_.BSJSTranslator;
var BSOMetaJSParser = ometajs_.BSOMetaJSParser;
var BSOMetaJSTranslator = ometajs_.BSOMetaJSTranslator;
if (global === ometajs_) {
  fail = (function(fail) {
    return function() { return fail };
  })(fail);
  OMeta = require('ometajs').OMeta;
}{
    var OmetaHighlighterToBemjson = exports.OmetaHighlighterToBemjson = objectThatDelegatesTo(OMeta, {
        token: function() {
            var $elf = this, _fromIdx = this.input.idx, c, t, c, c;
            return this._or(function() {
                return function() {
                    c = this._many1(function() {
                        return this._apply("char");
                    });
                    return OmetaHighlighterToBemjson._escape(c.join(""));
                }.call(this);
            }, function() {
                return function() {
                    this._form(function() {
                        return function() {
                            t = this._apply("anything");
                            this._pred(t["length"] > 1);
                            return c = this._apply("tokens");
                        }.call(this);
                    });
                    return {
                        tag: "span",
                        attrs: {
                            "class": OmetaHighlighterToBemjson._makeClass(t)
                        },
                        content: c
                    };
                }.call(this);
            }, function() {
                return function() {
                    c = this._apply("anything");
                    return OmetaHighlighterToBemjson._escape(c);
                }.call(this);
            });
        },
        tokens: function() {
            var $elf = this, _fromIdx = this.input.idx, c;
            return function() {
                this._form(function() {
                    return c = this._many(function() {
                        return this._apply("token");
                    });
                });
                return c;
            }.call(this);
        },
        topLevel: function() {
            var $elf = this, _fromIdx = this.input.idx, lang, c;
            return function() {
                this._form(function() {
                    return function() {
                        lang = this._apply("anything");
                        return c = this._apply("tokens");
                    }.call(this);
                });
                return {
                    block: "ohl",
                    mods: {
                        lang: lang
                    },
                    content: c
                };
            }.call(this);
        }
    });
    OmetaHighlighterToBemjson["_escape"] = function() {
        var amp = new RegExp("&", "g"), lt = new RegExp("<", "g"), gt = new RegExp(">", "g"), apos = new RegExp("'", "g"), quot = new RegExp('"', "g");
        return function(s) {
            return String(s).replace(amp, "&amp;").replace(lt, "&lt;").replace(gt, "&gt;").replace(apos, "&apos;").replace(quot, "&quot;");
        };
    }();
    OmetaHighlighterToBemjson["_makeClass"] = function() {
        var type2class = {};
        return function(type) {
            var types = [], typeParts = type.split(".");
            while (typeParts["length"]) {
                types.unshift(typeParts.join("-"));
                typeParts.pop();
            }
            var typeClass = "";
            while (types["length"]) {
                var t = types.shift();
                typeClass += " ohl-" + (type2class.hasOwnProperty(t) ? type2class[t] : t);
            }
            return typeClass.slice(1);
        };
    }();
}