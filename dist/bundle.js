var kinalytics=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);class r{static appendQueryString(e,n,t){let r="?";return null==t||0===t.length?e:(e.includes("?")&&(r="&"),`${e}${r}${n}=${encodeURI(t)}`)}static getAppParametersFromCurrentUrl(){const e=new URLSearchParams(window.location.search);return{AppId:e.get(r.QUERYSTRING_KEY_APP)||null,Redirect:e.get(r.QUERYSTRING_KEY_APP_RETURNTO)||null}}}r.QUERYSTRING_KEY_APP="app",r.QUERYSTRING_KEY_APP_RETURNTO="return_to";var o=r;t.d(n,"dynamicLinkBuilder",function(){return c});const i="com.thekinapp.prod",u="com.thekinapp.prod",a="kinapp.page.link",p="1437611153";function c(e){const n=e.indexOf("play.google.com")>=0;let t=window.location.href.replace("http://localhost:3000","https://web.dev.thekinapp.com");return t=o.appendQueryString(t,"anid",function(){var e=function(){var e;try{e=document.cookie}catch(n){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(n.stack||n),e=""}return e}();const n="ajs_anonymous_id";return e.split(";").map(e=>e.trim()).filter(e=>e.substring(0,n.length+1)===`${n}=`).map(e=>decodeURIComponent(e.substring(n.length+1)))[0].replace(/"/g,"")||null}()),n?e=o.appendQueryString(e,"url",t):(e=`https://${a}/`,e=o.appendQueryString(e,"link",t),e=o.appendQueryString(e,"apn",u),e=o.appendQueryString(e,"ibi",i),e=o.appendQueryString(e,"isi",p),e=o.appendQueryString(e,"efr","1")),e}}]);