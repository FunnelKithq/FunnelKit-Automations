(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(5),c=a(10),o=a.n(c),l=a(2),i=a(58),s=a(90),u=a(16),b=a(4),m=a(248),f=a(829),p=a(837),d=a(92),O=a(68),j=a(838),y=a(885),g=a(250),w=a(38),h=a(6),_=a.n(h),E=a(3),v=a(28),k=a(67),A=a(15),S=a(8),C=a(252),N=a(204),x=a(854);function L(e,t,a,n,r,c,o){try{var l=e[c](o),i=l.value}catch(e){return void a(e)}l.done?t(i):Promise.resolve(i).then(n,r)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a}(e,t)||I(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){if(e){if("string"==typeof e)return T(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?T(e,t):void 0}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(e){var t=Object(A.i)(),a=P(Object(n.useState)(25),2),c=a[0],h=a[1],T=P(Object(n.useState)(0),2),q=T[0],F=T[1],R=P(Object(n.useState)(0),2),M=R[0],B=R[1],D=P(Object(n.useState)([]),2),z=D[0],J=D[1],Q=P(Object(n.useState)([]),2),U=Q[0],G=Q[1],H=P(Object(n.useState)(!1),2),V=H[0],$=H[1],K=P(Object(n.useState)(),2),W=K[0],X=K[1],Y=P(Object(n.useState)(!1),2),Z=Y[0],ee=Y[1],te=P(Object(n.useState)(0),2),ae=te[0],ne=te[1],re=P(Object(n.useState)(""),2),ce=re[0],oe=re[1];Object(f.a)("lost",U);var le=Object(n.useRef)(new AbortController),ie=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,a,n,i,s,u,b,m=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:{},$(!0),e.prev=2,a="",t&&t.search?(a="search=".concat(t.search),oe(t.search)):t.hasOwnProperty("search")&&""===t.search?oe(""):""!==ce&&(a="search=".concat(ce)),e.next=7,o()({method:"GET",path:Object(r.m)("/carts/lost?offset=".concat(q,"&limit=").concat(c,"&").concat(a)),signal:le.current.signal});case 7:if((n=e.sent)&&n.result&&Array.isArray(n.result)){e.next=11;break}return X(Object(l.__)("Blank response returned","wp-marketing-automations")),e.abrupt("return");case 11:i=n.total_count,s=n.result,u=n.limit,b=n.offset,i&&B(parseInt(i)),u&&h(parseInt(u)),b&&F(parseInt(b)),s&&J(s),n.hasOwnProperty("count_data")&&G(n.count_data),$(!1),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(2),"AbortError"===e.t0.name?console.log(e.t0.message):(X(e.t0&&e.t0.message?e.t0.message:Object(l.__)("Unknown Error Occurred","wp-marketing-automations")),$(!1));case 23:case"end":return e.stop()}}),e,null,[[2,20]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function o(e){L(c,n,r,o,l,"next",e)}function l(e){L(c,n,r,o,l,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(r.g)("Lost Carts"),ie()}),[q,c]),Object(n.useEffect)((function(){return function(){le.current.abort()}}),[]);var se=Object(n.createElement)("span",{className:"bwfan_tooltip_text","data-position":"top"},Object(n.createElement)("b",null,"Lost"),": Carts where automation sequence is complete and did not complete the order within 1 day are marked as Lost."),ue=Object(n.useMemo)((function(){var e={};if(Array.isArray(z)){var t,a=function(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=I(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return o=e.done,e},e:function(e){l=!0,c=e},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw c}}}}(z);try{for(a.s();!(t=a.n()).done;){var n=t.value;e[n.id]=n}}catch(e){a.e(e)}finally{a.f()}}return e}),[z]),be=Object(N.b)(ue),me=be.singleSelectProps,fe=be.selectAllProps,pe=be.floatingBarProps,de=be.resetSelection,Oe=[{key:"select_audience",label:Object(n.createElement)(b.CheckboxControl,fe),isLeftAligned:!0,required:!0,cellClassName:"bwf-col-action bwf-w-45"},{key:"action",label:"",isLeftAligned:!0,required:!0,cellClassName:"bwf-col-action bwf-w-45"},{key:"contact",label:Object(l.__)("Contact","wp-marketing-automations"),isLeftAligned:!0},{key:"detail",label:Object(l.__)("Details","wp-marketing-automations"),isLeftAligned:!0},{key:"created_date",label:Object(l.__)("Created On","wp-marketing-automations"),isLeftAligned:!0},{key:"items",label:Object(l.__)("Items","wp-marketing-automations"),isLeftAligned:!0},{key:"total",label:Object(l.__)("Total","wp-marketing-automations"),isLeftAligned:!0},{key:"order",label:Object(l.__)("Order","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-col-center"},{key:"show",label:Object(l.__)("Details","wp-marketing-automations"),isLeftAligned:!0,cellClassName:"bwf-col-center"},{key:"status",label:Object(n.createElement)("div",{className:"bwf-display-flex",style:{alignItems:"start"}},Object(l.__)("Status","wp-marketing-automations")," ",Object(n.createElement)(v.a,{position:"bottom left",toolTipText:se,icon:"info",iconSize:20,size:400})),isLeftAligned:!0,cellClassName:"bwf-col-center"}],je=function(e){e!==c&&(F(0),h(e))},ye=function(e){return Object(n.createElement)(i.a,{label:Object(l.__)("Quick Actions","wp-marketing-automations"),menuPosition:"bottom right",renderContent:function(a){var r=a.onToggle;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(s.a,{isClickable:!0,onInvoke:function(){Object(A.k)({path:"/carts/lost/".concat(e.id,"/tasks")},"/",t),r()}},Object(n.createElement)(u.a,{justify:"flex-start"},Object(n.createElement)(u.c,null,Object(n.createElement)(S.a,{icon:"view"})),Object(n.createElement)(u.c,null,Object(l.__)("View Automations","wp-marketing-automations")))),Object(n.createElement)(s.a,{isClickable:!0,onInvoke:function(){ne(e.id),ee(!0),r()}},Object(n.createElement)(u.a,{justify:"flex-start"},Object(n.createElement)(u.c,null,Object(n.createElement)(S.a,{icon:"trash"})),Object(n.createElement)(u.c,null,Object(l.__)("Delete","wp-marketing-automations")))))}})},ge=function(e){return e.total?e.currency?Object(O.a)(e.currency).formatAmount(e.total):e.total:"-"},we=function(e){return e.order_id?Object(n.createElement)("a",{target:"_blank",className:"bwf-a-no-underline",href:"post.php?post=".concat(e.order_id,"&action=edit")},"#",e.order_id," ",e.buyer_name):"-"},he=function(e){return Object(n.createElement)("div",{className:"bwf-c-contact-details-cell"},e.email&&Object(n.createElement)(u.a,{justify:"justify",align:"top"},Object(n.createElement)(u.c,null,Object(n.createElement)(S.a,{icon:"mail"})),Object(n.createElement)(u.c,null,e.email)),e.phone&&Object(n.createElement)(u.a,{justify:"justify",align:"top"},Object(n.createElement)(u.c,null,Object(n.createElement)(S.a,{icon:"phone"})),Object(n.createElement)(u.c,null,e.phone)),!e.phone&&!e.email&&Object(n.createElement)("span",null,"-"))},_e=function(e){var t=Object(n.createElement)(g.a,{contact:{f_name:e.f_name?e.f_name:"",l_name:e.l_name?e.l_name:"",email:e.email},dateText:e.date&&e.diffstring?Object(l.__)("Last Active:","wp-marketing-automations"):"",lowerText:e.date&&e.diffstring?Object(n.createElement)(n.Fragment,null,Object(n.createElement)("span",{title:Object(r.N)(e.date,!0)},e.diffstring)):""});return e.contact_id?Object(n.createElement)(w.a,{href:"admin.php?page=autonami&path=/contact/"+e.contact_id,type:"bwf-crm",className:"bwf-a-no-underline"},t):t},Ee=Array.isArray(z)?z.map((function(e){return[{display:me.hasOwnProperty(e.id)?Object(n.createElement)(b.CheckboxControl,me[e.id]):Object(n.createElement)(n.Fragment,null),value:null},{display:ye(e),value:""},{display:_e(e),value:""},{display:he(e),value:""},{display:(o=e,o.hasOwnProperty("created_on")?Object(r.N)(o.created_on,!1,!1):"-"),value:""},{display:(t=e.items,a="",c=[],Object.entries(t).map((function(e){var t=P(e,2),r=t[0],o=t[1];Object(E.isEmpty)(a)&&(a=Object(n.createElement)("a",{target:"_blank",className:"bwf-a-no-underline",href:"post.php?action=edit&post="+r},o)),c.push(Object(n.createElement)("a",{target:"_blank",className:"bwf-a-no-underline",href:"post.php?action=edit&post="+r},o))})),Object(n.createElement)("div",{className:"bwf-table-v-center"},Object(E.isEmpty)(a)?"-":a,!Object(E.isEmpty)(c)&&c.length>1&&Object(n.createElement)(d.a,{items:c}))),value:""},{display:ge(e),value:e.total},{display:we(e),value:e.order_id},{display:Object(n.createElement)(j.a,{cart:e}),value:""},{display:Object(n.createElement)("span",{className:"bwf-tags bwf-tag-red"},Object(l.__)("Lost","wp-marketing-automations")),value:e.status}];var t,a,c,o})):[],ve=[{type:"icon",data:{class:"bwf-pb-gap",content:Object(n.createElement)(S.a,{icon:"cart-icon",width:"90",height:"90"})}},{type:"content",data:{class:"bwf-h2 bwf-pb-10",content:Object(l.__)("Cart Tracking is disabled","wp-marketing-automations")}},{type:"content",data:{class:"bwf-h4-1 bwf-pb-gap",content:Object(l.__)("Click on the button below to go to Settings > Carts to enable cart tracking. Once activated, you will be able to capture emails as soon buyer enters it.","wp-marketing-automations")}},{type:"buttons",data:{buttons:[{text:Object(l.__)("Enable Tracking","wp-marketing-automations"),onClick:function(){Object(A.k)({page:"autonami",path:"/settings"},"/",{})}}]}}];return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(k.a,null),Object(r.hb)()?Object(n.createElement)(n.Fragment,null,W&&Object(n.createElement)(b.Notice,{status:"error"},W),Object(n.createElement)(m.a,{className:_()("bwfcrm-forms-list-table",{"has-search":!0}),rows:Ee,headers:Oe,query:{paged:q/c+1},rowsPerPage:c,totalRows:M,isLoading:V,onPageChange:function(e,t){F((e-1)*c)},onQueryChange:function(e){return"per_page"!==e?function(){}:je},rowHeader:!0,showMenu:!1,actions:[Object(n.createElement)(p.a,{onSearch:function(e){ie(e)},key:1})],emptyMessage:Object(l.__)("No lost carts found","wp-marketing-automations")}),Object(n.createElement)(y.a,{cartId:ae,isOpen:Z,onRequestClose:function(e){ee(!1),e&&ie()}}),Object(n.createElement)(x.a,{floatingBarProps:pe,resetSelection:de,onSuccess:ie,type:"cart"})):Object(n.createElement)(C.a,{data:ve}))}}}]);