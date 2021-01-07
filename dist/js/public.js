"use strict";function isPrime(e){if(1===e)return!1;for(var t=2;t<e;t++)if(e%t==0)return!1;return!0}function noRepeat(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function choiceSortDes(e){for(var t=0,n=0;n<e.length-1;n++)for(var o=n+1;o<e.length;o++)e[n]<e[o]&&(t=e[n],e[n]=e[o],e[o]=t);return e}function choiceSortAsc(e){for(var t=0,n=0;n<e.length-1;n++)for(var o=n+1;o<e.length;o++)e[n]>e[o]&&(t=e[n],e[n]=e[o],e[o]=t);return e}function bubblingSortAsc(e){for(var t=0,n=0;n<e.length-1;n++)for(var o=0;o<e.length-(n+1);o++)e[o]>e[o+1]&&(t=e[o],e[o]=e[o+1],e[o+1]=t);return e}function bubblingSortDes(e){for(var t=0,n=0;n<e.length-1;n++)for(var o=0;o<e.length-(n+1);o++)e[o]<e[o+1]&&(t=e[o],e[o]=e[o+1],e[o+1]=t);return e}function getRand(e,t){return parseInt(Math.random()*(t-e+1)+e)}function getColor(){for(var e="#",t=0;t<6;t++)e+="0123456789abcdef"[getRand(0,15)];return e}function getRGB(){return"rgb("+getRand(0,255)+","+getRand(0,255)+","+getRand(0,255)+")"}function getVerificationCode(e){for(var t,n="",o=0;o<e;o++)58<=(t=getRand(48,122))&&t<=64||91<=t&&t<=98?o--:n+=String.fromCharCode(t);return n}function getDateToLocal(e){var t=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),r=e.getHours(),i=e.getMinutes(),a=e.getSeconds();e.getDay();return t+"-"+toDB(n)+"-"+toDB(o)+" "+toDB(r)+":"+toDB(i)+":"+toDB(a)}function toDB(e){return e<10?"0"+e:e}function getDifTime(e,t){return(t.getTime()-e.getTime())/1e3}function $(e){return document.getElementById(e)}function getStyle(e,t){return e.currentStyle?e.currentStyle[t]:getComputedStyle(e)[t]}function animate(r,e,i){var a=JSON.parse(JSON.stringify(e));for(var t in a){if("opacity"===t)var n=parseInt(100*getComputedStyle(r)[t]),o=100*a[t];else if(-1!==t.indexOf("scroll"))n=r[t],o=a[t];else if("zIndex"===t)n=parseInt(getComputedStyle(r)[t]),o=a[t];else n=parseInt(getComputedStyle(r)[t]),o=a[t];a[t]={current:n,target:o}}clearInterval(r.timer),r.timer=setInterval(function(){for(var e in a){var t=a[e].current,n=a[e].target,o=(n-t)/10;if(o=0<o?Math.ceil(o):Math.floor(o),Math.abs(n-t)<=Math.abs(o)){for(var e in"opacity"===e?r.style[e]=n/100:-1!==e.indexOf("scroll")?r[e]=n:r.style[e]=n+"px",delete a[e],a)return!1;"function"==typeof i&&i(),clearInterval(r.timer)}else a[e].current+=o,"opacity"===e?r.style[e]=a[e].current/100:-1!==e.indexOf("scroll")?r[e]=a[e].current:r.style[e]="zIndex"===e?n:a[e].current+"px"}},20)}function offset(e,t){for(var n=0,o=0,r=e.clientLeft,i=e.clientTop;e;)o+=e.offsetLeft+e.clientLeft,n+=e.offsetTop+e.clientTop,e=e.offsetParent;return t?{left:o,top:n}:{left:o-r,top:n-i}}function isObject(e){return"[object Object]"===Object.prototype.toString.call(e)}function ajax(t){if(window.XMLHttpRequest)var n=new XMLHttpRequest;else n=new ActiveXObject("Microsoft.XMLHTTP");var e="";if(isObject(t.data)){for(var o in t.data)e+=o+"="+t.data[o]+"&";e=e.substring(0,e.length-1)}if("string"==typeof t.data&&(e=t.data),"get"===t.type.toLowerCase()){var r;r=t.cache?"":Date.now(),n.open(t.type,t.url+"?"+e+"&_="+r,!0),n.send(null)}"post"===t.type.toLowerCase()&&(n.open(t.type,t.url,!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.send(e)),n.onreadystatechange=function(){if(4===n.readyState)if(200===n.status)if("json"===t.dataType){var e=JSON.parse(n.responseText);t.success(e)}else"xml"===t.dataType?t.success(n.responseXML):t.success(n.responseText);else t.error(n.status)}}function jsonp(e){window[e.jsonpCallback]=e.success;var t="";if("string"==typeof e.data&&(t=e.data),isObject(e.data)){for(var n in e.data)t+=n+"="+e.data[n]+"&";t=t.substring(0,t.length-1)}var o=document.createElement("script");o.src=e.url+"?"+e.jsonp+"="+e.jsonpCallback+"&"+t,document.body.appendChild(o),o.onload=function(){document.body.removeChild(o)}}function $1(e){return document.querySelector(e)}function $2(e){return document.querySelectorAll(e)}function promiseAjax(a){return new Promise(function(t,n){if(window.XMLHttpRequest)var o=new XMLHttpRequest;else o=new ActiveXObject("Microsoft.XMLHTTP");var e="";if(isObject(a.data)){for(var r in a.data)e+=r+"="+a.data[r]+"&";e=e.substring(0,e.length-1)}if("string"==typeof a.data&&(e=a.data),"get"===a.type.toLowerCase()){var i;i=a.cache?"":Date.now(),o.open(a.type,a.url+"?"+e+"&_="+i,!0),o.send(null)}"post"===a.type.toLowerCase()&&(o.open(a.type,a.url,!0),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(e)),o.onreadystatechange=function(){if(4===o.readyState)if(200===o.status)if("json"===a.dataType){var e=JSON.parse(o.responseText);t(e)}else"xml"===a.dataType?t(o.responseXML):t(o.responseText);else n(o.status)}})}function setCookie(e){if(e.days=e.days||0,e.path=e.path||"",0===e.days)document.cookie=e.key+"="+e.val+"; path="+e.path;else{var t=new Date;t.setTime(t.getTime()-288e5+1e3*e.days),document.cookie=e.key+"="+e.val+"; expires="+t+"; path="+e.path}}function getCookie(e){for(var t=document.cookie.split("; "),n=0,o=t.length;n<o;n++){var r=t[n].split("=");if(r[0]===e)return r[1]}return null}function removeCookie(e){setCookie({key:e,val:"123",days:-2})}function has(e,t){for(var n=0,o=e.length;n<o;n++)if(e[n]===t)return!0;return!1}function norepeat(e){for(var t=[],n=0,o=e.length;n<o;n++)has(t,e[n])||t.push(e[n]);return t}function getNextNode(e){return e.nextElementSibling?e.nextElementSibling:e.nextSibling}function getPrevNode(e){return e.previousElementSibling?e.previousElementSibling:e.previousSibling}function addEvent(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n)}function removeEvent(e,t,n){e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n)}function on(e,t,i,a){addEvent(e,t,function(e){var t=e||event,n=t.target||t.srcElement,o=null,r=null;switch(i.substr(0,1)){case".":o=i.slice(1),r="className";break;case"#":o=i.slice(1),r="id";break;default:o=i,r="tagName"}"tagName"===r&&(o=o.toUpperCase()),n[r]===o&&a.call(n,t)})}function getScroll01(){return window.pageYOffset?{left:window.pageXOffset,top:window.pageYOffset}:document.documentElement.scrollTop?{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}:{left:document.body.scrollLeft,top:document.body.scrollTop}}function getScroll(){return{left:document.documentElement.scrollLeft||document.body.scrollLeft,top:document.documentElement.scrollTop||document.body.scrollTop}}function trim(e){return e.replace(/(^\s+)|(\s+$)/g,"")}function getDistance(e){for(var t=0,n=0;t+=e.offsetLeft,n+=e.offsetTop,"BODY"!=(e=e.offsetParent).nodeName;);return{left:t,top:n}}function getButton(e){if(e)return e.button;switch(window.event.button){case 1:return 0;case 4:return 1;case 2:return 2}}function getClient(){return"BackCompat"==document.compatMode?document.body.clientWidth:document.documentElement.clientWidth}function move(r,i,a){clearInterval(r.timer),r.timer=setInterval(function(){var e=!0;for(var t in i){var n=0;n="opacity"==t?100*parseFloat(getStyle(r,t)):parseInt(getStyle(r,t));var o=0<i[t]-n?1:-1;i[t]!=n&&(e=!1),"opacity"==t?(r.style.opacity=(n+o)/100,r.style.filter="alpha(opacity="+(n+o)+")"):"zIndex"==t?r.style.zIndex=i[t]:r.style[t]=n+o+"px"}e&&(clearInterval(r.timer),a&&a())},10)}function variableMotion(r,i,a,e){r=r,i=i;clearInterval(a.timer),a.timer=setInterval(function(){var e=a.offsetLeft,t=a.offsetTop,n=e+r,o=t+i;n<=0&&(n=0,r=-r),n>=window.innerWidth-a.offsetWidth&&(n=window.innerWidth-a.offsetWidth,r=-r),o>=window.innerHeight-a.offsetHeight&&(o=window.innerHeight-a.offsetHeight,i=-i),o<=0&&(o=0,i=-i),a.style.left=n+"px",a.style.top=o+"px"},e)}function glass(a){console.log(a);var l="minBox",c="mask",s="maxBox",u="maxImg";console.log(a[l]),a[l].onmousemove=function(e){var t=e||event,n=t.pageX-offset(a[l]).left-a[c].clientWidth/2,o=t.pageY-offset(a[s]).top-a[c].clientHeight/2;n<=0&&(n=0),n>=a[l].clientWidth-a[c].clientWidth&&(n=a[l].clientWidth-a[c].clientWidth),o<0&&(o=0),o>=a[l].clientHeight-a[c].clientHeight&&(o=a[l].clientHeight-a[c].clientHeight),a[c].style.left=n+"px",a[c].style.top=o+"px";var r=n/(a[l].clientWidth-a[c].clientWidth),i=o/(a[l].clientHeight-a[c].clientHeight);a[u].style.left=-r*(a[u].clientWidth-a[s].clientWidth)+"px",a[u].style.top=-i*(a[u].clientHeight-a[s].clientHeight)+"px"},a[l].onmouseenter=function(){a[c].style.display="block",a[s].style.display="block"},a[l].onmouseleave=function(){a[c].style.display="none",a[s].style.display="none"}}function animation(i,a,l){console.log(i),clearInterval(i.timer),i.timer=setInterval(function(){var e=!0;for(var t in a){if("opacity"===t)var n=parseInt(100*getStyle(i,t));else if(-1!==t.indexOf("scroll"))n=i[t];else n=parseInt(getStyle(i,t));var o=(a[t]-n)/10,r=n+(o=0<o?Math.ceil(o):Math.floor(o));"zIndex"===t&&(r=a[t]),n!=a[t]&&(e=!1),"opacity"===t?i.style.opacity=r/100:"zIndex"===t?i.style.zIndex=r:-1!==t.indexOf("scroll")?i[t]=r:i.style[t]=r+"px"}!0===e&&(clearInterval(i.timer),l&&l())},20)}function windowHeight(){return"CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight}function fn(e){return 2*e.match(/[\u4e00-\u9fa5]/g).length+e.match(/[\w ]/g).length}function countDown(l){setInterval(function(){var e,t,n,o,r,i,a;setInterval((e=new Date(l),t=new Date,n=e.getTime()-t.getTime(),o=Math.floor(n/1e3/60/60/24),r=Math.floor(n/1e3/60/60%24),i=Math.floor(n/1e3/60%60),a=Math.floor(n/1e3%60),document.getElementById("t_d").innerHTML=toDB(o)+"天",document.getElementById("t_h").innerHTML=toDB(r)+"时",document.getElementById("t_m").innerHTML=toDB(i)+"分",void(document.getElementById("t_s").innerHTML=toDB(a)+"秒")),1e3)},1e3,l)}