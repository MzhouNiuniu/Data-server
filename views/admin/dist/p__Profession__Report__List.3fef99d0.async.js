(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"4FcO":function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=l(a("bx4M"));a("g9YV");var n=l(a("wCAj")),u=l(a("jehZ"));a("OaEy");var o=l(a("2fM7"));a("5NDa");var d=l(a("5rEg")),i=l(a("p0pE")),c=l(a("2Taf")),f=l(a("vZ4D")),s=l(a("l4Ni")),p=l(a("ujKo")),m=l(a("rlhR")),h=l(a("MhPg"));a("y8nQ");var g=l(a("Vl3Y"));a("Yy4d");var y,S,v,w,E=l(a("q1tI")),b=(l(a("17x9")),a("MuoO")),k=l(a("Jn7e")),F=l(a("OmSi")),D=l(a("pizo")),I=l(a("6uA3")),C=l(a("q7UH")),O=l(a("MRVb")),x=l(a("69YY")),z=l(a("kAqz")),M=(y=(0,b.connect)(),S=g.default.create(),y(v=S((w=function(e){function t(){var e,a;(0,c.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,s.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(r))),a.searchForm=null,a.columns=[{width:90,title:"\u5c01\u9762",dataIndex:"cover",render:function(e){return e?E.default.createElement("img",{className:"max-width-100",src:e,alt:""}):"\u6682\u672a\u8bbe\u7f6e"}},{width:220,title:"\u6807\u9898",dataIndex:"name"},{title:"\u7c7b\u578b",dataIndex:"cnType"},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"cnStatus"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"releaseTime"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t,l){return E.default.createElement(E.default.Fragment,null,E.default.createElement(F.default,{row:t,api:"/researchReport/updateStatusById",status:t.status,finallyCallback:a.loadDataSource}),E.default.createElement(I.default,{row:t,api:"/researchReport/stickById",status:t.stick,finallyCallback:a.loadDataSource}),E.default.createElement(C.default,{row:t,FormWidget:O.default}),E.default.createElement(x.default,{api:"/researchReport/delById",row:t,finallyCallback:a.loadDataSource}))}}],a.config={bordered:!0,size:"small",rowKey:"_id",rowSelection:{onChange:function(e,t){a.setState({selection:t})}}},a.defaultPagination={current:1,pageSize:10,total:0},a.pagination=JSON.parse(JSON.stringify(a.defaultPagination)),a.state={dataSource:[],selection:[]},a.rowPipe=function(e){return e.cnType=k.default.profession.report.typeMap[e.type]||e.status,e.cnStatus=k.default.public.status.audit[e.status]||e.status,e},a.loadDataSource=function(e,t){var l=(0,m.default)(a),r=l.pagination,n=l.searchForm,u=a.props.dispatch;e=e||r.current,t=t||r.pageSize;var o=(0,i.default)({page:e,limit:t},n.getFieldsValue());u({type:"professionReport/list",payload:o}).then(function(l){if(200===l.status){l=l.data;var n=l.docs.map(a.rowPipe);r.current=e,r.pageSize=t,r.total=l.total,a.setState({dataSource:n})}})},a.handleSearchFormChange=function(){var e=(0,m.default)(a),t=e.defaultPagination;a.loadDataSource(t.current,t.pageSize)},a.renderBatchOperatorBar=function(){return null},a}return(0,h.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.loadDataSource()}},{key:"render",value:function(){var e=this,t=this.columns,a=this.config,l=this.pagination,i=this.state,c=i.dataSource,f=i.selection;return E.default.createElement(r.default,{className:"page__list"},E.default.createElement(z.default,{wrappedComponentRef:function(t){return e.searchForm=t},onChange:this.handleSearchFormChange},function(e){return E.default.createElement(E.default.Fragment,null,E.default.createElement(g.default.Item,{label:"\u6807\u9898"},e.getFieldDecorator("keyWords")(E.default.createElement(d.default,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"}))),E.default.createElement(g.default.Item,{label:"\u7c7b\u578b"},e.getFieldDecorator("type",{initialValue:0})(E.default.createElement(o.default,{placeholder:"\u8bf7\u9009\u62e9\u7c7b\u578b",className:"w160px"},k.default.profession.report.type.map(function(e){return E.default.createElement(o.default.Option,{key:e.value,value:e.value},e.label)})))))}),E.default.createElement("div",{className:"operator-bar"},E.default.createElement(D.default,{to:"Form"}," \u6dfb\u52a0\u62a5\u544a "),f.length>0&&this.renderBatchOperatorBar()),E.default.createElement(n.default,(0,u.default)({columns:t,dataSource:c},a,{pagination:l,onChange:function(t){return e.loadDataSource(t.current,t.pageSize)}})))}}]),t}(E.default.Component),v=w))||v)||v),N=M;t.default=N},Yy4d:function(e,t,a){}}]);