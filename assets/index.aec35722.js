var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,s=(e,s)=>{for(var i in s||(s={}))n.call(s,i)&&r(e,i,s[i]);if(t)for(var i of t(s))o.call(s,i)&&r(e,i,s[i]);return e};import("data:text/javascript;base64,Cg==");import{m as i,a,b as h}from"./vendor.a92413f7.js";const l={math:{fullName:{vi:"Toán học",en:"Mathematics"},bgColor:"from-red-400 to-yellow-400 dark:from-red-500 dark:to-yellow-500",first:[],second:[],third:[]}};for(const m in l)"function"!=typeof l[m]&&(l[m].calcAverage=function(){let e,t=0,n=0;if(t+=this.first.length+2*this.second.length+3*this.third.length,t>0){const o=[this.first,this.second,this.third];for(const e in o)for(const t of o[e])n+=t*Number(e+1);e=(n/t).toFixed(2)}else e="-:-";return this.average=e,e}),l[m].calcAverage();l.calcAverage=function(){const e=Object.keys(this).length-1;let t,n=0;for(const o in this){const e=Number(this[o].average);console.log(o,e),e&&(n+=e)}return t=n>0?(n/e).toFixed(2):"-:-",this.average=t,t},l.calcAverage();const c={code:"vi-VN",home:"Trang chủ",grade:"Lớp",semester:"Học kì",version:"Phiên bản",setting:"Cài đặt",bug:"Góp ý",schedule:"Thời khoá biểu"},u={code:"en-US",home:"Home",grade:"Class",semester:"Semester",version:"Version",setting:"Setting",bug:"Report bug",schedule:"Schedule"},d={sun:'<i class="uil uil-sun"></i>',moon:'<i class="uil uil-moon"></i>'},g=[[d.sun,"1","Chào cờ","Hoá học","Tin học","Hình học","Đại số",""],["","2","Sinh hoạt lớp","Hoá học","Tin học","Hình học","Đại số","Vật lí"],["","3","Toán","Hoá học","Anh văn","Hình học","","Vật lí"],["","4","Toán","Vật lí","Anh văn","Địa lí","","Lịch sử"],["","5","Đại số","Vật lí","GDCD","Địa lí","","Lịch sử"]],f=[[d.moon,"1","Ngữ văn","","Hoá học","","Anh văn",""],["","2","Ngữ văn","","GDQP-AN","","Thể dục",""],["","3","Ngữ văn","","Ngữ văn","","Thể dục",""],["","4","","","Sinh học","","Công nghệ",""],["","5","","","","","",""]];window.Alpine=i,i.plugin(a),i.plugin(h),i.data("allSubjects",(()=>({items:s({},l)}))),i.store("showResultCard",{on:!1,toggle(){this.on=!this.on}}),i.data("schedule",(()=>({cells:{head:["Session","Period","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],sun:[...g],moon:[...f]}}))),i.data("i18n",(function(){return{isEnglish:this.$persist(!1),langCode(){return this.isEnglish?"en":"vi"},lang(){return this.data=this.isEnglish?s({},u):s({},c),this.data}}})),i.store("avatar",{webp:"avatar.webp",png:"avatar.png"}),i.store("showSideBar",!1),i.start(),document.querySelectorAll("a").forEach((e=>{"_blank"===e.getAttribute("target")&&e.setAttribute("rel","noopener noreferrer")})),document.querySelectorAll("img").forEach((e=>{e.setAttribute("loading","lazy")}));
