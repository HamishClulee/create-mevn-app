(function(e){function t(t){for(var o,c,a=t[0],u=t[1],l=t[2],f=0,d=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(e,t,n){},"9d27":function(e,t,n){},c966:function(e,t,n){"use strict";var o=n("9d27"),r=n.n(o);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},i=[],c=(n("5c0b"),n("2877")),a={},u=Object(c["a"])(a,r,i,!1,null,null,null),l=u.exports,s=n("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=n("8c4f"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-con"},[n("h1",[e._v("welcome to the boilerplate.")])])}],h={name:"home"},m=h,v=(n("c966"),Object(c["a"])(m,d,p,!1,null,"39c0296c",null)),b=v.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h1",[e._v("404")]),n("h2",[e._v("PAGE NOT FOUND")])])}],_={name:"notfound",data:function(){return{}},mounted:function(){},methods:{},computed:{}},y=_,E=Object(c["a"])(y,g,w,!1,null,null,null),O=E.exports,j=(n("a4d3"),n("e01a"),n("b0c0"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=document.getElementById("__meta_description"),o=document.getElementsByTagName("title")[0];if(e)if(o.text=e.title,n.content=e.description,e.noindex){var r=document.createElement("meta");r.name="robots",r.content="noindex",document.getElementsByTagName("head")[0].appendChild(r)}else try{for(var i=document.getElementsByTagName("meta"),c=0;c<i.length;c+=1)i[c]&&i[c].parentNode&&"robots"===i[c].name&&i[c].parentNode.removeChild(i[c])}catch(a){t&&t()}return!!t&&t()}),x=j;o["a"].use(f["a"]);var S=[{path:"/",name:"home",component:b,beforeEnter:function(e,t,n){x({title:"create-mevn-app home page",description:"Breif description of how the boilerplate functions",noindex:!0},n)}},{path:"*",name:"notfound",component:O,beforeEnter:function(e,t,n){x({title:"",description:"",noindex:!0},n)}}],N=new f["a"]({mode:"history",base:"/",routes:S}),k=N,T=n("2f62"),A={windowwidth:0,isauthed:!1},P=A,B={windowwidth:function(e){return e.windowwidth},isauthed:function(e){return e.isauthed}},C=B,$={IS_AUTHED:function(e,t){e.isauthed=t}},H=$,I=n("bc3a"),U=n.n(I),D=window.location.origin,M=U.a.create({baseURL:D,withCredentials:!0}),F=M,L={SESSION_CHALLENGE:function(e){var t=e.commit;F.get("/api/session_challenge").then((function(){t("IS_AUTHED",!0)})).catch((function(){t("IS_AUTHED",!1)}))}},G=L;o["a"].use(T["a"]);var J=new T["a"].Store({actions:G,getters:C,mutations:H,state:P});o["a"].config.productionTip=!1,new o["a"]({router:k,store:J,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.35933921.js.map