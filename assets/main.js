!function(e){function t(r){if(o[r])return o[r].exports;var a=o[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var o={};return t.m=e,t.c=o,t.p="/assets/",t(0)}([function(e,t,o){"use strict";o(1);var r=document.querySelector(".header__logotype-placeholder"),a=document.querySelectorAll(".header__logotype-img"),n=Math.floor(Math.random()*a.length),c=void 0;try{c=Number(localStorage.getItem("previousIndex"))}catch(s){throw new Error(s)}for(;n===c;)n=Math.floor(Math.random()*a.length);try{localStorage.setItem("previousIndex",n)}catch(s){throw new Error(s)}var l=a[n];l.onload=function(){l.classList.add("visible"),r.classList.remove("visible")},l.src=l.dataset.src,"ontouchstart"in document.documentElement&&document.body.classList.add("touch-browser")},function(e,t){}]);