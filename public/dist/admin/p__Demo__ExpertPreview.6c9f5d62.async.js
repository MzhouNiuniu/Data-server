(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{FWUp:function(e,t,l){"use strict";var a=l("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,l("miYZ");var n=a(l("tsqr")),u=a(l("2Taf")),r=a(l("vZ4D")),d=a(l("l4Ni")),c=a(l("ujKo")),f=a(l("MhPg"));l("j0CB");var m=a(l("q1tI")),E=l("M89c"),o=function(e){function t(){var e,l;(0,u.default)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return l=(0,d.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(n))),l.state={formData:null},l}return(0,f.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id&&(0,E.detail)(this.props.match.params.id).then(function(t){var l=t.data&&t.data[0];l?(["languages","professional","registered","achievement"].forEach(function(e){l[e]&&l[e].length||delete l[e]}),e.setState({formData:l})):n.default.error("\u6570\u636e\u4e0d\u5b58\u5728")})}},{key:"render",value:function(){var e=this.state.formData;if(!e)return null;var t="\u5f85\u5b8c\u5584";return m.default.createElement("section",{style:{backgroundColor:"#fff",width:"1000px",padding:"10px"}},m.default.createElement("table",{className:"outmoded-table brief-table"},m.default.createElement("caption",null,"\u4e13\u5bb6\u4fe1\u606f"),m.default.createElement("tbody",null,m.default.createElement("tr",null,m.default.createElement("th",null,"\u59d3 \u540d"),m.default.createElement("td",null,e.name),m.default.createElement("th",null,"\u6027 \u522b"),m.default.createElement("td",null,e.sex),m.default.createElement("td",{rowSpan:4},m.default.createElement("img",{className:"avatar",alt:"\u4e2a\u4eba\u5934\u50cf",src:e.photos}))),m.default.createElement("tr",null,m.default.createElement("th",null,"\u5b66 \u5386"),m.default.createElement("td",null,e.education),m.default.createElement("th",null,"\u5b66 \u4f4d"),m.default.createElement("td",null,e.degree)),m.default.createElement("tr",null,m.default.createElement("th",null,"\u4e13\u5bb6\u7c7b\u578b"),m.default.createElement("td",null,e.experType),m.default.createElement("th",null,"\u90ae \u7bb1"),m.default.createElement("td",null,e.mailbox)),m.default.createElement("tr",null,m.default.createElement("th",null,"\u64c5\u957f\u9886\u57df"),m.default.createElement("td",{colSpan:4},e.speciality)),m.default.createElement("tr",null,m.default.createElement("th",{rowSpan:1+(e.languages?e.languages.length:1)},"\u8bed\u8a00\u80fd\u529b"),m.default.createElement("td",null,"\u5e8f\u53f7"),m.default.createElement("td",{colSpan:2},"\u542c\u8bf4\u80fd\u529b"),m.default.createElement("td",null,"\u8bfb\u5199\u80fd\u529b")),e.languages?e.languages.map(function(e,t){return m.default.createElement("tr",{key:"lang"+t},m.default.createElement("td",null,t+1),m.default.createElement("td",{colSpan:2},e.lsAbility),m.default.createElement("td",null,e.rwAbility))}):m.default.createElement("tr",null,m.default.createElement("td",{colSpan:4},t)),m.default.createElement("tr",null,m.default.createElement("th",{rowSpan:1+(e.professional?e.professional.length:1)},"\u4e13\u4e1a\u6280\u672f\u804c\u79f0"),m.default.createElement("td",null,"\u5e8f\u53f7"),m.default.createElement("td",{colSpan:2},"\u540d\u79f0"),m.default.createElement("td",null,"\u8bc4\u5b9a\u65f6\u95f4")),e.professional?e.professional.map(function(e,t){return m.default.createElement("tr",{key:"pro"+t},m.default.createElement("td",null,t+1),m.default.createElement("td",{colSpan:2},e.name),m.default.createElement("td",null,e.confirmTime))}):m.default.createElement("tr",null,m.default.createElement("td",{colSpan:4},t)),m.default.createElement("tr",null,m.default.createElement("th",{rowSpan:1+(e.registered?e.registered.length:1)},"\u6ce8\u518c\u6267\u4e1a\u8d44\u683c"),m.default.createElement("td",null,"\u5e8f\u53f7"),m.default.createElement("td",{colSpan:2},"\u540d\u79f0"),m.default.createElement("td",null,"\u8bc4\u5b9a\u65f6\u95f4")),e.registered?e.registered.map(function(e,t){return m.default.createElement("tr",{key:"reg"+t},m.default.createElement("td",null,t+1),m.default.createElement("td",{colSpan:2},e.name),m.default.createElement("td",null,e.confirmTime))}):m.default.createElement("tr",null,m.default.createElement("td",{colSpan:4},t)))),m.default.createElement("table",{className:"outmoded-table project-table"},m.default.createElement("caption",null,"PPP\u4ece\u4e1a\u7ecf\u5386\u53ca\u5de5\u4f5c\u6210\u679c"),e.achievement?m.default.createElement("tbody",null,e.achievement.map(function(e,t){return m.default.createElement(m.default.Fragment,{key:t},m.default.createElement("tr",null,m.default.createElement("td",{colSpan:4,className:"item-title"},"\u79d1\u7814\u6210\u679c",t+1)),m.default.createElement("tr",null,m.default.createElement("th",null," \u540d \u79f0"),m.default.createElement("td",{colSpan:3},e.name)),m.default.createElement("tr",null,m.default.createElement("th",null,"\u65f6 \u95f4"),m.default.createElement("td",null,e.time[0]," \uff5e ",e.time[1]),m.default.createElement("th",null,"\u9879\u76ee\u7ea7\u522b"),m.default.createElement("td",null,e.level)),m.default.createElement("tr",null,m.default.createElement("th",null,"\u53c2\u4e0e\u4e3b\u4f53\u6027\u8d28"),m.default.createElement("td",{colSpan:3},e.nature)),m.default.createElement("tr",null,m.default.createElement("th",null,"\u9879\u76ee\u5185\u5bb9"),m.default.createElement("td",{colSpan:3,className:"text-left"},e.content)),m.default.createElement("tr",null,m.default.createElement("th",null,"\u627f\u62c5\u89d2\u8272"),m.default.createElement("td",{colSpan:3},e.role)),m.default.createElement("tr",null,m.default.createElement("th",null,"\u5de5\u4f5c\u804c\u8d23"),m.default.createElement("td",{colSpan:3,className:"text-left"},e.duty)),m.default.createElement("tr",null,m.default.createElement("th",null,"\u5de5\u4f5c\u6210\u679c"),m.default.createElement("td",{colSpan:3,className:"text-left"},e.summary)))})):m.default.createElement("tr",null,m.default.createElement("td",null,t))))}}]),t}(m.default.Component),i=o;t.default=i},j0CB:function(e,t,l){}}]);