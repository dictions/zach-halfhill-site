!function(e){function r(o){if(t[o])return t[o].exports;var a=t[o]={exports:{},id:o,loaded:!1};return e[o].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var t={};return r.m=e,r.c=t,r.p="/assets/",r(0)}([function(e,r,t){"use strict";t(1);var o=document.querySelector(".header__logotype-placeholder"),a=document.querySelectorAll(".header__logotype-img"),l=Math.floor(Math.random()*a.length),n=void 0;try{n=Number(localStorage.getItem("previousIndex"))}catch(s){throw new Error(s)}for(;l===n;)l=Math.floor(Math.random()*a.length);try{localStorage.setItem("previousIndex",l)}catch(s){throw new Error(s)}var c=a[l];c.onload=function(){c.classList.add("visible"),o.classList.remove("visible")},c.src=c.dataset.src},function(e,r){}]);