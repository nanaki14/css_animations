"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var f="function"==typeof require&&require;if(!u&&f)return f(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return o(n||e)},s,s.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){(function(e,t,r,o,i,a,u,f,s){!function(e){function t(e){var t=e.charCodeAt(0);return t===i||t===l?62:t===a||t===c?63:t<u?-1:t<u+10?t-u+26+26:t<s+26?t-s:t<f+26?t-f+26:void 0}function n(e){function n(e){s[c++]=e}var r,i,a,u,f,s;if(e.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var l=e.length;f="="===e.charAt(l-2)?2:"="===e.charAt(l-1)?1:0,s=new o(3*e.length/4-f),a=f>0?e.length-4:e.length;var c=0;for(r=0,i=0;r<a;r+=4,i+=3)u=t(e.charAt(r))<<18|t(e.charAt(r+1))<<12|t(e.charAt(r+2))<<6|t(e.charAt(r+3)),n((16711680&u)>>16),n((65280&u)>>8),n(255&u);return 2===f?(u=t(e.charAt(r))<<2|t(e.charAt(r+1))>>4,n(255&u)):1===f&&(u=t(e.charAt(r))<<10|t(e.charAt(r+1))<<4|t(e.charAt(r+2))>>2,n(u>>8&255),n(255&u)),s}function r(e){function t(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}var n,r,o,i=e.length%3,a="";for(n=0,o=e.length-i;n<o;n+=3)r=(e[n]<<16)+(e[n+1]<<8)+e[n+2],a+=function(e){return t(e>>18&63)+t(e>>12&63)+t(e>>6&63)+t(63&e)}(r);switch(i){case 1:r=e[e.length-1],a+=t(r>>2),a+=t(r<<4&63),a+="==";break;case 2:r=(e[e.length-2]<<8)+e[e.length-1],a+=t(r>>10),a+=t(r>>4&63),a+=t(r<<2&63),a+="="}return a}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,i="+".charCodeAt(0),a="/".charCodeAt(0),u="0".charCodeAt(0),f="a".charCodeAt(0),s="A".charCodeAt(0),l="-".charCodeAt(0),c="_".charCodeAt(0);e.toByteArray=n,e.fromByteArray=r}(void 0===n?this.base64js={}:n)}).call(this,e("km4Umf"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/../../../node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:2,km4Umf:3}],2:[function(e,t,n){(function(t,r,o,i,a,u,f,s,l){function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);var r=void 0===e?"undefined":_typeof(e);if("base64"===t&&"string"===r)for(e=F(e);e.length%4!=0;)e+="=";var i;if("number"===r)i=D(e);else if("string"===r)i=o.byteLength(e,t);else{if("object"!==r)throw new Error("First argument needs to be a number, array or string.");i=D(e.length)}var a;o._useTypedArrays?a=o._augment(new Uint8Array(i)):(a=this,a.length=i,a._isBuffer=!0);var u;if(o._useTypedArrays&&"number"==typeof e.byteLength)a._set(e);else if(q(e))for(u=0;u<i;u++)o.isBuffer(e)?a[u]=e.readUInt8(u):a[u]=e[u];else if("string"===r)a.write(e,0,t);else if("number"===r&&!o._useTypedArrays&&!n)for(u=0;u<i;u++)a[u]=0;return a}function c(e,t,n,r){n=Number(n)||0;var i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;var a=t.length;Q(a%2==0,"Invalid hex string"),r>a/2&&(r=a/2);for(var u=0;u<r;u++){var f=parseInt(t.substr(2*u,2),16);Q(!isNaN(f),"Invalid hex string"),e[n+u]=f}return o._charsWritten=2*u,u}function d(e,t,n,r){return o._charsWritten=Y(J(t),e,n,r)}function h(e,t,n,r){return o._charsWritten=Y(P(t),e,n,r)}function g(e,t,n,r){return h(e,t,n,r)}function p(e,t,n,r){return o._charsWritten=Y(X(t),e,n,r)}function y(e,t,n,r){return o._charsWritten=Y(R(t),e,n,r)}function b(e,t,n){return 0===t&&n===e.length?V.fromByteArray(e):V.fromByteArray(e.slice(t,n))}function w(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=z(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+z(o)}function m(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function v(e,t,n){return m(e,t,n)}function E(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=t;i<n;i++)o+=O(e[i]);return o}function I(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function B(e,t,n,r){r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+1<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(i=e[t],t+1<o&&(i|=e[t+1]<<8)):(i=e[t]<<8,t+1<o&&(i|=e[t+1])),i}}function A(e,t,n,r){r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+3<e.length,"Trying to read beyond buffer length"));var o=e.length;if(!(t>=o)){var i;return n?(t+2<o&&(i=e[t+2]<<16),t+1<o&&(i|=e[t+1]<<8),i|=e[t],t+3<o&&(i+=e[t+3]<<24>>>0)):(t+1<o&&(i=e[t+1]<<16),t+2<o&&(i|=e[t+2]<<8),t+3<o&&(i|=e[t+3]),i+=e[t]<<24>>>0),i}}function U(e,t,n,r){if(r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+1<e.length,"Trying to read beyond buffer length")),!(t>=e.length)){var o=B(e,t,n,!0);return 32768&o?-1*(65535-o+1):o}}function L(e,t,n,r){if(r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(void 0!==t&&null!==t,"missing offset"),Q(t+3<e.length,"Trying to read beyond buffer length")),!(t>=e.length)){var o=A(e,t,n,!0);return 2147483648&o?-1*(4294967295-o+1):o}}function _(e,t,n,r){return r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(t+3<e.length,"Trying to read beyond buffer length")),Z.read(e,t,n,23,4)}function k(e,t,n,r){return r||(Q("boolean"==typeof n,"missing or invalid endian"),Q(t+7<e.length,"Trying to read beyond buffer length")),Z.read(e,t,n,52,8)}function S(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+1<e.length,"trying to write beyond buffer length"),G(t,65535));var i=e.length;if(!(n>=i))for(var a=0,u=Math.min(i-n,2);a<u;a++)e[n+a]=(t&255<<8*(r?a:1-a))>>>8*(r?a:1-a)}function C(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+3<e.length,"trying to write beyond buffer length"),G(t,4294967295));var i=e.length;if(!(n>=i))for(var a=0,u=Math.min(i-n,4);a<u;a++)e[n+a]=t>>>8*(r?a:3-a)&255}function T(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+1<e.length,"Trying to write beyond buffer length"),H(t,32767,-32768)),n>=e.length||(t>=0?S(e,t,n,r,o):S(e,65535+t+1,n,r,o))}function M(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+3<e.length,"Trying to write beyond buffer length"),H(t,2147483647,-2147483648)),n>=e.length||(t>=0?C(e,t,n,r,o):C(e,4294967295+t+1,n,r,o))}function N(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+3<e.length,"Trying to write beyond buffer length"),K(t,3.4028234663852886e38,-3.4028234663852886e38)),n>=e.length||Z.write(e,t,n,r,23,4)}function x(e,t,n,r,o){o||(Q(void 0!==t&&null!==t,"missing value"),Q("boolean"==typeof r,"missing or invalid endian"),Q(void 0!==n&&null!==n,"missing offset"),Q(n+7<e.length,"Trying to write beyond buffer length"),K(t,1.7976931348623157e308,-1.7976931348623157e308)),n>=e.length||Z.write(e,t,n,r,52,8)}function F(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function j(e,t,n){return"number"!=typeof e?n:(e=~~e)>=t?t:e>=0?e:(e+=t,e>=0?e:0)}function D(e){return e=~~Math.ceil(+e),e<0?0:e}function W(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function q(e){return W(e)||o.isBuffer(e)||e&&"object"===(void 0===e?"undefined":_typeof(e))&&"number"==typeof e.length}function O(e){return e<16?"0"+e.toString(16):e.toString(16)}function J(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else{var o=n;r>=55296&&r<=57343&&n++;for(var i=encodeURIComponent(e.slice(o,n+1)).substr(1).split("%"),a=0;a<i.length;a++)t.push(parseInt(i[a],16))}}return t}function P(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}function R(e){for(var t,n,r,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),n=t>>8,r=t%256,o.push(r),o.push(n);return o}function X(e){return V.toByteArray(e)}function Y(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function z(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function G(e,t){Q("number"==typeof e,"cannot write a non-number as a number"),Q(e>=0,"specified a negative value for writing an unsigned value"),Q(e<=t,"value is larger than maximum value for type"),Q(Math.floor(e)===e,"value has a fractional component")}function H(e,t,n){Q("number"==typeof e,"cannot write a non-number as a number"),Q(e<=t,"value larger than maximum allowed value"),Q(e>=n,"value smaller than minimum allowed value"),Q(Math.floor(e)===e,"value has a fractional component")}function K(e,t,n){Q("number"==typeof e,"cannot write a non-number as a number"),Q(e<=t,"value larger than maximum allowed value"),Q(e>=n,"value smaller than minimum allowed value")}function Q(e,t){if(!e)throw new Error(t||"Failed assertion")}var V=e("base64-js"),Z=e("ieee754");n.Buffer=o,n.SlowBuffer=o,n.INSPECT_MAX_BYTES=50,o.poolSize=8192,o._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.isBuffer=function(e){return!(null===e||void 0===e||!e._isBuffer)},o.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=J(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=X(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},o.concat=function(e,t){if(Q(W(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new o(0);if(1===e.length)return e[0];var n;if("number"!=typeof t)for(t=0,n=0;n<e.length;n++)t+=e[n].length;var r=new o(t),i=0;for(n=0;n<e.length;n++){var a=e[n];a.copy(r,i),i+=a.length}return r},o.prototype.write=function(e,t,n,r){if(isFinite(t))isFinite(n)||(r=n,n=void 0);else{var o=r;r=t,t=n,n=o}t=Number(t)||0;var i=this.length-t;n?(n=Number(n))>i&&(n=i):n=i,r=String(r||"utf8").toLowerCase();var a;switch(r){case"hex":a=c(this,e,t,n);break;case"utf8":case"utf-8":a=d(this,e,t,n);break;case"ascii":a=h(this,e,t,n);break;case"binary":a=g(this,e,t,n);break;case"base64":a=p(this,e,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":a=y(this,e,t,n);break;default:throw new Error("Unknown encoding")}return a},o.prototype.toString=function(e,t,n){var r=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):n=r.length)===t)return"";var o;switch(e){case"hex":o=E(r,t,n);break;case"utf8":case"utf-8":o=w(r,t,n);break;case"ascii":o=m(r,t,n);break;case"binary":o=v(r,t,n);break;case"base64":o=b(r,t,n);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=I(r,t,n);break;default:throw new Error("Unknown encoding")}return o},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},o.prototype.copy=function(e,t,n,r){var i=this;if(n||(n=0),r||0===r||(r=this.length),t||(t=0),r!==n&&0!==e.length&&0!==i.length){Q(r>=n,"sourceEnd < sourceStart"),Q(t>=0&&t<e.length,"targetStart out of bounds"),Q(n>=0&&n<i.length,"sourceStart out of bounds"),Q(r>=0&&r<=i.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var a=r-n;if(a<100||!o._useTypedArrays)for(var u=0;u<a;u++)e[u+t]=this[u+n];else e._set(this.subarray(n,n+a),t)}},o.prototype.slice=function(e,t){var n=this.length;if(e=j(e,n,0),t=j(t,n,n),o._useTypedArrays)return o._augment(this.subarray(e,t));for(var r=t-e,i=new o(r,void 0,!0),a=0;a<r;a++)i[a]=this[a+e];return i},o.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},o.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},o.prototype.readUInt8=function(e,t){if(t||(Q(void 0!==e&&null!==e,"missing offset"),Q(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},o.prototype.readUInt16LE=function(e,t){return B(this,e,!0,t)},o.prototype.readUInt16BE=function(e,t){return B(this,e,!1,t)},o.prototype.readUInt32LE=function(e,t){return A(this,e,!0,t)},o.prototype.readUInt32BE=function(e,t){return A(this,e,!1,t)},o.prototype.readInt8=function(e,t){if(t||(Q(void 0!==e&&null!==e,"missing offset"),Q(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length)){return 128&this[e]?-1*(255-this[e]+1):this[e]}},o.prototype.readInt16LE=function(e,t){return U(this,e,!0,t)},o.prototype.readInt16BE=function(e,t){return U(this,e,!1,t)},o.prototype.readInt32LE=function(e,t){return L(this,e,!0,t)},o.prototype.readInt32BE=function(e,t){return L(this,e,!1,t)},o.prototype.readFloatLE=function(e,t){return _(this,e,!0,t)},o.prototype.readFloatBE=function(e,t){return _(this,e,!1,t)},o.prototype.readDoubleLE=function(e,t){return k(this,e,!0,t)},o.prototype.readDoubleBE=function(e,t){return k(this,e,!1,t)},o.prototype.writeUInt8=function(e,t,n){n||(Q(void 0!==e&&null!==e,"missing value"),Q(void 0!==t&&null!==t,"missing offset"),Q(t<this.length,"trying to write beyond buffer length"),G(e,255)),t>=this.length||(this[t]=e)},o.prototype.writeUInt16LE=function(e,t,n){S(this,e,t,!0,n)},o.prototype.writeUInt16BE=function(e,t,n){S(this,e,t,!1,n)},o.prototype.writeUInt32LE=function(e,t,n){C(this,e,t,!0,n)},o.prototype.writeUInt32BE=function(e,t,n){C(this,e,t,!1,n)},o.prototype.writeInt8=function(e,t,n){n||(Q(void 0!==e&&null!==e,"missing value"),Q(void 0!==t&&null!==t,"missing offset"),Q(t<this.length,"Trying to write beyond buffer length"),H(e,127,-128)),t>=this.length||(e>=0?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},o.prototype.writeInt16LE=function(e,t,n){T(this,e,t,!0,n)},o.prototype.writeInt16BE=function(e,t,n){T(this,e,t,!1,n)},o.prototype.writeInt32LE=function(e,t,n){M(this,e,t,!0,n)},o.prototype.writeInt32BE=function(e,t,n){M(this,e,t,!1,n)},o.prototype.writeFloatLE=function(e,t,n){N(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){N(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){x(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){x(this,e,t,!1,n)},o.prototype.fill=function(e,t,n){if(e||(e=0),t||(t=0),n||(n=this.length),"string"==typeof e&&(e=e.charCodeAt(0)),Q("number"==typeof e&&!isNaN(e),"value is not a number"),Q(n>=t,"end < start"),n!==t&&0!==this.length){Q(t>=0&&t<this.length,"start out of bounds"),Q(n>=0&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},o.prototype.inspect=function(){for(var e=[],t=this.length,r=0;r<t;r++)if(e[r]=O(this[r]),r===n.INSPECT_MAX_BYTES){e[r+1]="...";break}return"<Buffer "+e.join(" ")+">"},o.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(o._useTypedArrays)return new o(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer}throw new Error("Buffer.toArrayBuffer not supported in this browser")};var $=o.prototype;o._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=$.get,e.set=$.set,e.write=$.write,e.toString=$.toString,e.toLocaleString=$.toString,e.toJSON=$.toJSON,e.copy=$.copy,e.slice=$.slice,e.readUInt8=$.readUInt8,e.readUInt16LE=$.readUInt16LE,e.readUInt16BE=$.readUInt16BE,e.readUInt32LE=$.readUInt32LE,e.readUInt32BE=$.readUInt32BE,e.readInt8=$.readInt8,e.readInt16LE=$.readInt16LE,e.readInt16BE=$.readInt16BE,e.readInt32LE=$.readInt32LE,e.readInt32BE=$.readInt32BE,e.readFloatLE=$.readFloatLE,e.readFloatBE=$.readFloatBE,e.readDoubleLE=$.readDoubleLE,e.readDoubleBE=$.readDoubleBE,e.writeUInt8=$.writeUInt8,e.writeUInt16LE=$.writeUInt16LE,e.writeUInt16BE=$.writeUInt16BE,e.writeUInt32LE=$.writeUInt32LE,e.writeUInt32BE=$.writeUInt32BE,e.writeInt8=$.writeInt8,e.writeInt16LE=$.writeInt16LE,e.writeInt16BE=$.writeInt16BE,e.writeInt32LE=$.writeInt32LE,e.writeInt32BE=$.writeInt32BE,e.writeFloatLE=$.writeFloatLE,e.writeFloatBE=$.writeFloatBE,e.writeDoubleLE=$.writeDoubleLE,e.writeDoubleBE=$.writeDoubleBE,e.fill=$.fill,e.inspect=$.inspect,e.toArrayBuffer=$.toArrayBuffer,e}}).call(this,e("km4Umf"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/buffer/index.js","/../../../node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":1,buffer:2,ieee754:4,km4Umf:3}],3:[function(e,t,n){(function(e,n,r,o,i,a,u,f,s){function l(){}var e=t.exports={};e.nextTick=function(){var e="undefined"!=typeof window&&window.setImmediate,t="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||null===t)&&"process-tick"===e.data&&(e.stopPropagation(),n.length>0)){n.shift()()}},!0),function(e){n.push(e),window.postMessage("process-tick","*")}}return function(e){setTimeout(e,0)}}(),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=l,e.addListener=l,e.once=l,e.off=l,e.removeListener=l,e.removeAllListeners=l,e.emit=l,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}).call(this,e("km4Umf"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/gulp-browserify/node_modules/process/browser.js","/../../../node_modules/gulp-browserify/node_modules/process")},{buffer:2,km4Umf:3}],4:[function(e,t,n){(function(e,t,r,o,i,a,u,f,s){n.read=function(e,t,n,r,o){var i,a,u=8*o-r-1,f=(1<<u)-1,s=f>>1,l=-7,c=n?o-1:0,d=n?-1:1,h=e[t+c];for(c+=d,i=h&(1<<-l)-1,h>>=-l,l+=u;l>0;i=256*i+e[t+c],c+=d,l-=8);for(a=i&(1<<-l)-1,i>>=-l,l+=r;l>0;a=256*a+e[t+c],c+=d,l-=8);if(0===i)i=1-s;else{if(i===f)return a?NaN:1/0*(h?-1:1);a+=Math.pow(2,r),i-=s}return(h?-1:1)*a*Math.pow(2,i-r)},n.write=function(e,t,n,r,o,i){var a,u,f,s=8*i-o-1,l=(1<<s)-1,c=l>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,g=r?1:-1,p=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(u=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(f=Math.pow(2,-a))<1&&(a--,f*=2),t+=a+c>=1?d/f:d*Math.pow(2,1-c),t*f>=2&&(a++,f/=2),a+c>=l?(u=0,a=l):a+c>=1?(u=(t*f-1)*Math.pow(2,o),a+=c):(u=t*Math.pow(2,c-1)*Math.pow(2,o),a=0));o>=8;e[n+h]=255&u,h+=g,u/=256,o-=8);for(a=a<<o|u,s+=o;s>0;e[n+h]=255&a,h+=g,a/=256,s-=8);e[n+h-g]|=128*p}}).call(this,e("km4Umf"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../../node_modules/ieee754/index.js","/../../../node_modules/ieee754")},{buffer:2,km4Umf:3}],5:[function(e,t,n){(function(e,t,n,r,o,i,a,u,f){console.log("thanks!")}).call(this,e("km4Umf"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_b96eae6a.js","/")},{buffer:2,km4Umf:3}]},{},[5]);
//# sourceMappingURL=../../maps/assets/js/script.js.map