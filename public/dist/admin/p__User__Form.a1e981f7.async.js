(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"+1iq":function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("miYZ");var n=l(a("tsqr")),u=l(a("2Taf")),o=l(a("vZ4D")),d=l(a("l4Ni")),s=l(a("ujKo")),i=l(a("MhPg")),f=l(a("q1tI")),c=l(a("vn99")),p=function(e){function t(){var e,a;(0,u.default)(this,t);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return a=(0,d.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(r))),a.state={id:a.props.match.params.id},a.toList=function(){a.props.history.replace("/User/List")},a.handleFormClose=function(){a.state.id?n.default.success("\u7f16\u8f91\u6210\u529f"):n.default.success("\u6dfb\u52a0\u6210\u529f"),a.toList()},a.handleFormCancel=function(){a.toList()},a}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.state.id;return f.default.createElement(r.default,null,f.default.createElement("div",{className:"max-width-900px"},f.default.createElement(c.default,{id:e,onClose:this.handleFormClose,onCancel:this.handleFormCancel})))}}]),t}(f.default.Component),m=p;t.default=m},"V/I/":function(e,t,a){},vn99:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("+L6B");var r=l(a("2/Rp"));a("5NDa");var n=l(a("5rEg"));a("Pwec");var u=l(a("CtXQ"));a("miYZ");var o=l(a("tsqr")),d=l(a("2Taf")),s=l(a("vZ4D")),i=l(a("l4Ni")),f=l(a("ujKo")),c=l(a("MhPg"));a("y8nQ");var p=l(a("Vl3Y"));a("V/I/");var m,h,v,y,E,b=l(a("q1tI")),g=(l(a("17x9")),a("MuoO")),C=l(a("9PlM")),w=(m=(0,g.connect)(),h=p.default.create(),m(v=h((E=y=function(e){function t(){var e,a;(0,d.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,i.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(r))),a.handleSubmit=function(e){e.preventDefault();var t=a.props.form;t.validateFields(function(e,l){if(!e)if(t.isFieldsTouched()){var r=a.props.dispatch;a.props.id?r({type:"user/update",id:a.props.id,payload:l}).then(function(e){200===e.code?a.props.onClose(l):o.default.error(e.message)}):r({type:"user/create",payload:l}).then(function(e){200===e.status?a.props.onClose():o.default.error(e.message)})}else a.props.onCancel()})},a}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.id){var t=this.props.dispatch;t({type:"user/detail",payload:this.props.id}).then(function(t){if(!t.data)return o.default.error("\u6570\u636e\u4e0d\u5b58\u5728"),void e.props.onCancel();delete t.data.id,e.props.form.setFieldsValue(t.data)})}}},{key:"render",value:function(){var e=this.props.form;return b.default.createElement(p.default,{onSubmit:this.handleSubmit},b.default.createElement(p.default.Item,{label:"\u5934\u50cf",className:"mb-6"},e.getFieldDecorator("logo")(b.default.createElement(C.default,null))),b.default.createElement(p.default.Item,{label:"\u8d26\u53f7"},e.getFieldDecorator("userName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d26\u53f7"}]})(b.default.createElement(n.default,{prefix:b.default.createElement(u.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u8bf7\u8f93\u5165\u8d26\u53f7"}))),b.default.createElement(p.default.Item,{label:"\u5bc6\u7801"},e.getFieldDecorator("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(b.default.createElement(n.default,{prefix:b.default.createElement(u.default,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801"}))),b.default.createElement(p.default.Item,null,b.default.createElement(r.default,{type:"primary",htmlType:"submit"},"\u4fdd\u5b58"),b.default.createElement("span",null,"\u2003"),b.default.createElement(r.default,{onClick:this.props.onCancel},"\u53d6\u6d88")))}}]),t}(b.default.Component),y.defaultProps={onClose:function(){},onCancel:function(){}},v=E))||v)||v),F=w;t.default=F}}]);