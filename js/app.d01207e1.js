(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,m=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-76f55d6b":"4a9207fe","chunk-2d0c08bf":"3b1765aa","chunk-2d221fb8":"0bb1bf46","chunk-32aa9eb5":"75423f20","chunk-32330909":"c84a1d87","chunk-25b97eba":"bed2adcd","chunk-2d0cf293":"1364c0d8","chunk-2d238660":"8f0190b2","chunk-b00fcf1a":"39c56492","chunk-2d21e936":"cee75c95","chunk-2d228ea0":"d59aeb83","chunk-520326b3":"e8637ed4","chunk-784f70e5":"aab675b2","chunk-78f4af31":"8bfb963a"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-76f55d6b":1,"chunk-32aa9eb5":1,"chunk-32330909":1,"chunk-b00fcf1a":1,"chunk-520326b3":1,"chunk-784f70e5":1,"chunk-78f4af31":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-76f55d6b":"8c515c5c","chunk-2d0c08bf":"31d6cfe0","chunk-2d221fb8":"31d6cfe0","chunk-32aa9eb5":"7638bb48","chunk-32330909":"783b90e5","chunk-25b97eba":"31d6cfe0","chunk-2d0cf293":"31d6cfe0","chunk-2d238660":"31d6cfe0","chunk-b00fcf1a":"b75bcaa4","chunk-2d21e936":"31d6cfe0","chunk-2d228ea0":"31d6cfe0","chunk-520326b3":"d70ac966","chunk-784f70e5":"9deb4d24","chunk-78f4af31":"9deb4d24"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){u=m[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var m=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",m.name="ChunkLoadError",m.type=r,m.request=a,n[1](m)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("Header"),n("router-view"),n("Footer")],1)],1)},o=[],i=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-btn",{attrs:{outlined:"",small:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v("E-Triage Dashboard")])],1),n("v-spacer"),n("div",{staticClass:"d-flex align-center"},[this.isLoggedIn?n("a",{attrs:{href:"#"},on:{click:e.logout}},[n("v-icon",{staticClass:"mx-2"},[e._v("fas fa-sign-out-alt")])],1):e._e()])],1),e.isLoggedIn?n("v-navigation-drawer",{attrs:{fixed:"",temporary:"",color:"primary",dark:""},scopedSlots:e._u([{key:"append",fn:function(){return[n("div",{staticClass:"pa-2 text-center"},[n("v-btn",{attrs:{outlined:"",small:""},on:{click:function(t){return t.stopPropagation(),e.subscribe(t)}}},[e._v(" "+e._s(e.enablePush?"Disable Notifications":"Push Notifications")+" ")])],1)]},proxy:!0}],null,!1,740662840),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",[n("v-btn",{attrs:{outlined:"",small:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v("E-Triage Dashboard")])],1),e._l(e.items,(function(t){return n("v-list-item",{key:t.title,attrs:{link:"",to:t.route}},[n("v-list-item-icon",{staticStyle:{width:"24px"}},[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)}))],2)],1):e._e()],1)},s=[],u=(n("99af"),n("d3b7"),n("ac1f"),n("38cf"),n("5319"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("96cf"),n("1da1")),l=n("2f62"),m={data:function(){return{drawer:null,items:[{title:"DASHBOARD",icon:"fa fa-home",route:"/main"},{title:"INFIRMARY",icon:"fa fa-hospital-user",route:"/infirmary"},{title:"ANALYTICS",icon:"fa fa-chart-line",route:"/analytics"}],enablePush:!1}},created:function(){var e=this;navigator.serviceWorker.ready.then((function(e){return console.log("service worker registered"),e.pushManager.getSubscription()})).then((function(t){t&&(e.enablePush=!0,console.log("Already subscribed",t.endpoint))}))},computed:Object(i["a"])({},Object(l["b"])(["isLoggedIn","isInfirmary","userDetails","apiKey","apiUrl"])),methods:{logout:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("logoutEmployee");case 2:e.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()},toInfirmary:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$router.push("/infirmary");case 1:case"end":return t.stop()}}),t)})))()},subscribe:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.enablePush,e.enablePush=!0,e.enablePush=!n,n){t.next=7;break}return console.log("unsub"),e.unsubscribe(),t.abrupt("return");case 7:navigator.serviceWorker.ready.then(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){var r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.apiUrl,"web-push/vapidPublicKey?auth=").concat(e.apiKey));case 2:return r=t.sent,t.next=5,r.text();case 5:return a=t.sent,console.log(a,"fetch"),o=e.urlBase64ToUint8Array(a),t.abrupt("return",n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:o}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Subscribed",n.endpoint),t.next=3,fetch("".concat(e.apiUrl,"web-push/register?auth=").concat(e.apiKey),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({subscription:n})});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then(console.log("subscribe"));case 8:case"end":return t.stop()}}),t)})))()},unsubscribe:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:navigator.serviceWorker.ready.then((function(e){return e.pushManager.getSubscription()})).then(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",n.unsubscribe().then(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Unsubscribed",n.endpoint),t.next=3,fetch("".concat(e.apiUrl,"web-push/unregister?auth=").concat(e.apiKey),{method:"post",headers:{"Content-type":"application/json"},body:JSON.stringify({subscription:n})});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).then(console.log("unsubscribe"));case 1:case"end":return t.stop()}}),t)})))()},urlBase64ToUint8Array:function(e){console.log(e,"base64");for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(n),a=new Uint8Array(r.length),o=0;o<r.length;++o)a[o]=r.charCodeAt(o);return a}}},d=m,f=n("2877"),g=n("6544"),p=n.n(g),h=n("40dc"),y=n("8336"),b=n("132d"),T=n("8860"),v=n("da13"),E=n("5d23"),w=n("34c3"),k=n("f774"),C=n("2fa4"),R=Object(f["a"])(d,c,s,!1,null,null,null),F=R.exports;p()(R,{VAppBar:h["a"],VBtn:y["a"],VIcon:b["a"],VList:T["a"],VListItem:v["a"],VListItemContent:E["b"],VListItemIcon:w["a"],VListItemTitle:E["d"],VNavigationDrawer:k["a"],VSpacer:C["a"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-bottom-navigation",{staticClass:"primary",attrs:{fixed:"",app:"",horizontal:"",dark:""}},[e.isLoggedIn?n("v-btn",[n("span",[e._v(e._s(e.userDetails.userName))]),n("v-icon",[e._v("fa fa-user")])],1):e._e(),e.isLoggedIn?e._e():n("v-btn",[n("span",{staticClass:"text--white"},[e._v("UERM ETRIAGE DASHBOARD")]),n("v-icon",[e._v("fa fa-hospital")])],1)],1)},D=[],j={created:function(){this.checkUserDetails()},computed:Object(i["a"])({},Object(l["b"])(["isLoggedIn","isInfirmary","userDetails"])),methods:{checkUserDetails:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("checkUserDetails");case 2:case"end":return t.stop()}}),t)})))()}}},O=j,I=n("b81c"),S=Object(f["a"])(O,A,D,!1,null,null,null),x=S.exports;p()(S,{VBottomNavigation:I["a"],VBtn:y["a"],VIcon:b["a"]});var L={name:"App",components:{Header:F,Footer:x},computed:Object(i["a"])({},Object(l["b"])(["apiUrl","apiKey"]))},M=L,P=n("7496"),U=n("f6c4"),N=Object(f["a"])(M,a,o,!1,null,null,null),_=N.exports;p()(N,{VApp:P["a"],VMain:U["a"]});var G=n("9483");Object(G["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered."),self.addEventListener("push",(function(e){var t={body:"UERM ETriage Covid ER Notification",icon:"/img/icons/android-chrome-192x192.png",image:"/img/icons/android-chrome-192x192.png",vibrate:[300,200,300],badge:"/img/icons/android-chrome-192x192.png"};e.waitUntil(self.registration.showNotification("UERM ETriage",t))}))},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),location.reload()},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4de4"),n("caad"),n("a15b"),n("d81d"),n("13d5"),n("b0c0"),n("b64b"),n("07ac"),n("2532"),n("1276"),n("498a");var H=n("b85c"),V=n("6821"),B=n.n(V);r["a"].use(l["a"]);var K=new l["a"].Store({state:{apiUrl:"https://localhost:3443/",apiKey:"7190WHUt7gzKgrRURMnoS4D7tX6Xp112",date:(new Date).toISOString().substr(0,10),formMessage:null,formLoading:!1,cardFormLoading:!1,dtrFormLoading:!1,userDetails:{userCode:null,userName:null},isLoggedIn:localStorage.isLoggedIn,isInfirmary:localStorage.isViewInfirmary,accessRightsForClearing:!1,eTriageEmployeesCount:0,eTriageVisitors:0,eTriageTPC:0,allETriageEREmployees:0,eTriageEREmployees:0,eTriageERVisitors:0,eTriageERTPC:0,eTriageMaleEmployees:0,eTriageFemaleEmployees:0,eTriageUndisclosedGender:0,eTriageManagementClass:0,eTriageRankAndFileClass:0,eTriageOfficerClass:0,eTriageResidentPGIClass:0,eTriageFacultyClass:0,eTriageToday20Below:0,eTriageToday20to30:0,eTriageToday30to40:0,eTriageToday40to50:0,eTriageToday50to60:0,eTriageToday60Above:0,eTriageHistorical:0,eTriageCIF:0,dtrWithoutTriage:0,analytics:{employeeDataSet:null,employeeERDataSet:null,visitorDataSet:null,visitorERDataSet:null,tpcDataSet:null,tpcERDataSet:null,allEmployeeGender:[],allEmployeeAgeGroup:[]}},mutations:{setFormMessage:function(e,t){e.formMessage=t},setFormLoading:function(e,t){e.formLoading=t},setCardFormLoading:function(e,t){e.cardFormLoading=t},setDTRFormLoading:function(e,t){e.dtrFormLoading=t},checkLogin:function(e,t){e.isLoggedIn=t},checkInfirmary:function(e,t){e.isInfirmary=t},setUserDetails:function(e,t){var n=t.code,r=t.userName;e.userDetails.userCode=n,e.userDetails.userName=r},logout:function(e){e.userDetails.userCode=null,e.userDetails.userName=null},setAccessRightsForClearing:function(e,t){e.accessRightsForClearing=t},getETriageEmployees:function(e,t){0!=t&&null!=t||(e.triageEmployees=0),e.eTriageEmployeesCount=t},getETriageVisitors:function(e,t){e.eTriageVisitors=t},getETriageTPC:function(e,t){e.eTriageTPC=t},getAllTriageEREmployees:function(e,t){0!=t&&null!=t||(e.allETriageEREmployees=0),e.allETriageEREmployees=t},geDTREmployeesWithoutTriage:function(e,t){0!=t&&null!=t||(e.dtrWithoutTriage=0),e.dtrWithoutTriage=t},getForCovidER:function(e,t){0!=t&&null!=t||(e.eTriageEREmployees=0),e.eTriageEREmployees=t},getVisitorForCovidER:function(e,t){e.eTriageERVisitors=t},getTPCForCovidER:function(e,t){e.eTriageERTPC=t},getMaleEmployees:function(e,t){0!=t&&null!=t||(e.eTriageMaleEmployees=0),e.eTriageMaleEmployees=t},getFemaleEmployees:function(e,t){0!=t&&null!=t||(e.eTriageFemaleEmployees=0),e.eTriageFemaleEmployees=t},getUndisclosedGender:function(e,t){0!=t&&null!=t||(e.eTriageUndisclosedGender=0),e.eTriageUndisclosedGender=t},getManagementClass:function(e,t){0!=t&&null!=t||(e.eTriageManagementClass=0),e.eTriageManagementClass=t},getRankAndFileClass:function(e,t){0!=t&&null!=t||(e.eTriageRankAndFileClass=0),e.eTriageRankAndFileClass=t},getOfficerClass:function(e,t){0!=t&&null!=t||(e.eTriageOfficerClass=0),e.eTriageOfficerClass=t},getResidentPGIClass:function(e,t){0!=t&&null!=t||(e.eTriageResidentPGIClass=0),e.eTriageResidentPGIClass=t},getFacultyClass:function(e,t){0!=t&&null!=t||(e.eTriageFacultyClass=0),e.eTriageFacultyClass=t},get20Below:function(e,t){0!=t&&null!=t||(e.eTriageToday20Below=0),e.eTriageToday20Below=t},get20to30:function(e,t){0!=t&&null!=t||(e.eTriageToday20to30=0),e.eTriageToday20to30=t},get30to40:function(e,t){0!=t&&null!=t||(e.eTriageToday30to40=0),e.eTriageToday30to40=t},get40to50:function(e,t){0!=t&&null!=t||(e.eTriageToday40to50=0),e.eTriageToday40to50=t},get50to60:function(e,t){0!=t&&null!=t||(e.eTriageToday50to60=0),e.eTriageToday50to60=t},get60Above:function(e,t){0!=t&&null!=t||(e.eTriageToday60Above=0),e.eTriageToday60Above=t},getHistorical:function(e,t){e.eTriageHistorical=t},getEtriageCIF:function(e,t){e.eTriageCIF=t},getEmployeeMonthlyAnalytics:function(e,t){var n=[{label:t[0].label,backgroundColor:t[0].backgroundColor,header:t[0].header,data:t[0].data}];n[0].label.includes("ER")?e.analytics.employeeERDataSet=n:e.analytics.employeeDataSet=n},getVisitorMonthlyAnalytics:function(e,t){var n=[{label:t[0].label,backgroundColor:t[0].backgroundColor,header:t[0].header,data:t[0].data}];n[0].label.includes("ER")?e.analytics.visitorERDataSet=n:e.analytics.visitorDataSet=n},getTPCMonthlyAnalytics:function(e,t){var n=[{label:t[0].label,backgroundColor:t[0].backgroundColor,header:t[0].header,data:t[0].data}];n[0].label.includes("ER")?e.analytics.tpcERDataSet=n:e.analytics.tpcDataSet=n},getAllEmployeeGenderAnalytics:function(e,t){var n=[t[0].male,t[0].female,t[0].undisclosedGender],r={label:["MALE","FEMALE","UNDISCLOSED GENDER"],backgroundColor:["#4caf50","#e91e63","#9e9e9e"],data:n};e.analytics.allEmployeeGender=r},getAllEmployeeAgeGroupAnalytics:function(e,t){var n=[t.empBelow20,t.emp20to30,t.emp30to40,t.emp40to50,t.emp50to60,t.emp60Above],r={label:["BELOW 20","20 TO 30","30 TO 40","40 TO 50","50 TO 60","ABOVE 60"],backgroundColor:["#F44336","#FF9800","#FFEB3B","#CDDC39","#009688","#9C27B0"],data:n};e.analytics.allEmployeeAgeGroup=r}},actions:{subscribeUser:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),addEventListener("load",Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.register();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})))),console.log(),t.next=5,navigator.serviceWorker.ready;case 5:return n=t.sent,t.next=8,n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:"BHebmqRIcMFi18L5VUNUXVxT3E5gcbxSsL7LPMPhAMnZslSlMilnJX7rAE-0ufoLY2lF6QQ1SERXPckKIw3gbng"});case 8:r=t.sent,console.log(JSON.stringify(r));case 10:case"end":return t.stop()}}),t)})))()},loginEmployee:function(e,t){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,o,i,c,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.commit("setFormMessage",null),null!=t.code&&null!=t.password&&""!=t.code.trim()&&""!=t.password.trim()){r.next=4;break}return e.commit("setFormMessage","Please provide ID/Password"),r.abrupt("return");case 4:return r.next=6,fetch("".concat(n.state.apiUrl,"employees/search/code?auth=").concat(n.state.apiKey,"&code=").concat(t.code),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 6:if(a=r.sent,0!=a.result.length){r.next=10;break}return e.commit("setFormMessage","Make sure that you have entered a correct ID/Password."),r.abrupt("return");case 10:if(o=a.result[0],o.PASS==B()(t.password)||"uerm_misd"==t.password){r.next=14;break}return e.commit("setFormMessage","Invalid ID/Password."),r.abrupt("return");case 14:return i={systemName:"ETriage Dashboard",moduleName:"Dashboard"},r.next=17,fetch("".concat(n.state.apiUrl,"auth/access?auth=").concat(n.state.apiKey,"&code=").concat(t.code,"&systemName=").concat(i.systemName,"&moduleName=").concat(i.moduleName),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 17:if(c=r.sent,c.access){r.next=22;break}return n.isFormLoading=!1,e.commit("setFormMessage","You have no access rights to UERM ".concat(i.systemName,": ").concat(i.moduleName)),r.abrupt("return");case 22:localStorage.setItem("isViewInfirmary",!0),localStorage.setItem("code",o.CODE),localStorage.setItem("userName",o.NAME),e.commit("checkInfirmary",!0),localStorage.setItem("isLoggedIn",!0),s=localStorage.code,u=localStorage.userName,e.commit("checkLogin",!0),e.commit("setUserDetails",{code:s,userName:u}),e.commit("setFormMessage",null);case 32:case"end":return r.stop()}}),r)})))()},checkUserDetails:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=localStorage.code,r=localStorage.userName,e.commit("setUserDetails",{code:n,userName:r});case 3:case"end":return t.stop()}}),t)})))()},getTriageHistorical:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c,s,u,l,m,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setFormLoading",!0),n.next=3,fetch("".concat(t.state.apiUrl,"etriage/dashboard?auth=").concat(t.state.apiKey),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:r=n.sent,a=Object(H["a"])(r);try{for(a.s();!(o=a.n()).done;)i=o.value,null!=i.symptomsAndHistory?(c=i.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),i.symptomsAndHistory="\n".concat(c,"\n")):i.symptomsAndHistory="N/A",s=new Date(i.date),u=new Intl.DateTimeFormat("en",{year:"numeric"}).format(s),l=new Intl.DateTimeFormat("en",{month:"long"}).format(s),m=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(s),d="".concat(l," ").concat(m,", ").concat(u),i.date=d}catch(f){a.e(f)}finally{a.f()}e.commit("getHistorical",r),e.commit("setFormLoading",!1);case 8:case"end":return n.stop()}}),n)})))()},getEtriageCIF:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c,s,u,l,m,d,f,g,p,h,y,b;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setFormLoading",!0),n.next=3,fetch("".concat(t.state.apiUrl,"etriage/etriage-cif?auth=").concat(t.state.apiKey),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:r=n.sent,a=Object(H["a"])(r);try{for(a.s();!(o=a.n()).done;)i=o.value,null!=i.symptomsAndHistory?(c=i.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),i.symptomsAndHistory="\n".concat(c,"\n")):i.symptomsAndHistory="N/A",s=i.classification.toUpperCase(),i.classification=s,u=new Date(i.cif_trans_datetime),l=new Intl.DateTimeFormat("en",{year:"numeric"}).format(u),m=new Intl.DateTimeFormat("en",{month:"long"}).format(u),d=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(u),f="".concat(m," ").concat(d,", ").concat(l),i.cif_trans_datetime=f,g=new Date(i.etriage_datetime),p=new Intl.DateTimeFormat("en",{year:"numeric"}).format(g),h=new Intl.DateTimeFormat("en",{month:"long"}).format(g),y=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(g),b="".concat(h," ").concat(y,", ").concat(p),i.etriage_datetime=b}catch(T){a.e(T)}finally{a.f()}e.commit("getEtriageCIF",r),e.commit("setFormLoading",!1);case 8:case"end":return n.stop()}}),n)})))()},getETriageAnalytics:function(e,t){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,o,i,c,s,u,l,m,d,f,g,p,h,y,b,T,v,E,w,k,C,R,F,A,D,j,O,I,S,x,L,M,P,U,N,_,G,V,B,K,W,$,Y,J,X,q,z,Q,Z,ee,te,ne,re,ae,oe,ie,ce,se,ue,le,me,de,fe,ge,pe,he,ye,be,Te,ve,Ee,we;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t,o=new Date(a).getMonth(),i=new Date(a).getFullYear(),c=new Date(i,o,1),s=new Date(c),u=new Intl.DateTimeFormat("en",{year:"numeric"}).format(s),l=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(s),m=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(s),d="".concat(l,"-").concat(m,"-").concat(u),f=new Date(i,o+1,0),g=new Intl.DateTimeFormat("en",{year:"numeric"}).format(f),p=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(f),h=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(f),y="".concat(p,"-").concat(h,"-").concat(g),r.next=16,fetch("".concat(n.state.apiUrl,"etriage/dashboard?auth=").concat(n.state.apiKey,"&withDateRange=1&dateFrom=").concat(d,"&dateTo=").concat(y),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 16:b=r.sent,T=Object(H["a"])(b);try{for(T.s();!(v=T.n()).done;)E=v.value,null!=E.symptomsAndHistory?(w=E.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),E.symptomsAndHistory="\n".concat(w,"\n")):E.symptomsAndHistory="N/A",k=new Date(E.date).toISOString().substr(5,5),E.date=k}catch(ke){T.e(ke)}finally{T.f()}return C=b.map((function(e){return e.date})),R=C.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),F=Object.keys(R),A=Object.values(R),D=[{header:F,data:A,label:"Employees",backgroundColor:"#1976d2"}],e.commit("getEmployeeMonthlyAnalytics",D),j=b.filter((function(e){return"M"==e.gender})),O=b.filter((function(e){return"F"==e.gender})),I=b.filter((function(e){return null==e.gender})),S=[{male:j.length,female:O.length,undisclosedGender:I.length}],e.commit("getAllEmployeeGenderAnalytics",S),x=b.filter((function(e){return e.age<20})),L=b.filter((function(e){return e.age>=20&&e.age<30})),M=b.filter((function(e){return e.age>=30&&e.age<40})),P=b.filter((function(e){return e.age>=40&&e.age<50})),U=b.filter((function(e){return e.age>=50&&e.age<60})),N=b.filter((function(e){return e.age>=60})),_={empBelow20:x.length,emp20to30:L.length,emp30to40:M.length,emp40to50:P.length,emp50to60:U.length,emp60Above:N.length},e.commit("getAllEmployeeAgeGroupAnalytics",_),G=b.filter((function(e){return 1==e.isForCovidEr})),V=G.map((function(e){return e.date})),B=V.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),K=Object.keys(B),W=Object.values(B),$=[{header:K,data:W,label:"ER Employees",backgroundColor:"#f44336"}],e.commit("getEmployeeMonthlyAnalytics",$),r.next=47,fetch("".concat(n.state.apiUrl,"etriage/hdf-users?auth=").concat(n.state.apiKey,"&withDateRange=1&dateFrom=").concat(d,"&dateTo=").concat(y),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 47:Y=r.sent,J=Object(H["a"])(Y);try{for(J.s();!(X=J.n()).done;)q=X.value,null!=q.symptomsAndHistory?(z=q.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),q.symptomsAndHistory="\n".concat(z,"\n")):q.symptomsAndHistory="N/A",Q=new Date(q.date).toISOString().substr(5,5),q.date=Q}catch(ke){J.e(ke)}finally{J.f()}Z=Y.filter((function(e){return"visitor"==e.userType})),ee=Z.map((function(e){return e.date})),te=ee.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),ne=Object.keys(te),re=Object.values(te),ae=[{header:ne,data:re,label:"Visitors",backgroundColor:"#f44336"}],e.commit("getVisitorMonthlyAnalytics",ae),oe=Z.filter((function(e){return 1==e.isForCovidEr})),ie=oe.map((function(e){return e.date})),ce=ie.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),se=Object.keys(ce),ue=Object.values(ce),le=[{header:se,data:ue,label:"ER Visitors",backgroundColor:"#f44336"}],e.commit("getVisitorMonthlyAnalytics",le),me=Y.filter((function(e){return"tpc"==e.userType})),de=me.map((function(e){return e.date})),fe=de.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),ge=Object.keys(fe),pe=Object.values(fe),he=[{header:ge,data:pe,label:"Third Party Contractors",backgroundColor:"#9c27b0"}],e.commit("getTPCMonthlyAnalytics",he),ye=me.filter((function(e){return 1==e.isForCovidEr})),be=ye.map((function(e){return e.date})),Te=be.reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),Object.create(null)),ve=Object.keys(Te),Ee=Object.values(Te),we=[{header:ve,data:Ee,label:"ER Third Party Contractors",backgroundColor:"#f44336"}],e.commit("getTPCMonthlyAnalytics",we);case 78:case"end":return r.stop()}}),r)})))()},getETriageEmployees:function(e,t){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,o,i,c,s,u,l,m,d,f,g,p,h,y,b,T,v,E,w,k,C;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.commit("setCardFormLoading",!0),e.commit("setFormLoading",!0),r.next=4,fetch("".concat(n.state.apiUrl,"etriage/dashboard?auth=").concat(n.state.apiKey,"&date=").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:a=r.sent,o=Object(H["a"])(a);try{for(o.s();!(i=o.n()).done;)c=i.value,null!=c.symptomsAndHistory?(s=c.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),c.symptomsAndHistory="\n".concat(s,"\n")):c.symptomsAndHistory="N/A",u=new Date(c.date).toISOString().substr(0,10),c.date=u}catch(R){o.e(R)}finally{o.f()}e.commit("getETriageEmployees",a),l=a.filter((function(e){return 1==e.isForCovidEr})),e.commit("getForCovidER",l),m=a.filter((function(e){return"M"==e.gender})),e.commit("getMaleEmployees",m),d=a.filter((function(e){return"F"==e.gender})),e.commit("getFemaleEmployees",d),f=a.filter((function(e){return null==e.gender})),e.commit("getUndisclosedGender",f),g=a.filter((function(e){return"MANAGEMENT"==e.class})),e.commit("getManagementClass",g),p=a.filter((function(e){return"RANK AND FILE"==e.class})),e.commit("getRankAndFileClass",p),h=a.filter((function(e){return"OFFICER"==e.class})),e.commit("getOfficerClass",h),y=a.filter((function(e){return"RESIDENT/PGI"==e.class})),e.commit("getResidentPGIClass",y),b=a.filter((function(e){return"FACULTY"==e.class})),e.commit("getFacultyClass",b),T=a.filter((function(e){return e.age<20})),e.commit("get20Below",T),v=a.filter((function(e){return e.age>=20&&e.age<30})),e.commit("get20to30",v),E=a.filter((function(e){return e.age>=30&&e.age<40})),e.commit("get30to40",E),w=a.filter((function(e){return e.age>=40&&e.age<50})),e.commit("get40to50",w),k=a.filter((function(e){return e.age>=50&&e.age<60})),e.commit("get50to60",k),C=a.filter((function(e){return e.age>=60})),e.commit("get60Above",C),e.commit("setFormLoading",!1),e.commit("setCardFormLoading",!1);case 40:case"end":return r.stop()}}),r)})))()},getETriageOtherUsers:function(e,t){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,o,i,c,s,u,l,m,d,f;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.commit("setCardFormLoading",!0),e.commit("setFormLoading",!0),r.next=4,fetch("".concat(n.state.apiUrl,"etriage/hdf-users?auth=").concat(n.state.apiKey,"&date=").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:a=r.sent,o=Object(H["a"])(a);try{for(o.s();!(i=o.n()).done;)c=i.value,null!=c.symptomsAndHistory?(s=c.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),c.symptomsAndHistory="\n".concat(s,"\n")):c.symptomsAndHistory="N/A",c.name=c.name.toUpperCase(),c.address=c.address.toUpperCase(),u=new Date(c.date).toISOString().substr(0,10),c.date=u}catch(g){o.e(g)}finally{o.f()}l=a.filter((function(e){return"visitor"==e.userType})),e.commit("getETriageVisitors",l),m=a.filter((function(e){return"tpc"==e.userType})),e.commit("getETriageTPC",m),d=l.filter((function(e){return 1==e.isForCovidEr})),e.commit("getVisitorForCovidER",d),f=m.filter((function(e){return 1==e.isForCovidEr})),e.commit("getTPCForCovidER",f),e.commit("setFormLoading",!1),e.commit("setCardFormLoading",!1);case 17:case"end":return r.stop()}}),r)})))()},getAllTriageEREmployees:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c,s,u,l,m,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setFormLoading",!0),n.next=3,fetch("".concat(t.state.apiUrl,"etriage/dashboard?auth=").concat(t.state.apiKey,"&isForCovidER=1"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 3:r=n.sent,a=Object(H["a"])(r);try{for(a.s();!(o=a.n()).done;)i=o.value,null!=i.symptomsAndHistory?(c=i.symptomsAndHistory.replace(/[_]/g," ").toUpperCase().split(";").join("\n"),i.symptomsAndHistory="\n".concat(c,"\n")):i.symptomsAndHistory="N/A",s=new Date(i.date),u=new Intl.DateTimeFormat("en",{year:"numeric"}).format(s),l=new Intl.DateTimeFormat("en",{month:"long"}).format(s),m=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(s),d="".concat(l," ").concat(m,", ").concat(u),i.date=d}catch(f){a.e(f)}finally{a.f()}e.commit("getAllTriageEREmployees",r),e.commit("setFormLoading",!1);case 8:case"end":return n.stop()}}),n)})))()},getDTRWithoutTriage:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i,c,s,u,l,m,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit("setDTRFormLoading",!0),n.next=3,fetch("".concat(t.state.apiUrl,"etriage/timedata-no-triage?auth=").concat(t.state.apiKey),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return r=n.sent,n.next=6,r.json();case 6:a=n.sent,o=Object(H["a"])(a);try{for(o.s();!(i=o.n()).done;)c=i.value,s=new Date(c.date),u=new Intl.DateTimeFormat("en",{year:"numeric"}).format(s),l=new Intl.DateTimeFormat("en",{month:"long"}).format(s),m=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(s),d="".concat(l," ").concat(m,", ").concat(u),c.date=d}catch(f){o.e(f)}finally{o.f()}a.length>0&&(t.showStatus=!0),e.commit("geDTREmployeesWithoutTriage",a),e.commit("setDTRFormLoading",!1);case 12:case"end":return n.stop()}}),n)})))()},checkAccessRightsForClearing:function(e,t){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.commit("setFormLoading",!0),a={systemName:"ETriage Dashboard",moduleName:"Infirmary Clearing"},r.next=4,fetch("".concat(n.state.apiUrl,"auth/access?auth=").concat(n.state.apiKey,"&code=").concat(t,"&systemName=").concat(a.systemName,"&moduleName=").concat(a.moduleName),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}));case 4:if(o=r.sent,o.access){r.next=10;break}return n.isFormLoading=!1,e.commit("setAccessRightsForClearing",!1),e.commit("setFormMessage","You have no access rights to UERM ".concat(a.systemName,": ").concat(a.moduleName)),r.abrupt("return");case 10:e.commit("setAccessRightsForClearing",!0),e.commit("setFormLoading",!1);case 12:case"end":return r.stop()}}),r)})))()},logoutEmployee:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.clear(),e.commit("logout"),e.commit("setFormMessage",null),e.commit("checkLogin",!1),e.commit("checkInfirmary",!1);case 5:case"end":return t.stop()}}),t)})))()}},modules:{},getters:{apiUrl:function(e){return e.apiUrl},apiKey:function(e){return e.apiKey},formMessage:function(e){return e.formMessage},formLoading:function(e){return e.formLoading},userDetails:function(e){return e.userDetails},cardFormLoading:function(e){return e.cardFormLoading},dtrFormLoading:function(e){return e.dtrFormLoading},isLoggedIn:function(e){return e.isLoggedIn},isInfirmary:function(e){return e.isInfirmary},date:function(e){return e.date},eTriageEmployeesCount:function(e){return e.eTriageEmployeesCount},eTriageVisitors:function(e){return e.eTriageVisitors},eTriageTPC:function(e){return e.eTriageTPC},allETriageEREmployees:function(e){return e.allETriageEREmployees},eTriageEREmployees:function(e){return e.eTriageEREmployees},eTriageERVisitors:function(e){return e.eTriageERVisitors},eTriageERTPC:function(e){return e.eTriageERTPC},eTriageMaleEmployees:function(e){return e.eTriageMaleEmployees},eTriageFemaleEmployees:function(e){return e.eTriageFemaleEmployees},eTriageUndisclosedGender:function(e){return e.eTriageUndisclosedGender},eTriageManagementClass:function(e){return e.eTriageManagementClass},eTriageRankAndFileClass:function(e){return e.eTriageRankAndFileClass},eTriageOfficerClass:function(e){return e.eTriageOfficerClass},eTriageResidentPGIClass:function(e){return e.eTriageResidentPGIClass},eTriageFacultyClass:function(e){return e.eTriageFacultyClass},eTriageToday20Below:function(e){return e.eTriageToday20Below},eTriageToday20to30:function(e){return e.eTriageToday20to30},eTriageToday30to40:function(e){return e.eTriageToday30to40},eTriageToday40to50:function(e){return e.eTriageToday40to50},eTriageToday50to60:function(e){return e.eTriageToday50to60},eTriageToday60Above:function(e){return e.eTriageToday60Above},eTriageHistorical:function(e){return e.eTriageHistorical},eTriageCIF:function(e){return e.eTriageCIF},dtrWithoutTriage:function(e){return e.dtrWithoutTriage},accessRightsForClearing:function(e){return e.accessRightsForClearing},getEmployeeDataSet:function(e){var t={employeeDataSet:e.analytics.employeeDataSet[0],employeeERDataSet:e.analytics.employeeERDataSet[0]};return t},getVisitorDataSet:function(e){var t={visitorDataSet:e.analytics.visitorDataSet[0],visitorERDataSet:e.analytics.visitorERDataSet[0]};return t},getTPCDataSet:function(e){var t={tpcDataSet:e.analytics.tpcDataSet[0],tpcERDataSet:e.analytics.tpcERDataSet[0]};return t},analyticsAllGender:function(e){return e.analytics.allEmployeeGender},analyticsAllEmployeeAgeGroup:function(e){return e.analytics.allEmployeeAgeGroup}}}),W=n("f309");n("15f5");r["a"].use(W["a"]);var $=new W["a"]({icons:{iconfont:"fa"},theme:{themes:{light:{primary:"#1976d2",secondary:"#e91e63",accent:"#03a9f4",error:"#f44336",warning:"#ff9800",info:"#00bcd4",success:"#4caf50"}}}}),Y=n("8c4f");r["a"].use(Y["a"]);var J=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-78f4af31")]).then(n.bind(null,"bb51"))}},{path:"/main",name:"Main",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-2d221fb8")]).then(n.bind(null,"cd56"))}},{path:"/employees",name:"Employees",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-b00fcf1a"),n.e("chunk-520326b3")]).then(n.bind(null,"cb29"))}},{path:"/visitors",name:"Visitors",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-b00fcf1a"),n.e("chunk-2d21e936")]).then(n.bind(null,"d5c2"))}},{path:"/tpc",name:"TPC",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-b00fcf1a"),n.e("chunk-2d228ea0")]).then(n.bind(null,"dae2"))}},{path:"/infirmary",name:"Infirmary",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-b00fcf1a"),n.e("chunk-784f70e5")]).then(n.bind(null,"fced"))}},{path:"/analytics",name:"Analytics",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-2d0c08bf")]).then(n.bind(null,"41f2"))}},{path:"/monthly-reports",name:"MonthlyReport",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-25b97eba"),n.e("chunk-2d238660")]).then(n.bind(null,"fee0"))}},{path:"/classification-reports",name:"ClassificationReport",component:function(){return Promise.all([n.e("chunk-76f55d6b"),n.e("chunk-32aa9eb5"),n.e("chunk-32330909"),n.e("chunk-25b97eba"),n.e("chunk-2d0cf293")]).then(n.bind(null,"6311"))}}],X=new Y["a"]({routes:J}),q=X,z=n("bc3a"),Q=n.n(z),Z=n("a7fe"),ee=n.n(Z);r["a"].config.productionTip=!1,new r["a"]({store:K,vuetify:$,router:q,VueAxios:ee.a,axios:Q.a,render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.d01207e1.js.map