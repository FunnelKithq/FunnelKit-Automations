(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1020:function(t,e,a){},1263:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(895),o=a(12),c=a.n(o),i=a(5),s=a(2),l=a(4),u=a(268),m=a(7),f=a.n(m),b=a(67),p=a(101),d=a(17),w=a(142),g=(a(1020),a(3)),y=a(8),h=a(38),O=a(58),j=a(858),v=a(912),_=a(270);function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,r,o,c,i=[],s=!0,l=!1;try{if(o=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=o.call(a)).done)&&(i.push(n.value),i.length!==e);s=!0);}catch(t){l=!0,r=t}finally{try{if(!s&&null!=a.return&&(c=a.return(),Object(c)!==c))return}finally{if(l)throw r}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return k(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var N={1:"Active",2:"Failed",3:"Paused",4:"Waiting",5:"Terminated",6:"Reattempt"},L={1:"bwf-tags bwf-tag-green",2:"bwf-tags bwf-tag-red",3:"bwf-tags bwf-tag-red",4:"bwf-tags bwf-tag-orange",5:"bwf-tags bwf-tag-red",6:"bwf-tags bwf-tag-blue"},P=function(t){var e,a=t.tasks,r=t.isLoading,o=E(Object(n.useState)(""),2),c=o[0],m=o[1],b=E(Object(n.useState)({}),2),p=b[0],w=b[1],k=[{key:"contact",label:Object(s.__)("Contact","wp-marketing-automations"),required:!0,cellClassName:"bwf-crm-col-contact bwf-w-240"},{key:"details",label:Object(s.__)("Automation","wp-marketing-automations"),cellClassName:"bwf-crm-col-contact-details",isLeftAligned:!0},{key:"startedon ",label:Object(s.__)("Started On","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m",isLeftAligned:!0},{key:"last_run",label:Object(s.__)("Last Run","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m",isLeftAligned:!0},{key:"next_last_run",label:Object(s.__)("Next Run Time","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m",isLeftAligned:!0},{key:"status",label:Object(s.__)("Status","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-col-center",isLeftAligned:!0},{key:"journey",label:Object(s.__)("","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m",isLeftAligned:!0}],P=function(t){return Object(n.createElement)(h.a,{href:"admin.php?page=autonami&path=/automation/"+t.aid,type:"bwf-crm",className:"bwf-crm-campaign-contactData-contact-link bwf-a-no-underline",key:t.aid},t.hasOwnProperty("automation_title")?t.automation_title:"-")},x=function(t){var e=t.trail,a=void 0===e?"":e;return Object(g.isEmpty)(a)?"-":Object(n.createElement)("a",{className:"bwf-cursor-pointe bwf-a-no-underline",onClick:function(){m(a),w(t)}},"View Journey")},S=function(t){var e=t.data,a=void 0===e?{}:e;return!(!a.hasOwnProperty("type")||3!==parseInt(a.type))},A=function(t){return Object(n.createElement)(n.Fragment,null,Object(i.mb)()?Object(n.createElement)(h.a,{href:"admin.php?page=autonami&path=/contact/"+t.cid,type:"bwf-crm",className:"bwf-crm-campaign-contactData-contact-link bwf-a-no-underline",key:t.cid},Object(n.createElement)(_.a,{contact:t,date:t.date,dateText:Object(s.__)("Joined on","wp-marketing-automations")})):Object(n.createElement)(_.a,{contact:t,date:t.date,dateText:Object(s.__)("Joined on","wp-marketing-automations")}))},C=Object(g.isEmpty)(a)?[]:a.map((function(t){return[{display:A(t),value:t.hasOwnProperty("contact_name")?t.contact_name:"-"},{display:P(t),value:""},{display:t.hasOwnProperty("s_date")?Object(i.N)(t.s_date):t.hasOwnProperty("c_date")?Object(i.N)(t.c_date):"-",value:t.hasOwnProperty("c_date")?t.c_date:"-"},{display:(e=t,a=e.last_time,r=void 0===a?"":a,o=e.last,c=void 0===o?0:o,Object(n.createElement)("div",{className:"bwf-c-contact-details-cell"},""===r||0===parseInt(c)&&!e.hasOwnProperty("s_date")?"-":Object(n.createElement)(d.a,{justify:"justify",align:"top"},Object(n.createElement)(d.c,null,Object(i.N)(r))))),value:""},{display:t.hasOwnProperty("e_time")&&!S(t)?Object(i.N)(t.e_time):"-",value:"-"},{display:t.hasOwnProperty("status")&&N.hasOwnProperty(parseInt(t.status))?Object(n.createElement)("span",{className:L[t.status]},N[t.status]):Object(n.createElement)("span",{className:"bwf-tags bwf-tag-green"},"Completed"),value:"-"},{display:x(t),value:"-"}];var e,a,r,o,c}));return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(u.a,{className:f()("bwfcrm-forms-list-table"),rows:C,headers:k,query:{paged:1},rowsPerPage:C.length>0?C.length:10,totalRows:C.length>0?C.length:10,isLoading:r,rowHeader:!0,showMenu:!1,hideHeader:"yes",emptyMessage:Object(s.__)("No Automations found","wp-marketing-automations")}),!Object(g.isEmpty)(c)&&Object(n.createElement)(l.Modal,{title:"",onRequestClose:function(){m(""),w({})},className:"bwf-admin-modal bwf-admin-modal-no-header bwf-admin-modal-fullscreen"},Object(n.createElement)("div",{className:"bwf-stretch-header-customer-journey"},Object(n.createElement)("div",{className:"bwf-wrapper"},Object(n.createElement)("div",{className:"bwf-left-section"},Object(n.createElement)("div",{className:"bwf-back-button bwf-display-flex bwf-cursor-pointer",onClick:function(){m(""),w({})}},Object(n.createElement)(y.a,{icon:"arrow-left",size:20})),Object(n.createElement)("div",{className:"bwf-title bwf-h3"},p.hasOwnProperty("automation_title")?p.automation_title:"")),Object(n.createElement)("div",{className:"bwf-right-section"},Object(n.createElement)("div",{className:"bwf-display-flex bwf-flex-start"},Object(n.createElement)(y.a,{icon:"split-path",width:16,height:18}),Object(n.createElement)("span",null,Object(s.__)("Contact Journey"))),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)(O.a,{id:p.cid,label:(e="-",Object(g.isEmpty)(p)||(e=Object(g.isEmpty)(p.f_name)&&Object(g.isEmpty)(p.l_name)?p.email:p.f_name+" "+p.l_name),e)})))),Object(n.createElement)(j.e,null,Object(n.createElement)(v.a,{customerData:{trail:c},isConatctTab:!0,automatonID:p.aid}))))},x=a(76);function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?A(Object(a),!0).forEach((function(e){T(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function T(t,e,a){return(e=function(t){var e=function(t,e){if("object"!==S(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===S(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function I(){I=function(){return e};var t,e={},a=Object.prototype,n=a.hasOwnProperty,r=Object.defineProperty||function(t,e,a){t[e]=a.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,a){return t[e]=a}}function u(t,e,a,n){var o=e&&e.prototype instanceof w?e:w,c=Object.create(o.prototype),i=new x(n||[]);return r(c,"_invoke",{value:k(t,a,i)}),c}function m(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f="suspendedStart",b="executing",p="completed",d={};function w(){}function g(){}function y(){}var h={};l(h,c,(function(){return this}));var O=Object.getPrototypeOf,j=O&&O(O(A([])));j&&j!==a&&n.call(j,c)&&(h=j);var v=y.prototype=w.prototype=Object.create(h);function _(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function a(r,o,c,i){var s=m(t[r],t,o);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==S(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){a("next",t,c,i)}),(function(t){a("throw",t,c,i)})):e.resolve(u).then((function(t){l.value=t,c(l)}),(function(t){return a("throw",t,c,i)}))}i(s.arg)}var o;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){a(t,n,e,r)}))}return o=o?o.then(r,r):r()}})}function k(e,a,n){var r=f;return function(o,c){if(r===b)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw c;return{value:t,done:!0}}for(n.method=o,n.arg=c;;){var i=n.delegate;if(i){var s=N(i,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=b;var l=m(e,a,n);if("normal"===l.type){if(r=n.done?p:"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}function N(e,a){var n=a.method,r=e.iterator[n];if(r===t)return a.delegate=null,"throw"===n&&e.iterator.return&&(a.method="return",a.arg=t,N(e,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=m(r,e.iterator,a.arg);if("throw"===o.type)return a.method="throw",a.arg=o.arg,a.delegate=null,d;var c=o.arg;return c?c.done?(a[e.resultName]=c.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,d):c:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function A(e){if(e||""===e){var a=e[c];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function a(){for(;++r<e.length;)if(n.call(e,r))return a.value=e[r],a.done=!1,a;return a.value=t,a.done=!0,a};return o.next=o}}throw new TypeError(S(e)+" is not iterable")}return g.prototype=y,r(v,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:g,configurable:!0}),g.displayName=l(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(v),t},e.awrap=function(t){return{__await:t}},_(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var c=new E(u(t,a,n,r),o);return e.isGeneratorFunction(a)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},_(v),l(v,s,"Generator"),l(v,c,(function(){return this})),l(v,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),a=[];for(var n in e)a.push(n);return a.reverse(),function t(){for(;a.length;){var n=a.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var a in this)"t"===a.charAt(0)&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function r(n,r){return i.type="throw",i.arg=e,a.next=n,r&&(a.method="next",a.arg=t),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(s&&l){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),P(a),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var r=n.arg;P(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,n){return this.delegate={iterator:A(e),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function D(t,e,a,n,r,o,c){try{var i=t[o](c),s=i.value}catch(t){return void a(t)}i.done?e(s):Promise.resolve(s).then(n,r)}function F(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var o=t.apply(e,a);function c(t){D(o,n,r,c,i,"next",t)}function i(t){D(o,n,r,c,i,"throw",t)}c(void 0)}))}}function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,r,o,c,i=[],s=!0,l=!1;try{if(o=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=o.call(a)).done)&&(i.push(n.value),i.length!==e);s=!0);}catch(t){l=!0,r=t}finally{try{if(!s&&null!=a.return&&(c=a.return(),Object(c)!==c))return}finally{if(l)throw r}}return i}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return H(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return H(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}e.default=function(t){var e=Object(n.useContext)(i.d),a=t.match.params.cartType,o=t.match.params.id;Object(r.a)(a,"","Automations","admin.php?page=autonami&path=/carts/".concat(a),"left",!1);var m=M(Object(n.useState)(25),2),h=m[0],O=m[1],j=M(Object(n.useState)(0),2),v=j[0],_=j[1],E=M(Object(n.useState)(0),2),k=E[0],N=E[1],L=M(Object(n.useState)({}),2),S=L[0],A=L[1],T=M(Object(n.useState)(!1),2),D=T[0],H=T[1],R=M(Object(n.useState)({}),2),q=R[0],G=R[1],B=M(Object(n.useState)(!1),2),J=B[0],z=B[1],U=M(Object(n.useState)(),2),Q=U[0],Y=U[1],$=M(Object(n.useState)({status:!1,loading:!1}),2),V=$[0],W=$[1],K=S.v1,X=void 0===K?[]:K,Z=S.v2,tt=void 0===Z?[]:Z,et=function(){var t=F(I().mark((function t(){var e,n,r,l,u,m,f,b=arguments;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=b.length>0&&void 0!==b[0]?b[0]:{},z(!0),t.prev=2,n="",e&&e.search&&(n="search=".concat(e.search)),t.next=7,c()({method:"GET",path:Object(i.m)("/carts/".concat(o,"/tasks/?offset=").concat(v,"&limit=").concat(h,"&").concat(n,"&type=").concat(a))});case 7:if((r=t.sent)&&r.result){t.next=11;break}return Y(Object(s.__)("Blank response returned","wp-marketing-automations")),t.abrupt("return");case 11:l=r.total_count,u=r.result,m=r.limit,f=r.offset,l&&N(parseInt(l)),m&&O(parseInt(m)),f&&_(parseInt(f)),u&&A(u),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),Y(t.t0&&t.t0.message?t.t0.message:Object(s.__)("Unknown Error Occurred","wp-marketing-automations"));case 21:z(!1);case 22:case"end":return t.stop()}}),t,null,[[2,18]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(i.g)("Cart Task #"+o),et()}),[]);var at=[{key:"action",label:"",isLeftAligned:!0,required:!0,cellClassName:"bwf-col-action bwf-w-45"},{key:"task",label:Object(s.__)("Task","wp-marketing-automations"),isLeftAligned:!0},{key:"automation",label:Object(s.__)("Automation","wp-marketing-automations"),isLeftAligned:!0},{key:"actions",label:Object(s.__)("Action","wp-marketing-automations"),isLeftAligned:!0},{key:"data",label:Object(s.__)("Data","wp-marketing-automations"),isLeftAligned:!0},{key:"date",label:Object(s.__)("Date","wp-marketing-automations"),isLeftAligned:!0},{key:"show",label:"",isLeftAligned:!0},{key:"status",label:Object(s.__)("Status","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-col-center"}],nt=function(t){return Object(n.createElement)("a",{href:"admin.php?page=autonami-automations&edit="+t.automation_id,className:"bwf-crm-campaign-contactData-contact-link bwf-a-no-underline",key:t.id},t.hasOwnProperty("automation_name")?t.automation_name:"-")},rt=function(t){t!==h&&(O(h),et())},ot=function(){var t=F(I().mark((function t(a){return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(W({status:!0,loading:!0}),Object(g.isEmpty)(a)){t.next=13;break}return t.prev=2,t.next=5,c()({path:Object(i.m)("/automations/run-tasks"),method:"POST",data:{task_ids:a}}).then((function(t){200===t.code?(W({status:!0,success:t.message}),e(t.message),et()):W({status:!0,error:t.message})}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),W({status:!0,error:t.t0.message});case 10:Object(i.fb)(e,2e3),t.next=14;break;case 13:W({status:!0,error:Object(s.__)("No Task Selected","wp-marketing-automations")});case 14:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}(),ct=function(t){return Object(n.createElement)(b.a,{label:Object(s.__)("Quick Actions","wp-marketing-automations"),menuPosition:"bottom right",renderContent:function(e){var a=e.onToggle;return Object(n.createElement)(n.Fragment,null,"t_0"==t.status&&Object(n.createElement)(p.a,{isClickable:!0,onInvoke:function(){ot([t.id]),a()}},Object(n.createElement)(d.a,{justify:"flex-start"},Object(n.createElement)(d.c,null,Object(n.createElement)(y.a,{icon:"play"})),Object(n.createElement)(d.c,null,Object(s.__)("Run Now","wp-marketing-automations")))),Object(n.createElement)(p.a,{isClickable:!0,onInvoke:function(){W({deleteEntityName:t.automation_name,status:!0,taskId:t.id}),a()}},Object(n.createElement)(d.a,{justify:"flex-start"},Object(n.createElement)(d.c,null,Object(n.createElement)(y.a,{icon:"trash"})),Object(n.createElement)(d.c,null,Object(s.__)("Delete","wp-marketing-automations")))))}})},it={l_0:Object(s.__)("Failed","wp-marketing-automations"),l_1:Object(s.__)("Completed","wp-marketing-automations"),t_0:Object(s.__)("Scheduled","wp-marketing-automations"),t_1:Object(s.__)("Paused","wp-marketing-automations")},st={l_0:"bwf-tags bwf-tag-red",l_1:"bwf-tags bwf-tag-green",t_0:"bwf-tags bwf-tag-blue",t_1:"bwf-tags bwf-tag-red"},lt=Array.isArray(X)?X.map((function(t){return[{display:ct(t),value:""},{display:"#".concat(t.id),value:""},{display:nt(t),value:""},{display:t.task_integration+(t.task_integration_action?" : ".concat(t.task_integration_action):""),value:""},{display:Object(n.createElement)("ul",{dangerouslySetInnerHTML:{__html:t.task_details}}),value:""},{display:Object(n.createElement)("span",{dangerouslySetInnerHTML:{__html:t.task_date}}),value:""},{display:Object(n.createElement)(l.Button,{icon:Object(n.createElement)(y.a,{icon:"view",size:30}),onClick:function(){G(t),H(!0)}}),value:""},{display:it[t.status]?Object(n.createElement)("span",{className:st[t.status]},it[t.status]):"-",value:t.status}]})):[],ut=function(){var t=F(I().mark((function t(){return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(W(C(C({},V),{},{loading:!0})),!V.hasOwnProperty("taskId")){t.next=11;break}return t.prev=2,t.next=5,c()({path:Object(i.m)("/automations/tasks/"),method:"DELETE",data:{task_ids:[V.taskId]}}).then((function(t){200==t.code&&(W(C(C({},V),{},{success:t.message})),e(t.message),et())}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),W(C(C({},V),{},{error:t.t0.message}));case 10:Object(i.fb)(e,1e3);case 11:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(){return t.apply(this,arguments)}}();return Q?Object(n.createElement)(l.Notice,{status:"error"},Q):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(x.a,null),!Object(g.isEmpty)(tt)&&!J&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-flex"},Object(n.createElement)("div",{className:"bwf_main_heading_inline bwf-mr-15"},Object(s.__)("Automations","wp-marketing-automations"))),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)(P,{tasks:tt,isLoading:J}),Object(n.createElement)("div",{className:"bwf_clear_30"})),(!Object(g.isEmpty)(X)||J)&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-flex"},Object(n.createElement)("div",{className:"bwf_main_heading_inline bwf-mr-15"},J?Object(n.createElement)("div",{className:"bwf-h-30 bwf-w-210 bwf-placeholder-temp"}):Object(n.createElement)(n.Fragment,null,Object(s.__)("Automation Tasks","wp-marketing-automations")))),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)(u.a,{className:f()("bwfcrm-forms-list-table",{"has-search":!0}),rows:lt,headers:at,query:{paged:v/h+1},rowsPerPage:J?5:h,totalRows:k,isLoading:J,onPageChange:function(t,e){_((t-1)*h),et()},onQueryChange:function(t){return"per_page"!==t?function(){}:rt},rowHeader:!0,showMenu:!1,hideHeader:"yes",emptyMessage:Object(s.__)("No tasks found","wp-marketing-automations")})),Object(g.isEmpty)(tt)&&Object(g.isEmpty)(X)&&!J&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-flex"},Object(n.createElement)("div",{className:"bwf_main_heading_inline bwf-mr-15"},Object(s.__)("Automation Tasks","wp-marketing-automations"))),Object(n.createElement)("div",{className:"bwf_clear_20"}),Object(n.createElement)(u.a,{className:f()("bwfcrm-forms-list-table",{"has-search":!0}),rows:[],headers:at,query:{paged:1},rowsPerPage:10,totalRows:10,isLoading:!1,rowHeader:!0,showMenu:!1,hideHeader:"yes",emptyMessage:Object(s.__)("No tasks found","wp-marketing-automations")})),Object(n.createElement)(w.a,{modalTitle:Object(s.__)("Delete Task"),confirmText:Object(s.__)("Are you sure you want to delete this task ?","wp-marketing-automations"),deleteEntityName:V.deleteEntityName,confirmButtonText:Object(s.__)("Delete","wp-marketing-automations"),cancelButtonText:Object(s.__)("Cancel","wp-marketing-automations"),onConfirm:ut,isLoading:V.loading,successMessage:V.success,errorMessage:V.error,onRequestClose:function(){return W({status:!1})},isOpen:V.status,isDelete:!0}),D&&Object(n.createElement)(l.Modal,{title:"Details",onRequestClose:function(){return H(!1)},className:"bwf-message-preview-modal bwf-admin-modal bwf-admin-modal-squeezy bwf-task-model"},Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(n.createElement)("div",{className:"bwf-w-150 bwf_bold bwf_align_center"},Object(s.__)("Automation","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf_align_center"},q.automation_name)),Object(n.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(n.createElement)("div",{className:"bwf-w-150 bwf_bold bwf_align_center"},Object(s.__)("Event","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf_align_center"},q.automation_source+" : "+q.automation_event)),Object(n.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(n.createElement)("div",{className:"bwf-w-150 bwf_bold bwf_align_center"},Object(s.__)("Action","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf_align_center"},q.task_integration+(q.task_integration_action?" : ".concat(q.task_integration_action):""))),Object(n.createElement)("div",{className:"bwf-p-15 bwf-bb-grey bwf-task-details"},Object(n.createElement)("ul",{className:"bwf_align_center",dangerouslySetInnerHTML:{__html:q.task_details}})),!Object(g.isEmpty)(q.task_message)&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-h3 bwf-pt-15"},Object(s.__)("Notes","wp-marketing-automations")),Object.entries(q.task_message).map((function(t){var e=M(t,2),a=e[0],r=e[1];return Object(n.createElement)("div",{className:"bwf-p-15"},Object(n.createElement)("div",{className:"bwfcrm-task_notes_card"},r),Object(n.createElement)("div",{className:"bwfcrm-task_notes_time"},Object(n.createElement)("i",null,a)))}))))))}},895:function(t,e,a){"use strict";var n=a(141),r=a(0),o=a(2),c=a(5),i=a(146);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"left",m=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],f=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},b=f.carts_nav,p=Object(n.a)(),d=p.setActiveMultiple,w=p.resetHeaderMenu,g=p.setL2NavType,y=p.setL2Nav,h=p.setBackLink,O=p.setBackLinkLabel,j=p.setL2Title,v=p.setL2NavAlign,_=p.setPageHeader,E=p.setPageCountData,k=Object(i.a)(),N=k.getPageCountData,L=N();return Object(r.useEffect)((function(){w(),Object(c.ib)()&&g("menu"),Object(c.ib)()&&m&&y(b),d({leftNav:"carts",rightNav:t}),s&&h(s),a&&j(a),O(Object(o.__)("All Carts","wp-marketing-automations")),v(l),!Object(c.ib)()&&j(Object(o.__)("Cart Tracking","wp-marketing-automations")),_("Carts"),E(u(u({},L),e))}),[t,e]),!0}}}]);