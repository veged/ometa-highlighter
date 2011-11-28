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
}