(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"1xAQ":function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.update=n,e.detail=d,e.create=s,e.list=c,e.del=i;var u=r(a("t3Un"));function n(t){return(0,u.default)("/statute/updateById",{method:"post",data:t})}function d(t){return(0,u.default)("/statute/getDetails?id="+t)}function s(t){return(0,u.default)("/statute/publish",{method:"post",data:t})}function c(t){return(0,u.default)("/statute/getList",{params:t})}function i(t){return(0,u.default)("/statute/delById",{method:"post",data:t})}},GbhL:function(t,e,a){"use strict";var r=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(a("d6i3")),n=a("1xAQ"),d={state:null,effects:{create:u.default.mark(function t(e){var a;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,t.abrupt("return",(0,n.create)(a));case 2:case"end":return t.stop()}},t)}),list:u.default.mark(function t(e){var a;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,t.abrupt("return",(0,n.list)(a));case 2:case"end":return t.stop()}},t)}),detail:u.default.mark(function t(e){var a;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,t.abrupt("return",(0,n.detail)(a));case 2:case"end":return t.stop()}},t)}),update:u.default.mark(function t(e){var a;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,t.abrupt("return",(0,n.update)(a));case 2:case"end":return t.stop()}},t)}),del:u.default.mark(function t(e){var a;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.payload,t.abrupt("return",(0,n.del)(a));case 2:case"end":return t.stop()}},t)})}};e.default=d}}]);