"use strict";var timer,num=3,pageNum=document.querySelector(".pageNum");timer=setInterval(function(){--num<=0&&(location.href="./index.html",clearInterval(timer)),pageNum.innerHTML=num},1e3);