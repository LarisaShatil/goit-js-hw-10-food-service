parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\images\\demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"qwQt":[function(require,module,exports) {
const e={LIGHT:"light-theme",DARK:"dark-theme"},s=document.querySelector("#theme-switch-toggle"),t=document.querySelector("body");function o(s){t.classList!==e.DARK?(t.classList.remove(e.LIGHT),t.classList.add(e.DARK),localStorage.setItem("class",e.DARK)):(t.classList.add(e.LIGHT),localStorage.setItem("class",e.LIGHT))}s.addEventListener("click",o()),window.onload=function(){localStorage.getItem("class"===e.DARK)&&(t.classList.remove(e.LIGHT),t.classList.add(e.DARK))},console.log("bodyTheme",t);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");var e=t(require("./js/theme.js"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function t(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}
},{"./sass/main.scss":"clu1","./js/theme.js":"qwQt"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-10-food-service/src.f0ccf668.js.map