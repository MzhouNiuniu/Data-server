(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{"V/ma":function(e,t,a){},woZw:function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("g9YV");var l=n(a("wCAj")),u=n(a("jehZ"));a("5NDa");var o=n(a("5rEg")),i=n(a("p0pE")),d=n(a("2Taf")),c=n(a("vZ4D")),f=n(a("l4Ni")),s=n(a("ujKo")),p=n(a("rlhR")),m=n(a("MhPg"));a("y8nQ");var h=n(a("Vl3Y"));a("V/ma");var g,S,v,w,y=n(a("q1tI")),E=(n(a("17x9")),a("MuoO")),F=n(a("Jn7e")),b=n(a("pizo")),z=n(a("kAqz")),D=(g=(0,E.connect)(),S=h.default.create(),g(v=S((w=function(e){function t(){var e,a;(0,d.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=(0,f.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(r))),a.searchForm=null,a.columns=[{width:90,title:"\u5934\u50cf",dataIndex:"logo",render:function(e){return e?y.default.createElement("img",{className:"max-width-100",src:e,alt:""}):"\u6682\u672a\u8bbe\u7f6e"}},{width:90,title:"ID",dataIndex:"_id"},{title:"\u7528\u6237\u540d",dataIndex:"userName"},{title:"\u89d2\u8272",dataIndex:"role",render:function(e){return"admin"==e?y.default.createElement("span",null,"\u7ba1\u7406\u5458"):y.default.createElement("span",null,"\u7528\u6237")}},{title:"\u64cd\u4f5c",render:function(e){return console.log(e),y.default.createElement(b.default,{to:"Form?id=".concat(e._id)}," \u4fee\u6539 ")}}],a.config={bordered:!0,size:"small",rowKey:"_id",rowSelection:{onChange:function(e,t){a.setState({selection:t})}}},a.defaultPagination={current:1,pageSize:10,total:0},a.pagination=JSON.parse(JSON.stringify(a.defaultPagination)),a.state={dataSource:[],selection:[]},a.rowPipe=function(e){return e.cnType=F.default.policy.typeMap[e.type]||e.status,e.cnStatus=F.default.public.status.audit[e.status]||e.status,e},a.loadDataSource=function(e,t){var n=(0,p.default)(a),r=n.pagination,l=n.searchForm,u=a.props.dispatch;e=e||r.current,t=t||r.pageSize;var o=(0,i.default)({page:e,limit:t},l.getFieldsValue());u({type:"user/list",payload:o}).then(function(n){if(200===n.status){n=n.data;var l=n.docs.map(a.rowPipe);r.current=e,r.pageSize=t,r.total=n.total,a.setState({dataSource:l})}})},a.handleSearchFormChange=function(){var e=(0,p.default)(a),t=e.defaultPagination;a.loadDataSource(t.current,t.pageSize)},a.renderBatchOperatorBar=function(){return null},a}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.loadDataSource()}},{key:"render",value:function(){var e=this,t=this.columns,a=this.config,n=this.pagination,i=this.state,d=i.dataSource,c=i.selection;return y.default.createElement(r.default,{className:"page__list"},y.default.createElement(z.default,{wrappedComponentRef:function(t){return e.searchForm=t},onChange:this.handleSearchFormChange},function(e){return y.default.createElement(y.default.Fragment,null,y.default.createElement(h.default.Item,{label:"\u7528\u6237\u540d"},e.getFieldDecorator("keyWords")(y.default.createElement(o.default,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"}))))}),y.default.createElement("div",{className:"operator-bar"},y.default.createElement(b.default,{to:"Form"}," \u6dfb\u52a0\u7528\u6237 "),c.length>0&&this.renderBatchOperatorBar()),y.default.createElement(l.default,(0,u.default)({columns:t,dataSource:d},a,{pagination:n,onChange:function(t){return e.loadDataSource(t.current,t.pageSize)}})))}}]),t}(y.default.Component),v=w))||v)||v),C=D;t.default=C}}]);