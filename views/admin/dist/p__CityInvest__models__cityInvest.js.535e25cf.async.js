(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"Az//":function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("d6i3")),u=a("xJBM"),d={state:null,effects:{create:n.default.mark(function t(e){var a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,t.abrupt("return",(0,u.create)(a));case 2:case"end":return t.stop()}},t)}),list:n.default.mark(function t(e){var a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,t.abrupt("return",(0,u.list)(a));case 2:case"end":return t.stop()}},t)}),detail:n.default.mark(function t(e){var a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,t.abrupt("return",(0,u.detail)(a));case 2:case"end":return t.stop()}},t)}),update:n.default.mark(function t(e){var a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,t.abrupt("return",(0,u.update)(a));case 2:case"end":return t.stop()}},t)}),del:n.default.mark(function t(e){var a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,t.abrupt("return",(0,u.del)(a));case 2:case"end":return t.stop()}},t)})}};e.default=d},xJBM:function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.update=u,e.detail=d,e.create=c,e.list=o,e.del=p;var n=r(a("t3Un"));function u(t){return(0,n.default)("/companyData/updateById",{method:"post",data:t})}function d(t){return(0,n.default)("/companyData/getDetails?id="+t)}function c(t){return(0,n.default)("/companyData/publish",{method:"post",data:t})}function o(t){return(0,n.default)("/companyData/getList",{params:t})}function p(t){return(0,n.default)("/companyData/delById",{method:"post",data:t})}}}]);