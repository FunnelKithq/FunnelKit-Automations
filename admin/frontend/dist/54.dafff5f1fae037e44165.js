(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1141:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(5),c=n(17),o=n(816),i=n(807),s=n(6),l=n.n(s),u=n(2),b=n(248),p=n(3),f=n(38),m=n(4),d=n(16),O=n(250),g=n(267),j=n(256),y=n(68),v=n(8);function h(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var P=Object(y.a)(Object(a.X)()).formatAmount,k=function(e){var t=e.campaign,n=e.exclude,c=e.onExcludeId,s=!(!t||!t.parent)&&t.parent,y=!!s,w=function(e){var t=Object(p.isEmpty)(e.country)?"":j[e.country],n=Object(a.xb)([e.city,e.state,t],", ");return Object(p.isEmpty)(Object(p.trim)(n))?"":n},E=function(e){var t=w(e);return e.country||t?Object(r.createElement)(d.a,{justify:"start"},!Object(p.isEmpty)(e.country)&&Object(r.createElement)(d.c,null,Object(r.createElement)(g.a,{code:e.country,size:18})),Object(r.createElement)(d.c,null,t&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",null,w(e)),Object(r.createElement)("br",null)))):Object(r.createElement)("span",null,Object(u.__)("-","wp-marketing-automations"))},k=function(e){return Object(r.createElement)(f.a,{href:"admin.php?page=autonami&path=/contact/"+e.id,className:"bwf-a-no-underline"},Object(r.createElement)(O.a,{contact:e,hideJoiningDate:!0}))},S=function(e){return Object(r.createElement)("div",{className:"bwf-c-contact-details-cell"},1==t.type&&(e.email?Object(r.createElement)(d.a,{justify:"start",align:"top"},Object(r.createElement)(d.c,null,Object(r.createElement)(v.a,{icon:"mail"})),Object(r.createElement)(d.c,null,Object(r.createElement)(f.a,{href:"mailto:"+e.email,className:"bwf-a-no-underline",type:"external"},e.email))):Object(r.createElement)("span",null,Object(u.__)("-","wp-marketing-automations"))),[2,3].includes(parseInt(t.type))&&(Object(p.isEmpty)(e.contact_no)?"-":Object(r.createElement)(d.a,{justify:"start",align:"top"},Object(r.createElement)(d.c,null,Object(r.createElement)(v.a,{icon:"phone"})),Object(r.createElement)(d.c,null,Object(r.createElement)(f.a,{href:"tel:"+e.contact_no,className:"bwf-a-no-underline",type:"external"},e.contact_no)))))},x=Object(o.a)(),C=x.getPageNumber,I=x.getPerPageCount,N=x.getTotalCount,A=x.getLoading,L=x.getContacts,D=Object(i.a)().fetch,T=e.query,q=L(),M=C(),F=I(),B=N(),J=A(),R=_(Object(r.useState)(!0),2),G=R[0],U=R[1];Object(r.useEffect)((function(){G&&B>0&&U(!1)}),[B]);var H=[{cellClassName:"is-checkbox-column",key:"id",label:"",required:!0},{key:"contact",label:Object(u.__)("Contact","wp-marketing-automations"),isLeftAligned:!0,required:!0},{key:"contact_details",label:Object(u.__)("Details","wp-marketing-automations"),isLeftAligned:!0}];Object(a.wb)()?H.push({key:"total_spent",label:Object(u.__)("Total Spent","wp-marketing-automations"),isLeftAligned:!0}):H.push({key:"column_location",label:Object(u.__)("Location","wp-marketing-automations"),isLeftAligned:!0});var $=function(e){var t=e.wc,n=t.total_order_count,a=t.total_order_value;t.total_purchased_items;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"bwf-c-listing-total-spent"},a&&n?Object(r.createElement)("div",{className:"bwf-c-total-spent-amount"},P(a)," |"," ",n," ",Object(u.__)(parseInt(n)>1?"orders":"order","wp-marketing-automations")):"-"))},z=q.map((function(e){var t=function(e){return Object(p.merge)({id:0,email:"-",first_name:"",last_name:"",creation_date:"",fields:{marketing_status:"0",first_order_date:"",country:"",city:"",state:"",phone:""},wc:{id:1,l_order_date:"",total_order_count:0,total_order_value:0,total_purchased_items:0}},e)}(e),o=[{display:Object(r.createElement)(m.CheckboxControl,{onChange:function(e){return r=t.id,void c(e?n.filter((function(e){return e!==r})):[].concat(h(n),[r]));var r},"aria-label":Object(u.__)("Select"),checked:-1===n.indexOf(t.id)}),value:t.id},{display:k(t),value:Object(a.xb)([t.first_name,t.last_name]," ")},{display:S(t),value:Object(u.__)("Email: "+t.email+", Phone: "+t.phone,"wp-marketing-automations")}];return Object(a.wb)()?o.push({display:$(t),value:""}):o.push({display:E(t),value:w(t)}),o})),Q=function(e){if(e!==F){var n=T,r=!1;t&&t.data.is_promotional?(n.status_is=1,r=!0):n.status_is_not=2;var a=!1;n&&n.lists_any&&(a=!0),D(n,0,e,!0,!1,parseInt(3===parseInt(t.type)?2:t.type),r,a,!!y&&s)}},V=l()("bwfcrm-contacts-list",{"has-search":!0}),X=t&&!0===t.data.is_promotional?Object(u.__)("Subscribed Contacts ","wp-marketing-automations"):Object(u.__)("Contacts ","wp-marketing-automations"),K=parseInt(B)-n.length>0?" ("+(parseInt(B)-n.length)+")":"";return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(b.a,{className:V,title:X+K,rows:z,headers:H,query:{paged:M},rowsPerPage:F,totalRows:B,isLoading:J,onPageChange:function(e,n){var r=(e-1)*F,a=T,c=!1;t&&t.data.is_promotional?(a.status_is=1,c=!0):a.status_is_not=2;var o=!1;a&&a.lists_any&&(o=!0),D(a,r,F,!0,!1,parseInt(3===parseInt(t.type)?2:t.type),c,o,!!y&&s)},onQueryChange:function(e){return"per_page"!==e?function(){}:Q},showMenu:!1,emptyMessage:Object(u.__)("No contacts found","wp-marketing-automations")}))};k.defaultProps={contacts:[]};var S=k,x=n(15),C=n(796),I=n(805),N=n(10),A=n.n(N),L=n(142),D=n(144),T=n(822),q=n(44),M=n(828);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(e){var t,n=e.campaignId,c=e.query,o=Object(T.a)();return!0===o?Object(r.createElement)(r.Fragment,null,Object(r.createElement)(q.a,null),Object(r.createElement)("div",{className:"bwf_clear_20"})):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(m.Card,{className:"bwf-c-campaign-rule-selector"},Object(r.createElement)("div",{className:"bwf-display-flex bwf-space-between"},Object(r.createElement)("div",{className:"bwf-c-campaign-rule-head bwf-w-300"},Object(u.__)("Segment Contacts","wp-marketing-automations")),Object(r.createElement)(M.c,{restrictedFilters:["status_is","status_is_not"]})),Object(r.createElement)("div",{className:"bwf-c-campaign-rule-container"},Object(r.createElement)(D.a,{siteLocale:"en-US",currency:Object(a.wb)()?bwfcrm_contacts_data.currency:{},config:{title:Object(u.__)("Select Rules","wp-marketing-automations"),filters:(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o),!0!==t&&t&&t.status&&delete t.status,t),footerComponent:function(e){return Object(r.createElement)(M.a,{filter:e.data,config:e.config})},enableGrouping:!0},path:"/broadcast/".concat(n),query:c}))))},R=n(67),G=n(135),U=n(134);function H(e,t,n,r,a,c,o){try{var i=e[c](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function $(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=z(Object(r.useState)({message:"",type:1}),2),n=t[0],s=t[1],l=e.location,b=l&&l.search?Object(c.parse)(l.search.substring(1)):{},f=(b.page,b.path,$(b,["page","path"])),d=z(Object(r.useState)({status:!1,loading:!1}),2),O=d[0],g=d[1],j=Object(I.a)(),y=Object(o.a)().getTotalCount,v=Object(i.a)().fetch,h=Object(U.a)().setL2Title,_=j.setCampaignValues,w=j.setExclude,E=C.a.getCampaignId(),P=C.a.getCampaignData(),k=C.a.getStep(),N=y(),D=C.a.getExcludes(),T=!(!P||!P.parent)&&P.parent,q=!!T,M=z(Object(r.useState)(!0),2),F=M[0],B=M[1];Object(r.useEffect)((function(){if(2===parseInt(k)){var e=f,t=!1;!P.data||!P.data.hasOwnProperty("is_promotional")||P.data.is_promotional?(e.status_is=1,t=!0):e.status_is_not=2;var n=!1;e&&e.lists_any&&(n=!0);var r=P&&P.type?P.type:1;v(e,0,10,!0,!1,parseInt(3===parseInt(r)?2:r),t,n,!!q&&T),!F&&w([]),B(!1)}}),[l.search]),Object(r.useEffect)((function(){h("title"in P?P.title:"")}),[P]);var Q=function(){var t,n=(t=regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={page:b.page,path:b.path},c=void 0,c=P.data&&!Object(p.isNull)(P.data)&&P.data.hasOwnProperty("filters")?P.data.filters:{},!(JSON.stringify(c)!=JSON.stringify(f)||P.count!=N||Array.isArray(D)&&D.length>0||N<1)){t.next=12;break}if(!((r=parseInt(N)?parseInt(N)-(Array.isArray(D)?D.length:0):0)<1)){t.next=6;break}return g({status:!0,error:Object(u.__)("No Contacts are selected.","wp-marketing-automations")}),t.abrupt("return");case 6:return e.setPending(!0),t.next=9,A()({path:Object(a.m)("/broadcast/".concat(E)),method:"POST",data:{data:{filters:f,count:r,modified_by:Object(a.x)(),exclude:D},step:2},headers:{"Content-Type":"application/json"}}).then((function(e){200==e.code?(_("data",e.result),s({message:e.message,type:1}),_("step",3),Object(x.k)(n,"/",{})):s({message:e.message,type:1})}));case 9:e.setPending(!1),t.next=14;break;case 12:_("step",3),Object(x.k)(n,"/",{});case 14:case"end":return t.stop()}var c}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var c=t.apply(e,n);function o(e){H(c,r,a,o,i,"next",e)}function i(e){H(c,r,a,o,i,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(R.a,null),Object(r.createElement)("div",{className:"bwf-campaign-step-div bwf-card-wrap bwf-campaign-step-2"},Object(r.createElement)("div",{className:"bwf-card-header"},Object(r.createElement)("span",{className:"bwf-form-title"},Object(u.__)("Contacts","wp-marketing-automations"))),Object(r.createElement)("div",{className:"bwf-filters-advanced-filters"},q?Object(r.createElement)(m.Card,{className:"bwf-c-campaign-contact-table"},Object(r.createElement)("p",null,Object(u.__)("This broadcast will send emails to those contact, who didn't opened emails in the parent broadcast: ","wp-marketing-automations")+"#"+T)):Object(r.createElement)(J,{campaignId:E,query:b})),Object(r.createElement)("div",{className:"bwf-p-gap bwf-pt-0"},Object(r.createElement)(m.Card,{className:"bwf-c-campaign-contact-table"},Object(r.createElement)(S,{query:b,campaign:P,exclude:D,onExcludeId:function(e){return w(e)}}))),Object(r.createElement)(L.a,{message:n.message,type:n.type,removeMessage:function(){return s({message:"",type:1})}}),Object(r.createElement)("div",{className:"bwf-p-gap bwf-pt-0"},Object(r.createElement)("div",{className:"bwf-crm-campaign-navigation"},Object(r.createElement)(m.Button,{className:"bwf-crm-navigation-previous",isSecondary:!0,onClick:function(){var e={page:b.page,path:b.path};Object(x.k)(e,"/",{}),_("step",1)}},Object(u.__)("Previous","wp-marketing-automations")),Object(r.createElement)(m.Button,{isPrimary:!0,className:"bwf-crm-navigation-next",onClick:Q,isBusy:e.isPending},Object(u.__)("Next","wp-marketing-automations"))))),Object(r.createElement)(G.a,{isLoading:O.loading,successMessage:O.success,errorMessage:O.error,isOpen:O.status,onRequestClose:function(){return g({status:!1})}}))}},800:function(e,t,n){"use strict";var r=n(134),a=n(0),c=n(2);t.a=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},s=Object(r.a)(),l=s.setActiveMultiple,u=s.resetHeaderMenu,b=s.setL2NavType,p=s.setL2Nav,f=s.setBackLink,m=s.setL2Title,d=s.setL2Content,O=s.setBackLinkLabel,g=s.setPageHeader;return Object(a.useEffect)((function(){u(),!t&&b("menu"),!t&&p(i.contacts_nav),l({leftNav:"contacts",rightNav:e}),t&&f(t),t&&O("All Contacts"),n&&m(n),n&&"Export"===n&&(o&&d(o),b("menu"),p({export:{name:Object(c.__)("All","wp-marketing-automations"),link:"admin.php?page=autonami&path=/export"}})),!t&&o&&d(o),g("Contacts")}),[e,n]),!0}},807:function(e,t,n){"use strict";var r=n(136),a=n(5);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(){var e=Object(r.a)("contacts"),t=e.fetch;return o(o({},s(e,["fetch"])),{},{fetch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,c=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,l=arguments.length>6&&void 0!==arguments[6]&&arguments[6],u=arguments.length>7&&void 0!==arguments[7]&&arguments[7],b=arguments.length>8&&void 0!==arguments[8]&&arguments[8],p=e.s,f=void 0===p?"":p,m=(e.page,e.filter,e.orderby),d=e.order,O=(e.path,s(e,["s","page","filter","orderby","order","path"])),g={offset:n,limit:r,search:f,filters:O,get_wc:Object(a.wb)(),grab_totals:c,only_count:o,fetch_base:i,grab_custom_fields:!1,exclude_unsubs:l,exclude_unsubs_lists:u};d&&m&&(g.order=d,g.order_by=m),b&&(g.unopen_broadcast=parseInt(b)),t("GET",Object(a.m)("/contacts"),g)},fetchListing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,c=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,l=arguments.length>6&&void 0!==arguments[6]&&arguments[6],u=arguments.length>7&&void 0!==arguments[7]&&arguments[7],b=arguments.length>8&&void 0!==arguments[8]&&arguments[8],p=e.s,f=void 0===p?"":p,m=(e.page,e.filter,e.orderby),d=e.order,O=(e.path,s(e,["s","page","filter","orderby","order","path"])),g={offset:n,limit:r,search:f,filters:O,get_wc:Object(a.wb)(),grab_totals:c,only_count:o,fetch_base:i,grab_custom_fields:!1,exclude_unsubs:l,exclude_unsubs_lists:u};d&&m&&(g.order=d,g.order_by=m),b&&(g.unopen_broadcast=parseInt(b)),t("GET",Object(a.m)("/contacts/listing"),g)},startIndexing:function(){return t("GET",Object(a.m)("/contacts"),{start_indexing:!0})}})}},816:function(e,t,n){"use strict";var r=n(137);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(){var e=Object(r.a)("contacts"),t=e.getStateProp;return c(c({},i(e,["getStateProp"])),{},{getContacts:function(){return t("contacts_list")},getPageNumber:function(){return parseInt(t("offset"))/parseInt(t("limit"))+1},getPerPageCount:function(){return parseInt(t("limit"))},getTotalCount:function(){return parseInt(t("total"))},getCountData:function(){return t("countData")}})}}}]);