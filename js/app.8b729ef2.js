(function(){var t={1348:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("div",[t._m(0),t.gotop?e("a",{staticClass:"scroll-top d-flex align-items-center justify-content-center",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.toTop.apply(null,arguments)}}},[e("i",{staticClass:"bi bi-arrow-up-short"})]):t._e()])},a=[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer",attrs:{id:"footer"}},[e("div",{staticClass:"footer-legal text-center"},[e("div",{staticClass:"container d-flex flex-column"},[e("div",[e("div",{staticClass:"copyright text-center"},[t._v(" © Copyright "),e("strong",[e("span",[t._v("XXXXX")])]),t._v(". All Rights Reserved ")])])])])])}],s={name:"Footer",data(){return{gotop:!1}},methods:{handleScroll(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.gotop=t>600},toTop(){let t=document.body.scrollTop;const e=setInterval((()=>{document.body.scrollTop=document.documentElement.scrollTop=t-=50,t<=0&&clearInterval(e)}),10)}},mounted(){window.addEventListener("scroll",this.handleScroll,!0)}},o=s,r=n(1001),c=(0,r.Z)(o,i,a,!1,null,"f008a94e",null),l=c.exports},9714:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header fixed-top",attrs:{id:"header","data-scrollto-offset":"0"}},[e("div",{staticClass:"container-fluid d-flex align-items-center justify-content-between"},[e("a",{staticClass:"logo d-flex align-items-center scrollto me-auto me-lg-0",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.goAnchor("#home-page01","home")}}},[e("img",{attrs:{src:n(5080),alt:"logo"}}),t._m(0)]),e("nav",{staticClass:"navbar",attrs:{id:"navbar"}},[e("ul",[e("li",[e("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.goAnchor("#home-page01","home")}}},[t._v("主页")])]),e("li",{staticClass:"dropdown"},[e("a",{attrs:{href:""},on:{click:function(t){t.preventDefault()}}},[e("span",[t._v("法律咨询")]),t._v(" "),e("i",{staticClass:"bi bi-chevron-down dropdown-indicator"})]),t._m(1)]),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"legalTools"}}},[t._v("法律工具")])],1),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"passageListUniversity"}}},[t._v("高校风采")])],1),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"passageListTownShip"}}},[t._v("乡镇风采")])],1),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"passageListLawFirm"}}},[t._v("律所风采")])],1),e("li",[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"passageListTeam"}}},[t._v("团队资讯")])],1),e("li",[e("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.goAnchor("#contact","home")}}},[t._v("联系我们")])])]),e("i",{staticClass:"bi bi-list mobile-nav-toggle d-none"})]),e("button",{staticClass:"btn btn-getstarted",on:{click:function(e){return t.$router.push({name:"loginAccount"})}}},[t._v("登录 / 注册")])])])},a=[function(){var t=this,e=t._self._c;return e("h1",{staticStyle:{"padding-top":"6px"}},[t._v("律法青苗公益服务组织"),e("span",[t._v(".")])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"index.html"}},[t._v("日常法律咨询")])]),e("li",[e("a",{attrs:{href:"index-2.html"}},[t._v("乡村创业法律咨询")])])])}],s={name:"Header",methods:{goAnchor(t,e){this.$route.name===e?document.querySelector(t).scrollIntoView({behavior:"smooth"}):this.$router.push({name:e})}}},o=s,r=n(1001),c=(0,r.Z)(o,i,a,!1,null,"a737b0f2",null),l=c.exports},4209:function(){document.addEventListener("DOMContentLoaded",(()=>{"use strict";const t=document.querySelector("#header");t&&document.addEventListener("scroll",(()=>{window.scrollY>100?t.classList.add("sticked"):t.classList.remove("sticked")}));const e=document.querySelector(".mobile-nav-toggle");e&&e.addEventListener("click",(function(t){t.preventDefault(),document.querySelector("body").classList.toggle("mobile-nav-active"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")}));const n=document.querySelectorAll(".navbar .dropdown > a");n.forEach((t=>{t.addEventListener("click",(function(t){if(document.querySelector(".mobile-nav-active")){t.preventDefault(),this.classList.toggle("active"),this.nextElementSibling.classList.toggle("dropdown-active");let e=this.querySelector(".dropdown-indicator");e.classList.toggle("bi-chevron-up"),e.classList.toggle("bi-chevron-down")}}))}))}))},5191:function(t,e,n){"use strict";n(3003);var i=n(8309),a=(n(7645),n(7086)),s=(n(284),n(2195)),o=(n(8435),n(2979)),r=(n(143),n(7069)),c=n(6369),l=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{name:t.transitionName}},[e("keep-alive",[e("router-view",{staticClass:"transitionBody"})],1)],1)],1)},d=[],u={name:"App",components:{},data(){return{transitionName:"transitionLeft"}},watch:{$route(t,e){t.meta.index>e.meta.index?this.transitionName="transitionLeft":this.transitionName="transitionRight"}},mounted(){let t=document.getElementById("preloader");null!==t&&document.body.removeChild(t)}},f=u,m=n(1001),p=(0,m.Z)(f,l,d,!1,null,null,null),h=p.exports,v=(n(7154),n(4209),n(2631)),g=function(){var t=this,e=t._self._c;return e("div",[e("Header"),e("MainContent"),e("Footer")],1)},b=[],C=n(1348),x=n(9714),w=function(){var t=this,e=t._self._c;return e("main",[t._m(0),e("section",{staticClass:"align-items-center"},[e("div",{staticClass:"container"},[t._m(1),e("div",{staticClass:"row justify-content-md-center mt-5",attrs:{"data-aos":"fade-right","data-aos-duration":"1200"}},[t._m(2),e("div",{staticClass:"col col-lg-7",attrs:{"data-aos":"fade-left","data-aos-duration":"1500",id:"col02"}},[e("div",{staticClass:"table-group-divider",attrs:{id:"divider01"}}),e("p",{staticClass:"h2"},[t._v("· 子女是否有义务偿还父（或母）的欠债？")]),e("p",{staticClass:"text01 text-muted"},[t._v("  首先，父债子偿是不符合法律规定的...")]),e("div",{staticClass:"table-group-divider",attrs:{id:"divider01"}}),e("p",{staticClass:"h2"},[t._v("· 没有约定什么时候还款，我现在可以要求提...")]),e("p",{staticClass:"text01 text-muted"},[t._v("  相关法律规定，民间信贷...")]),e("div",{staticClass:"table-group-divider",attrs:{id:"divider01"}}),e("p",{staticClass:"h2"},[t._v("· 夏天天热，中暑算工伤吗？")]),e("p",{staticClass:"text01 text-muted"},[t._v("  根据相关法律规定，如果打工人们在工作过程中这样...")]),e("router-link",{staticClass:"read-more align-self-start",attrs:{to:{name:"legalTools"}}},[e("span",[t._v("了解更多")]),e("i",{staticClass:"bi bi-arrow-right"})])],1)])])]),e("section",{staticClass:"contact",attrs:{id:"contact"}},[t._m(3),e("div",{staticClass:"container",attrs:{"data-aos":"fade-up","data-aos-duration":"1200"}},[e("div",{staticClass:"row gy-5 gx-lg-5"},[e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"info"},[e("h3",[t._v("与我们联系")]),e("p",[t._v("想写的内容")]),t._m(4),t._m(5),t._m(6),e("div",{staticClass:"info-item d-flex"},[e("div",{staticClass:"mt-1"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"28",viewBox:"0 0 460 391"}},[e("image",{attrs:{id:"wechat",width:"460",height:"391","xlink:href":"data:img/png;base64,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"}})])]),t._m(7)])])]),t._m(8)])])])])},k=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"align-items-center",attrs:{id:"home-page01"}},[e("img",{staticClass:"img-fluid snow",attrs:{id:"img01",src:n(617),alt:"img01"}}),e("img",{staticClass:"img-fluid animated fadeInDown",attrs:{id:"img02",src:n(2355),alt:"img02"}})])},function(){var t=this,e=t._self._c;return e("h1",{staticClass:"text-center mb-4",attrs:{"data-aos":"fade-up","data-aos-duration":"800"}},[e("strong",[t._v("青苗实践圈")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col col-lg-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col col-md-auto"},[e("img",{staticClass:"img-fluid rounded",attrs:{src:n(8106),alt:"图片1"}})]),e("div",{staticClass:"col col-md-auto mt-5"},[e("img",{staticClass:"img-fluid rounded",attrs:{src:n(3838),alt:"图片2"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"section-header",attrs:{"data-aos":"fade-up","data-aos-duration":"800"}},[e("h2",[t._v("联系我们")]),e("p",[t._v("想写的内容 想写的内容.")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"info-item d-flex"},[e("i",{staticClass:"bi bi-geo-alt flex-shrink-0"}),e("div",[e("h4",[t._v("地址:")]),e("p",[t._v("地址")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"info-item d-flex"},[e("i",{staticClass:"bi bi-envelope flex-shrink-0"}),e("div",[e("h4",[t._v("邮箱:")]),e("p",[t._v("info@example.com")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"info-item d-flex"},[e("i",{staticClass:"bi bi-phone flex-shrink-0"}),e("div",[e("h4",[t._v("联系电话:")]),e("p",[t._v("+123456789")])])])},function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"margin-left":"20px"}},[e("h4",[t._v("微信:")]),e("p",[t._v("wx_id")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-8"},[e("form",{staticClass:"php-email-form"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 form-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"name",id:"name",placeholder:"请输入您的姓名",required:""}})]),e("div",{staticClass:"col-md-6 form-group mt-3 mt-md-0"},[e("input",{staticClass:"form-control",attrs:{type:"email",name:"email",id:"email",placeholder:"请输入您的联系方式",required:""}})])]),e("div",{staticClass:"form-group mt-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"subject",id:"subject",placeholder:"请输入主题",required:""}})]),e("div",{staticClass:"form-group mt-3"},[e("textarea",{staticClass:"form-control",attrs:{name:"message",placeholder:"请输入内容",required:""}})]),e("div",{staticClass:"text-center"},[e("button",[t._v("提  交")])])])])}],y={name:"MainContent"},L=y,A=(0,m.Z)(L,w,k,!1,null,"3a7f0e08",null),j=A.exports,E={name:"Home",components:{MainContent:j,Header:x.Z,Footer:C.Z}},P=E,Z=(0,m.Z)(P,g,b,!1,null,"1578d27d",null),T=Z.exports;const D=v.Z.prototype.push;v.Z.prototype.push=function(t){return D.call(this,t).catch((t=>t))};const Y=new v.Z({routes:[{name:"home",path:"/",component:T,meta:{index:0}},{name:"university",path:"/university",component:()=>n.e(131).then(n.bind(n,2131)),meta:{index:1},children:[{name:"passageListUniversity",path:"",component:()=>n.e(601).then(n.bind(n,9601)),meta:{index:2}},{name:"zjut",path:"zjut",component:()=>n.e(288).then(n.bind(n,9288)),meta:{index:3}}]},{name:"township",path:"/township",component:()=>n.e(13).then(n.bind(n,4013)),meta:{index:1},children:[{name:"passageListTownShip",path:"",component:()=>n.e(679).then(n.bind(n,3679)),meta:{index:2}},{name:"tsg",path:"tsg",component:()=>n.e(336).then(n.bind(n,336)),meta:{index:3}},{name:"tlh",path:"tlh",component:()=>n.e(580).then(n.bind(n,5580)),meta:{index:3}},{name:"thc",path:"thc",component:()=>n.e(250).then(n.bind(n,2250)),meta:{index:3}}]},{name:"team",path:"/team",component:()=>n.e(220).then(n.bind(n,6220)),meta:{index:1},children:[{name:"passageListTeam",path:"",component:()=>n.e(939).then(n.bind(n,939)),meta:{index:2}},{name:"xjc",path:"xjc",component:()=>n.e(297).then(n.bind(n,6297)),meta:{index:3}}]},{name:"lawFirm",path:"/lawFirm",component:()=>n.e(585).then(n.bind(n,4585)),meta:{index:1},children:[{name:"passageListLawFirm",path:"",component:()=>n.e(492).then(n.bind(n,2492)),meta:{index:2}},{name:"jzl",path:"jzl",component:()=>n.e(705).then(n.bind(n,1705)),meta:{index:3}},{name:"zd",path:"zd",component:()=>n.e(114).then(n.bind(n,3114)),meta:{index:3}}]},{name:"legalTools",path:"/legalTools",component:()=>n.e(460).then(n.bind(n,4460)),meta:{index:1},children:[{name:"faq",path:"faq",component:()=>n.e(8).then(n.bind(n,6008)),meta:{index:2}},{name:"instrumentTemplate",path:"instrumentTemplate",component:()=>n.e(760).then(n.bind(n,9760)),meta:{index:2}},{name:"compensationCalculation",path:"compensationCalculation",component:()=>n.e(471).then(n.bind(n,471)),meta:{index:2}}]},{name:"login",path:"/login",redirect:{name:"loginAccount"},component:()=>n.e(48).then(n.bind(n,5048)),meta:{index:1},children:[{name:"loginAccount",path:"",component:()=>n.e(718).then(n.bind(n,6718))},{name:"loginPhone",path:"phone",component:()=>n.e(178).then(n.bind(n,1178))}]}]});var z=Y,F=n(6905),G=n.n(F),I=n(6548),M=n.n(I);c.ZP.config.productionTip=!1,c.ZP.use(v.Z),c.ZP.use(r.ZP),c.ZP.use(o.Z),c.ZP.use(s.Z),c.ZP.use(a.Z),c.ZP.use(i.Z);let O={container:"body",duration:500,easing:"ease",offset:-50,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};c.ZP.use(M(),O),new c.ZP({render:t=>t(h),router:z,mounted(){G().init()}}).$mount("#app")},617:function(t,e,n){"use strict";t.exports=n.p+"img/home_light.c6382d4d.jpg"},8106:function(t,e,n){"use strict";t.exports=n.p+"img/img1.f1bce501.jpg"},3838:function(t,e,n){"use strict";t.exports=n.p+"img/img2.239c5489.jpg"},5080:function(t,e,n){"use strict";t.exports=n.p+"img/logo.07cc59eb.png"},2355:function(t,e,n){"use strict";t.exports=n.p+"img/title.25467726.png"}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var s=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,s){if(!i){var o=1/0;for(d=0;d<t.length;d++){i=t[d][0],a=t[d][1],s=t[d][2];for(var r=!0,c=0;c<i.length;c++)(!1&s||o>=s)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(r=!1,s<o&&(o=s));if(r){t.splice(d--,1);var l=a();void 0!==l&&(e=l)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[i,a,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{8:"962d9a52",13:"e65986c5",48:"7086d9f8",114:"2a6e739b",131:"f703f3c3",178:"99ecf71b",220:"b3b0c90c",250:"3cdf75fc",288:"be01690b",297:"6f7c4010",336:"efbb95ef",460:"da968f0b",471:"aa6727a8",492:"cf619d87",580:"121dfa41",585:"38cb3efa",601:"60463120",679:"ae6c9723",705:"720f7e60",718:"36c43f57",760:"8237c9c1",939:"3d2a3baf"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{8:"f70d273c",13:"54768de5",48:"c0b938f4",114:"dd464305",131:"ebb958c7",178:"719d59e8",220:"e75a7c8f",250:"47b8b79e",288:"0898f938",297:"635045d2",336:"da6a0bf9",460:"a4a0b257",471:"d56a6abc",492:"25a7ab16",580:"ca4fb055",585:"d517ebfe",601:"c4d0b7d9",679:"ff19c647",705:"474d05b7",718:"2211660b",760:"1caa88f8",939:"cf2c3326"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="legal-aid:";n.l=function(i,a,s,o){if(t[i])t[i].push(a);else{var r,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+s){r=u;break}}r||(c=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+s),r.src=i),t[i]=[a];var f=function(e,n){r.onerror=r.onload=null,clearTimeout(m);var a=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=f.bind(null,r.onerror),r.onload=f.bind(null,r.onload),c&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/static/"}(),function(){var t=function(t,e,n,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(s){if(a.onerror=a.onload=null,"load"===s.type)n();else{var o=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=r,a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=s,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var a=n[i],s=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(s===t||s===e))return a}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){a=o[i],s=a.getAttribute("data-href");if(s===t||s===e)return a}},i=function(i){return new Promise((function(a,s){var o=n.miniCssF(i),r=n.p+o;if(e(o,r))return a();t(i,r,a,s)}))},a={143:0};n.f.miniCss=function(t,e){var n={8:1,13:1,48:1,114:1,131:1,178:1,220:1,250:1,288:1,297:1,336:1,460:1,471:1,492:1,580:1,585:1,601:1,679:1,705:1,718:1,760:1,939:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=i(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,i){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var s=new Promise((function(n,i){a=t[e]=[n,i]}));i.push(a[2]=s);var o=n.p+n.u(e),r=new Error,c=function(i){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var s=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",r.name="ChunkLoadError",r.type=s,r.request=o,a[1](r)}};n.l(o,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,s,o=i[0],r=i[1],c=i[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(c)var d=c(n)}for(e&&e(i);l<o.length;l++)s=o[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(d)},i=self["webpackChunklegal_aid"]=self["webpackChunklegal_aid"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5191)}));i=n.O(i)})();
//# sourceMappingURL=app.8b729ef2.js.map