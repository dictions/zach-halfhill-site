!function(e){function t(r){if(o[r])return o[r].exports;var l=o[r]={exports:{},id:r,loaded:!1};return e[r].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var o={};return t.m=e,t.c=o,t.p="/assets/",t(0)}([function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var l=o(1),n=r(l);o(2),(0,n["default"])({logoSelector:".header__logotype-img",interval:1e3})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=e.logoSelector,o=e.interval,r=0,l=[].slice.call(document.querySelectorAll(t));setInterval(function(){l.forEach(function(e){e.classList.remove("visible")}),l[r].classList.add("visible"),r<l.length-1?r++:r=0},o)}},function(e,t){}]);