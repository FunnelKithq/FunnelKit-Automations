(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1200:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(5),c=n(10),o=n.n(c),i=n(2),l=n(58),s=n(90),u=n(16),b=n(4),m=n(248),f=n(829),d=n(837),p=n(92),O=n(68),j=n(6),g=n.n(j),y=n(250),w=n(838),h=n(885),v=n(135);function _(e,t,n,a,r,c,o){try{var i=e[c](o),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(a,r)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S=function(e){var t=E(Object(a.useState)(!1),2),n=t[0],c=t[1],l=E(Object(a.useState)(""),2),s=l[0],u=l[1],b=E(Object(a.useState)(""),2),m=b[0],f=b[1],d=e.isOpen,p=e.cartId,O=e.onRequestClose;Object(a.useEffect)((function(){d&&j()}),[d]);var j=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),u(Object(i.__)("We are re-running your cart")),e.prev=2,e.next=5,o()({path:Object(r.m)("/carts/abandoned/retry"),method:"POST",data:{abandoned_ids:[p]}});case 5:e.sent,g(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),c(!1),f(e.t0&&e.t0.message?e.t0.message:Object(i.__)("Unknown error occurred","wp-marketing-automations")),console.log(m);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var c=e.apply(t,n);function o(e){_(c,a,r,o,i,"next",e)}function i(e){_(c,a,r,o,i,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),g=function(){O(!m),f(""),c(!1)};return Object(a.createElement)(v.a,{confirmText:"",confirmButtonText:"",cancelButtonText:"",onConfirm:function(){},isLoading:n,errorMessage:m,onRequestClose:g,content:s,isOpen:d})},A=n(3),C=n(28),x=n(38),P=n(67),N=n(15),I=n(8),T=n(252),R=n(204),L=n(854);function F(e,t,n,a,r,c,o){try{var i=e[c](o),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(a,r)}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||B(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(e){var t=Object(N.i)(),n=q(Object(a.useState)(25),2),c=n[0],j=n[1],v=q(Object(a.useState)(0),2),_=v[0],E=v[1],k=q(Object(a.useState)(0),2),M=k[0],U=k[1],D=q(Object(a.useState)([]),2),z=D[0],J=D[1],Q=q(Object(a.useState)([]),2),$=Q[0],G=Q[1],H=q(Object(a.useState)(!1),2),V=H[0],W=H[1],K=q(Object(a.useState)(),2),X=K[0],Y=K[1],Z=q(Object(a.useState)(!1),2),ee=Z[0],te=Z[1],ne=q(Object(a.useState)(0),2),ae=ne[0],re=ne[1],ce=q(Object(a.useState)(!1),2),oe=ce[0],ie=ce[1],le=q(Object(a.useState)(0),2),se=le[0],ue=le[1],be=q(Object(a.useState)(""),2),me=be[0],fe=be[1];Object(f.a)("recoverable",$);var de=Object(a.useRef)(new AbortController),pe=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n,a,l,s,u,b,m=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:{},W(!0),e.prev=2,n="",t&&t.hasOwnProperty("search")&&t.search?(n="search=".concat(t.search),fe(t.search)):t.hasOwnProperty("search")&&""===t.search?fe(""):""!==me&&(n="search=".concat(me)),e.next=7,o()({method:"GET",path:Object(r.m)("/carts/recoverable?offset=".concat(_,"&limit=").concat(c,"&").concat(n)),signal:de.current.signal});case 7:if((a=e.sent)&&a.result&&Array.isArray(a.result)){e.next=11;break}return Y(Object(i.__)("Blank response returned","wp-marketing-automations")),e.abrupt("return");case 11:l=a.total_count,s=a.result,u=a.limit,b=a.offset,l&&U(parseInt(l)),u&&j(parseInt(u)),b&&E(parseInt(b)),s&&J(s),a.hasOwnProperty("count_data")&&G(a.count_data),W(!1),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(2),"AbortError"===e.t0.name?console.log(e.t0.message):(Y(e.t0&&e.t0.message?e.t0.message:Object(i.__)("Unknown Error Occurred","wp-marketing-automations")),W(!1));case 23:case"end":return e.stop()}}),e,null,[[2,20]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var c=e.apply(t,n);function o(e){F(c,a,r,o,i,"next",e)}function i(e){F(c,a,r,o,i,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){Object(r.g)("Recoverable Carts"),pe()}),[_,c]),Object(a.useEffect)((function(){return function(){de.current.abort()}}),[]);var Oe=Object(a.createElement)("span",{className:"bwfan_tooltip_text bwf-w-300","data-position":"top"},Object(a.createElement)("b",null,"Pending"),": Carts where automation is scheduled to trigger. Automation will trigger after a delay of"," ",bwfcrm_contacts_data.abandoned_wait_time," if user does not complete the order.",Object(a.createElement)("br",null),Object(a.createElement)("br",null),Object(a.createElement)("b",null,"In-Progress"),": Carts where automation has triggered.",Object(a.createElement)("br",null),Object(a.createElement)("br",null),Object(a.createElement)("b",null,"Pending (No Tasks Found)"),": Carts where automation triggered but no tasks were created. This is a rare status that occurs due to misconfiguration. Check automation and Retry to create tasks.",Object(a.createElement)("br",null),Object(a.createElement)("br",null),Object(a.createElement)("b",null,"Re-Scheduled"),": Carts where automations are re-scheduled manually from Bulk Actions."),je=Object(a.useMemo)((function(){var e={};if(Array.isArray(z)){var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=B(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw c}}}}(z);try{for(n.s();!(t=n.n()).done;){var a=t.value;e[a.id]=a}}catch(e){n.e(e)}finally{n.f()}}return e}),[z]),ge=Object(R.b)(je),ye=ge.singleSelectProps,we=ge.selectAllProps,he=ge.floatingBarProps,ve=ge.resetSelection,_e=[{key:"select_audience",label:Object(a.createElement)(b.CheckboxControl,we),isLeftAligned:!0,required:!0,cellClassName:"bwf-col-action bwf-w-45"},{key:"action",label:"",isLeftAligned:!0,required:!0,cellClassName:"bwf-col-action bwf-w-45"},{key:"contact",label:Object(i.__)("Contact","wp-marketing-automations"),isLeftAligned:!0},{key:"detail",label:Object(i.__)("Details","wp-marketing-automations"),isLeftAligned:!0},{key:"created_date",label:Object(i.__)("Created On","wp-marketing-automations"),isLeftAligned:!0},{key:"items",label:Object(i.__)("Items","wp-marketing-automations"),isLeftAligned:!0},{key:"total",label:Object(i.__)("Total","wp-marketing-automations"),isLeftAligned:!0},{key:"order",label:Object(i.__)("Order","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-col-center"},{key:"show",label:Object(i.__)("Details","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-col-center"},{key:"status",label:Object(a.createElement)("div",{className:"bwf-display-flex",style:{alignItems:"start"}},Object(i.__)("Status","wp-marketing-automations")," ",Object(a.createElement)(C.a,{position:"bottom left",toolTipText:Oe,icon:"info",iconSize:20,size:400})),isLeftAligned:!0,cellClassName:"bwf-w-120"}],Ee=function(e){e!==c&&(E(0),j(e))},ke=function(e){return Object(a.createElement)(l.a,{label:Object(i.__)("Quick Actions","wp-marketing-automations"),menuPosition:"bottom right",renderContent:function(n){var r=n.onToggle;return Object(a.createElement)(a.Fragment,null,1===parseInt(e.status)&&Object(a.createElement)(s.a,{isClickable:!0,onInvoke:function(){Object(N.k)({path:"/carts/recoverable/".concat(e.id,"/tasks")},"/",t),r()}},Object(a.createElement)(u.a,{justify:"flex-start"},Object(a.createElement)(u.c,null,Object(a.createElement)(I.a,{icon:"view"})),Object(a.createElement)(u.c,null,Object(i.__)("View Automations","wp-marketing-automations")))),Object(a.createElement)(s.a,{isClickable:!0,onInvoke:function(){re(e.id),te(!0),r()}},Object(a.createElement)(u.a,{justify:"flex-start"},Object(a.createElement)(u.c,null,Object(a.createElement)(I.a,{icon:"trash"})),Object(a.createElement)(u.c,null,Object(i.__)("Delete","wp-marketing-automations")))))}})},Se=function(e,t){switch(parseInt(e)){case 0:return Object(a.createElement)("span",{className:"bwf-tags bwf-tag-gray"},Object(i.__)("Pending","wp-marketing-automations"));case 1:return Object(a.createElement)("span",{className:"bwf-tags bwf-tag-blue"},Object(i.__)("In-Progress","wp-marketing-automations"));case 3:return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("span",null,Object(i.__)("Pending (No Tasks Found) ","wp-marketing-automations")),Object(a.createElement)("br",null),Object(a.createElement)(b.Button,{isLink:!0,onClick:function(){ue(t),ie(!0)}},Object(i.__)("Retry Cart","wp-marketing-automations")));case 4:return Object(a.createElement)("span",{className:"bwf-tags bwf-tag-blue"},Object(i.__)("Re-Scheduled","wp-marketing-automations"));default:return"-"}},Ae=function(e){return e.total?e.currency?Object(O.a)(e.currency).formatAmount(e.total):e.total:"-"},Ce=function(e){return e.order_id?Object(a.createElement)("a",{target:"_blank",className:"bwf-a-no-underline",href:"post.php?post=".concat(e.order_id,"&action=edit")},"#",e.order_id," ",e.buyer_name):"-"},xe=function(e){return Object(a.createElement)("div",{className:"bwf-c-contact-details-cell"},e.email&&Object(a.createElement)(u.a,{justify:"justify",align:"top"},Object(a.createElement)(u.c,null,Object(a.createElement)(I.a,{icon:"mail"})),Object(a.createElement)(u.c,null,e.email)),e.phone&&Object(a.createElement)(u.a,{justify:"justify",align:"top"},Object(a.createElement)(u.c,null,Object(a.createElement)(I.a,{icon:"phone"})),Object(a.createElement)(u.c,null,e.phone)),!e.phone&&!e.email&&Object(a.createElement)("span",null,"-"))},Pe=function(e){var t=Object(a.createElement)(y.a,{contact:{f_name:e.f_name?e.f_name:"",l_name:e.l_name?e.l_name:"",email:e.email},dateText:e.date&&e.diffstring?Object(i.__)("Last Active:","wp-marketing-automations"):"",lowerText:e.date&&e.diffstring?Object(a.createElement)(a.Fragment,null,Object(a.createElement)("span",{title:Object(r.N)(e.date,!0)},e.diffstring)):""});return e.contact_id?Object(a.createElement)(x.a,{href:"admin.php?page=autonami&path=/contact/"+e.contact_id,type:"bwf-crm",className:"bwf-a-no-underline"},t):t},Ne=Array.isArray(z)?z.map((function(e){return[{display:ye.hasOwnProperty(e.id)?Object(a.createElement)(b.CheckboxControl,ye[e.id]):Object(a.createElement)(a.Fragment,null),value:null},{display:ke(e),value:""},{display:Pe(e),value:""},{display:xe(e),value:""},{display:(o=e,o.hasOwnProperty("created_on")?Object(r.N)(o.created_on,!1,!1):"-"),value:""},{display:(t=e.items,n="",c=[],Object.entries(t).map((function(e){var t=q(e,2),r=t[0],o=t[1];Object(A.isEmpty)(n)&&(n=Object(a.createElement)("a",{target:"_blank",className:"bwf-a-no-underline",href:"post.php?action=edit&post="+r},o)),c.push(Object(a.createElement)("a",{target:"_blank",className:"bwf-a-no-underline",href:"post.php?action=edit&post="+r},o))})),Object(a.createElement)("div",{className:"bwf-table-v-center"},Object(A.isEmpty)(n)?"-":n,!Object(A.isEmpty)(c)&&c.length>1&&Object(a.createElement)(p.a,{items:c}))),value:""},{display:Ae(e),value:e.total},{display:Ce(e),value:e.order_id},{display:Object(a.createElement)(w.a,{cart:e}),value:""},{display:Se(e.status,e.id),value:e.status}];var t,n,c,o})):[],Ie=[{type:"icon",data:{class:"bwf-pb-gap",content:Object(a.createElement)(I.a,{icon:"cart-icon",width:"90",height:"90"})}},{type:"content",data:{class:"bwf-h2 bwf-pb-10",content:Object(i.__)("Cart Tracking is disabled","wp-marketing-automations")}},{type:"content",data:{class:"bwf-h4-1 bwf-pb-gap",content:Object(i.__)("Click on the button below to go to Settings > Carts to enable cart tracking. Once activated, you will be able to capture emails as soon buyer enters it.","wp-marketing-automations")}},{type:"buttons",data:{buttons:[{text:Object(i.__)("Enable Tracking","wp-marketing-automations"),onClick:function(){Object(N.k)({page:"autonami",path:"/settings"},"/",{})}}]}}];return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(P.a,null),Object(r.hb)()?Object(a.createElement)(a.Fragment,null,X&&Object(a.createElement)(b.Notice,{status:"error"},X),Object(a.createElement)(m.a,{className:g()("bwfcrm-forms-list-table",{"has-search":!0}),rows:Ne,headers:_e,query:{paged:_/c+1},rowsPerPage:c,totalRows:M,isLoading:V,onPageChange:function(e,t){E((e-1)*c)},onQueryChange:function(e){return"per_page"!==e?function(){}:Ee},rowHeader:!0,showMenu:!1,actions:[Object(a.createElement)(d.a,{onSearch:function(e){pe(e)},key:1})],emptyMessage:Object(i.__)("No recoverable carts found","wp-marketing-automations")}),Object(a.createElement)(h.a,{cartId:ae,isOpen:ee,onRequestClose:function(e){te(!1),e&&pe()}}),Object(a.createElement)(S,{cartId:se,isOpen:oe,onRequestClose:function(e){ie(!1),e&&pe()}}),Object(a.createElement)(L.a,{floatingBarProps:he,resetSelection:ve,onSuccess:function(){pe()},type:"cart"})):Object(a.createElement)(T.a,{data:Ie}))}}}]);