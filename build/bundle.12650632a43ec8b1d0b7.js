!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([,,,,function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(7)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(6)(!1)).push([t.i,"html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}body{display:flex;justify-content:center;align-items:flex-end;padding:0;margin:0;width:100%;height:100vh}#loading-screen-container{display:flex;justify-content:center;align-items:flex-start;background-color:black;height:50rem;width:70rem}#game-canvas{cursor:crosshair;margin-top:10px}.start-menu{justify-content:center;align-items:center;border:5px solid #c8c8c8;border-radius:14px;display:flex;left:35%;top:30%;flex-direction:column;height:400px;position:absolute;width:30%;z-index:3;visibility:hidden;color:white;text-align:center}.start-menu>*{font-size:20px;font-family:cursive}.loading-text{position:absolute;color:white;font-size:28px;transition:1.75s ease-out;align-self:center}.start-menu h1{font-size:34px}.start-menu h3{font-size:26px}.game-navbar{width:100%;height:90px;display:block;position:absolute;bottom:0}timer{color:white;width:33%;height:90px}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){var r={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,a=0,c=[],l=n(8);function u(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(g(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(g(i.parts[s],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function d(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function f(t,e){var n=o(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(t.insertAt.before,n);n.insertBefore(e,i)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function p(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return m(e,t.attrs),f(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var c=a++;n=s||(s=p(e)),r=x.bind(null,n,c,!1),i=x.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),f(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=l(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return u(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o];(a=r[s.id]).refs--,i.push(a)}t&&u(d(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function x(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";n.r(e);n(4);var r=class{constructor(t){this.ctx=t,this.randomdir=[-2,2],this.x=0,this.y=0,this.dx=2,this.dy=2,setInterval(()=>{this.dx=this.randomdir[Math.round(Math.random())],this.dy=this.randomdir[Math.round(Math.random())]},2e3),this.frameIndex=0,this.numberOfFrames=3,this.tickCount=0,this.ticksPerFrame=20,this.explodeIndex=3,this.explodeFrames=10}updateFrame(){this.tickCount+=1,this.tickCount>this.ticksPerFrame&&(this.tickCount=0,this.frameIndex<this.numberOfFrames-1?this.frameIndex+=1:this.frameIndex=0)}explodeDragon(t,e){const n=this.ctx;let r=new Image;r.addEventListener("load",n.drawImage(r,this.explodeIndex*(1e3/this.explodeFrames),0,100,100,t,e,this.explodeIndex*(1e3/this.explodeFrames),100)),r.src="https://i.imgur.com/lqEkVlw.png"}testDragon(){const t=this.ctx;let e=new Image;e.src="https://i.imgur.com/lqEkVlw.png",t.drawImage(e,this.explodeIndex*(1e3/this.explodeFrames),0,100,100,300,300,this.explodeIndex*(1e3/this.explodeFrames),100)}fallingDragon(){this.ctx,(new Image).src="https://i.imgur.com/ZGOk4iR.png"}draw(){const t=this.ctx;this.dy;let e=new Image;e.src="https://i.imgur.com/ZGOk4iR.png",this.dx>0?t.drawImage(e,this.frameIndex*(573/this.numberOfFrames),150,200,200,this.x,this.y,573/this.numberOfFrames,150):t.drawImage(e,this.frameIndex*(573/this.numberOfFrames),470,200,200,this.x,this.y,573/this.numberOfFrames,150),this.y+this.dy>600&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy}render(){this.updateFrame(),this.draw()}};var i=class{constructor(t){this.ctx=t,this.score=0,this.defaultTime=30,this.timer=document.querySelector(".timer")}background(){const t=this.ctx;let e=new Image;e.src="https://i.imgur.com/UeOlFUN.png",t.drawImage(e,0,0,1022,428,0,0,1100,700)}timer(){this.ctx,setInterval(()=>{this.defaultTime--},1e3),this.timer.innerHTML=this.defaultTime}};var o=class{constructor(t){this.ctx=t,this.screen=new i(t),this.dragon=new r(t),this.dragons=[],this.score=0,this.replayGame=document.getElementById("start-menu")}loop(t){requestAnimationFrame(()=>this.loop(t)),t()}destroyDragon(t){let e;for(e=0;e<this.dragons.length;e++)t===this.dragons[e]&&2===this.dragons.length?(this.dragons.pop(),this.score+=10):t===this.dragons[e]&&(this.dragons.splice(e,1),this.score+=10)}makeDragon(){let t;for(t=0;t<6;t++)this.dragons.push(new r(this.ctx))}drawScore(){this.ctx.font="30px Arial",this.ctx.fillStyle="red",this.ctx.fillText("Score: "+this.score,18,40)}play(){this.loop(()=>{this.ctx.clearRect(0,0,1200,800),this.render(),this.dragons.forEach(t=>{t.render()})})}onClick(t,e){let n,r,i;this.dragons.forEach(o=>{n=t-o.x-50,r=e-o.y-50,(i=Math.sqrt(n*n+r*r))<50&&this.destroyDragon(o)})}render(){this.screen.background(),this.drawScore()}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("game-canvas"),e=t.getContext("2d"),n=document.querySelector(".loading-text"),r=document.getElementById("start-game"),i=document.getElementById("start-menu");t.width=1100,t.height=700,t.style.zIndex="1";let s=new o(e);t.addEventListener("mousedown",function(e){let n=t.getBoundingClientRect(),r=(e.clientX-n.left)/(n.right-n.left)*t.width,i=(e.clientY-n.top)/(n.bottom-n.top)*t.height;s.onClick(r,i)},!1),n.addEventListener("transitionend",function(t){t.propertyName.includes("color")&&setTimeout(function(){n.innerHTML="Developed by: Henry Chu","Developed by: Henry Chu"===n.innerHTML&&setTimeout(()=>{n.innerHTML="",setTimeout(()=>i.setAttribute("style","visibility: visible;"),900)},1200)},1200)});r.addEventListener("click",()=>{i.setAttribute("style","visibility: hidden;"),s.makeDragon(),s.play()})})}]);
//# sourceMappingURL=bundle.12650632a43ec8b1d0b7.js.map