(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),o=a(268),c=a(867),i=a(859),l=a(77),s=a(5),u=a(103),m=a(3),p=(a(1193),a(886)),d=a(76),f=a(38),b=a(270);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o,c,i=[],l=!0,s=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;l=!1}else for(;!(l=(n=o.call(a)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){s=!0,r=e}finally{try{if(!l&&null!=a.return&&(c=a.return(),Object(c)!==c))return}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(e){var t=e.campaignType;Object(p.a)("orders","",!0,!0,!1,t);var a=e.campaignId,y=i.a.getConversionData(),O=i.a.getConversionLoading(),g=i.a.getConversionLimit(),h=i.a.getConversionOffset(),j=i.a.getConversionTotal(),v=Object(c.a)(),_=v.fetchConversion,k=v.setConversionValues,C=Object(l.a)(Object(s.X)()).formatAmount;Object(n.useEffect)((function(){_(a,g,h)}),[g,h]);var E=[{key:"orderid",label:Object(r.__)("Order ID","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m"},{key:"contact",label:Object(r.__)("Contact","wp-marketing-automations"),required:!0,cellClassName:"bwf-crm-col-contact"},{key:"purchaseitems",label:Object(r.__)("Purchased Items","wp-marketing-automations"),cellClassName:"bwf-crm-col-contact-details"},{key:"revenue",label:Object(r.__)("Revenue","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m"},{key:"date",label:Object(r.__)("Date","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m"}],P=i.a.getConversionPage(),N=function(e){e!==g&&(k("limit",e),k("offset",0))},A=function(e){return Object(n.createElement)(f.a,{href:"admin.php?page=autonami&path=/contact/"+e.cid,type:"bwf-crm",className:"bwf-crm-campaign-order-contact-link bwf-a-no-underline",key:e.cid},Object(n.createElement)(b.a,{contact:e,date:e.date,dateText:Object(r.__)("Placed on","wp-marketing-automations")}))},I=function(e){return e.hasOwnProperty("order_deleted")&&e.order_deleted?Object(n.createElement)(n.Fragment,null,"#"+e.wcid):Object(n.createElement)("a",{target:"_blank",className:"bwf-a-no-underline",href:"post.php?post="+e.wcid+"&action=edit"},"#"+e.wcid)},S=y.map((function(e){return[{display:e.hasOwnProperty("wcid")?I(e):"-",value:e.hasOwnProperty("wcid")?e.wcid:"-"},{display:A(e),value:e.hasOwnProperty("contact_name")?e.contact_name:"-"},{display:e.hasOwnProperty("items")?(t=e.items,a="",o=[],Object.entries(t).map((function(e){var t=w(e,2),r=t[0],c=t[1];Object(m.isEmpty)(a)&&(a=Object(n.createElement)("a",{className:"bwf-a-no-underline",target:"_blank",href:"post.php?action=edit&post="+r,rel:"noreferrer"},c)),o.push(Object(n.createElement)("a",{className:"bwf-a-no-underline",target:"_blank",href:"post.php?action=edit&post="+r},c))})),Object(n.createElement)(n.Fragment,null,Object(m.isEmpty)(a)?"-":a,!Object(m.isEmpty)(o)&&o.length>1&&Object(n.createElement)(u.a,{items:o}))):Object(r.__)("Order Deleted","wp-marketing-automations"),value:"purchase_item"},{display:e.hasOwnProperty("wctotal")?C(e.wctotal):"-",value:e.hasOwnProperty("wctotal")?e.wctotal:0},{display:e.hasOwnProperty("date")?Object(s.M)(e.date):"-",value:e.hasOwnProperty("date")?e.date:"-"}];var t,a,o}));return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(d.a,null),Object(n.createElement)(o.a,{className:"bwf-crm-campaign-report-conversion",rows:S,headers:E,query:{paged:P},rowsPerPage:g,totalRows:j,isLoading:O,onPageChange:function(e,t){k("offset",(e-1)*g)},onQueryChange:function(e){return"per_page"!==e?function(){}:N},rowHeader:!0,showMenu:!1,emptyMessage:Object(r.__)("No orders found","wp-marketing-automations"),hideHeader:"yes"}))}},1193:function(e,t,a){}}]);