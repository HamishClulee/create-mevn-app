(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3038bbbc"],{"0f35":function(t,e,s){"use strict";var n=s("564d"),i=s.n(n);i.a},5411:function(t,e,s){"use strict";var n=s("deed"),i=s.n(n);i.a},"564d":function(t,e,s){},"5ee3":function(t,e,s){"use strict";var n=s("8581"),i=s.n(n);i.a},6064:function(t,e,s){},8581:function(t,e,s){},b998:function(t,e,s){"use strict";var n=s("6064"),i=s.n(n);i.a},cbf0:function(t,e,s){"use strict";var n=s("e826"),i=s.n(n);i.a},deed:function(t,e,s){},e826:function(t,e,s){},eb19:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:t.large?"square6":"square5"}},[s("span"),s("span"),s("span"),s("span")])},i=[],a={name:"loadinginline",props:{large:{type:Boolean,default:!1}}},r=a,c=(s("0f35"),s("2877")),u=Object(c["a"])(r,n,i,!1,null,"353572d1",null);e["a"]=u.exports},eca8:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"account-container page-container restrict layout-col"},[s("h3",{staticClass:"h3"},[t._v("Account Settings")]),s("pagesection",{attrs:{qtitle:"Controls"}},[s("div",{staticClass:"controls-container"},[s("button",{staticClass:"button",on:{click:t.logout}},[t._v("LOGOUT")])])]),s("pagesection",{attrs:{id:"verify",qtitle:"Verify Email"}},[s("verify",{attrs:{user:t.user}})],1),s("pagesection",{attrs:{id:"unsub",qtitle:"Unsubscribe from Emails"}},[s("unsub",{attrs:{user:t.user}})],1)],1)},i=[],a=(s("b0c0"),s("5530")),r=s("2f62"),c=s("9109"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page-section-container"},[s("h4",{staticClass:"h4"},[t._v(t._s(t.qtitle))]),s("div",{staticClass:"slot-wrapper"},[t._t("default")],2)])},o=[],l={name:"pagesection",props:{qtitle:{type:String,default:"",required:!1}}},b=l,d=(s("5411"),s("2877")),f=Object(d["a"])(b,u,o,!1,null,"85ad6746",null),h=f.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"verify-container"},[s("p",[t._v("Your email address is "+t._s(t.verifystatus))]),t.user.isemailverified?t._e():s("button",{staticClass:"button",on:{click:t.verify}},[t._v("verify")]),s("h6",{staticClass:"h4"},[t._v(t._s(t.servermsg))])])},m=[],p=(s("d3b7"),s("ac1f"),s("3ca3"),s("841c"),s("ddb0"),s("2b3d"),{name:"verify",props:{user:{type:Object,required:!0}},data:function(){return{servermsg:""}},methods:{verify:function(){var t=this;new URLSearchParams(window.location.search);this.$QAuth.requestverifyemail().then((function(){t.servermsg="We have sent you an email at ".concat(t.getuser.email,", \n                please follow the instructions in the email to complete the verification process")})).catch((function(){c["c"].$emit(c["g"],c["b"])}))}},computed:Object(a["a"])({verifystatus:function(){return this.user.isemailverified?"verified, thank you!":"unverified, please click the button below to verify!"}},Object(r["b"])(["getuser"]))}),g=p,_=(s("cbf0"),Object(d["a"])(g,v,m,!1,null,"074d6970",null)),w=_.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"unsub-container"},[s("h6",{staticClass:"h6"},[t._v("Click here to unsubscribe from all emails from Welcome QR Codes. You can turn them back on at any time.")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.networkinprogress,expression:"networkinprogress"}],staticClass:"loading-container"},[s("loadinginline",{attrs:{large:!0}})],1),[s("p",[t._v("You are currently "+t._s(t.substatus)+" all emails.")]),t.networkinprogress?t._e():s("div",{staticClass:"sub-buttons-container"},[s("div",{staticClass:"sub-button",class:t.issubbed?"active":"inactive",on:{click:function(e){return t.subclicked("sub")}}},[t._v("SUBSCRIBED")]),s("div",{staticClass:"sub-button",class:t.issubbed?"inactive":"active",on:{click:function(e){return t.subclicked("unsub")}}},[t._v("UNSUBSCRIBED")])])]],2)},C=[],k=s("eb19"),$={name:"unsub",props:{user:{type:Object,required:!0}},components:{loadinginline:k["a"]},data:function(){return{issubbed:this.user.allowsemails,networkinprogress:!1}},methods:{subclicked:function(t){!0===this.issubbed&&"unsub"===t&&this.dotoggle(),!1===this.issubbed&&"sub"===t&&this.dotoggle()},dotoggle:function(){var t=this;this.networkinprogress=!0,this.$QAuth.togglesubscribe(!this.issubbed).then((function(e){t.issubbed=e.data.content.allow,t.networkinprogress=!1}))}},computed:{substatus:function(){return this.issubbed?"subscribed to":"unsubscribed from"}},watch:{user:function(){this.issubbed=this.user.allowsemails}}},O=$,j=(s("5ee3"),Object(d["a"])(O,y,C,!1,null,"d72c2438",null)),q=j.exports,E={name:"account",components:{pagesection:h,unsub:q,verify:w},data:function(){return{user:{}}},created:function(){var t=this;c["c"].$emit(c["d"],!0),this.$QAuth.usersettings().then((function(e){t.$store.commit("IS_AUTHED",e.data.user),t.user=e.data.user,c["c"].$emit(c["d"],!1)}))},methods:{logout:function(){var t=this;this.$QAuth.logout().then((function(e){t.$store.commit("IS_AUTHED",e.data.user),c["c"].$emit(c["g"],c["f"]),"home"!==t.$route.name&&t.$router.push({name:"home"})}))}},computed:Object(a["a"])({},Object(r["b"])(["isauthed"]))},S=E,U=(s("b998"),Object(d["a"])(S,n,i,!1,null,"b3435cdc",null));e["default"]=U.exports}}]);
//# sourceMappingURL=chunk-3038bbbc.991808fd.js.map