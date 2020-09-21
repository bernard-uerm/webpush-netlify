(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78f4af31"],{"0798":function(t,e,r){"use strict";r("0c18");var i=r("10d2"),s=r("afdd"),o=r("9d26"),a=r("f2e7"),n=r("7560"),l=r("2b0e"),c=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=r("58df"),u=r("d9bd");e["a"]=Object(d["a"])(i["a"],a["a"],c).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(s["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||n["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(u["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,r){},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n}));var i=r("b0af"),s=r("80d2");const o=Object(s["i"])("v-card__actions"),a=Object(s["i"])("v-card__subtitle"),n=Object(s["i"])("v-card__text"),l=Object(s["i"])("v-card__title");i["a"]},bb51:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("Login")],1)},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",{staticClass:"elevation-12"},[r("v-form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[t._v("ETriage Dashboard Login")]),r("v-spacer")],1),r("v-card-text",[r("v-text-field",{attrs:{label:"Employee ID Number",name:"login","prepend-icon":"mdi-account",type:"text",autofocus:"",autocomplete:"off",required:""},model:{value:t.loginForm.code,callback:function(e){t.$set(t.loginForm,"code",e)},expression:"loginForm.code"}}),r("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password",required:""},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),r("v-container",[null!=t.formMessage&&"Please wait..."!=t.formMessage?r("v-alert",{staticClass:"text-center",attrs:{type:"error"}},[t._v(" "+t._s(t.formMessage)+" ")]):t._e()],1),r("v-card-actions",[r("v-spacer"),t.isLoginLoading?t._e():r("v-btn",{attrs:{type:"submit",color:"primary"}},[t._v("Login")]),t.isLoginLoading?r("v-progress-circular",{staticClass:"mx-3",attrs:{indeterminate:"",color:"primary"}}):t._e(),r("v-btn",{attrs:{text:"",to:"/"}},[t._v("Cancel")])],1)],1)],1)],1)],1)],1)},a=[],n=(r("96cf"),r("1da1")),l=r("5530"),c=r("2f62"),d={data:function(){return{isLoginLoading:!1,loginForm:{code:null,password:null}}},computed:Object(l["a"])({},Object(c["b"])(["formMessage","isLoggedIn"])),mounted:function(){this.isLoggedIn&&this.$router.push("/main")},methods:{login:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoginLoading=!0,e.next=3,t.$store.dispatch("loginEmployee",t.loginForm);case 3:t.isLoginLoading=!1,null==t.formMessage&&t.$router.push("/main");case 5:case"end":return e.stop()}}),e)})))()}}},u=d,h=r("2877"),p=r("6544"),m=r.n(p),v=r("0798"),g=r("8336"),f=r("b0af"),b=r("99d9"),_=r("62ad"),w=r("a523"),y=r("58df"),B=r("7e2b"),C=r("3206"),$=Object(y["a"])(B["a"],Object(C["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),r={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(r.valid=e(t)))}):r.valid=e(t),r},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const r=this.watchers.find(t=>t._uid===e._uid);r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),x=r("490a"),V=r("0fd9"),E=r("2fa4"),L=r("8654"),O=r("71d9"),j=r("80d2");const I=Object(j["i"])("v-toolbar__title"),k=Object(j["i"])("v-toolbar__items");O["a"];var S=Object(h["a"])(u,o,a,!1,null,"fc595816",null),T=S.exports;m()(S,{VAlert:v["a"],VBtn:g["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VCol:_["a"],VContainer:w["a"],VForm:$,VProgressCircular:x["a"],VRow:V["a"],VSpacer:E["a"],VTextField:L["a"],VToolbar:O["a"],VToolbarTitle:I});var F={name:"Home",components:{Login:T}},A=F,D=Object(h["a"])(A,i,s,!1,null,null,null);e["default"]=D.exports}}]);
//# sourceMappingURL=chunk-78f4af31.8bfb963a.js.map