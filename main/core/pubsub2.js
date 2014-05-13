// Generated by CoffeeScript 1.7.1

/*
  autor Volosincu Bogdan
 */
define([], function() {
  "use strict";
  var PubSub2;
  PubSub2 = (function() {
    var call_, subs;

    function PubSub2() {}

    subs = {};

    call_ = function(handler, data_) {
      handler.call(null, data_);
    };

    PubSub2.prototype.publish = function(nume, data) {
      var callbk, handler, _i, _len;
      if (nume === 'undefined' || nume === null) {
        return;
      }
      if (data === 'undefined' || data === null) {
        return;
      }
      callbk = subs[nume];
      for (_i = 0, _len = callbk.length; _i < _len; _i++) {
        handler = callbk[_i];
        call_(handler, data);
      }
    };

    PubSub2.prototype.subscribe = function(nume_, func_) {
      if (nume_ === 'undefined' || nume_ === null) {
        return;
      }
      if ((func_ === 'undefined' || func_ === null) && typeof func_(!'function')) {
        return;
      }
      subs[nume_] = Array.prototype.slice.call(arguments, 1);
    };

    return PubSub2;

  })();
  return PubSub2;
});