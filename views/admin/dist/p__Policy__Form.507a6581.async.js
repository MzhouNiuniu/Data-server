(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{vElI:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var n=l(a("bx4M"));a("miYZ");var o=l(a("tsqr")),s=l(a("2Taf")),u=l(a("vZ4D")),i=l(a("l4Ni")),r=l(a("ujKo")),d=l(a("MhPg")),c=l(a("q1tI")),f=l(a("0jZc")),h=function(e){function t(){var e,a;(0,s.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return a=(0,i.default)(this,(e=(0,r.default)(t)).call.apply(e,[this].concat(n))),a.state={id:a.props.match.params.id},a.toList=function(){a.props.history.replace("/Policy/List")},a.handleFormClose=function(){a.state.id?o.default.success("\u7f16\u8f91\u6210\u529f"):o.default.success("\u6dfb\u52a0\u6210\u529f"),a.toList()},a.handleFormCancel=function(){a.toList()},a}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.state.id;return c.default.createElement(n.default,null,c.default.createElement("div",{className:"max-width-900px"},c.default.createElement(f.default,{id:e,onClose:this.handleFormClose,onCancel:this.handleFormCancel})))}}]),t}(c.default.Component),p=h;t.default=p}}]);