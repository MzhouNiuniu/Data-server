(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"/Vln":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=n(a("bx4M"));a("miYZ");var o=n(a("tsqr")),s=n(a("2Taf")),r=n(a("vZ4D")),u=n(a("l4Ni")),i=n(a("ujKo")),d=n(a("MhPg")),c=n(a("q1tI")),f=n(a("MRVb")),p=function(e){function t(){var e,a;(0,s.default)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=(0,u.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(l))),a.state={id:a.props.match.params.id},a.toList=function(){a.props.history.replace("/ProfessionReport/List")},a.handleFormClose=function(){a.state.id?o.default.success("\u7f16\u8f91\u6210\u529f"):o.default.success("\u6dfb\u52a0\u6210\u529f"),a.toList()},a.handleFormCancel=function(){a.toList()},a}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.state.id;return c.default.createElement(l.default,null,c.default.createElement("div",{className:"max-width-900px"},c.default.createElement(f.default,{id:e,onClose:this.handleFormClose,onCancel:this.handleFormCancel})))}}]),t}(c.default.Component),h=p;t.default=h}}]);