(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"n/bs":function(e,t,a){"use strict";var n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var r=n(a("bx4M"));a("g9YV");var l=n(a("wCAj")),u=n(a("jehZ"));a("5NDa");var o=n(a("5rEg")),i=n(a("p0pE"));a("5Dmo");var d=n(a("3S7+")),c=n(a("2Taf")),f=n(a("vZ4D")),s=n(a("l4Ni")),p=n(a("ujKo")),m=n(a("rlhR")),h=n(a("MhPg"));a("y8nQ");var g=n(a("Vl3Y"));a("xCuD");var S,v,w,y,E=n(a("q1tI")),b=(n(a("17x9")),a("MuoO")),D=n(a("J3+i")),k=n(a("Jn7e")),z=n(a("OmSi")),C=n(a("6uA3")),x=n(a("pizo")),F=n(a("q7UH")),I=n(a("69YY")),B=n(a("kAqz")),N=(S=(0,b.connect)(),v=g.default.create(),S(w=v((y=function(e){function t(){var e,a;(0,c.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=(0,s.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(r))),a.searchForm=null,a.columns=[{width:140,title:"\u673a\u6784\u540d\u79f0",dataIndex:"name"},{width:140,title:"\u673a\u6784\u7f51\u7ad9",dataIndex:"website",render:function(e){return E.default.createElement("a",{href:e,target:"_blank"},e)}},{width:220,title:"\u7b80\u4ecb",dataIndex:"intro",render:function(e){return E.default.createElement(d.default,{title:e},E.default.createElement("span",{className:"one-line-text",style:{width:"300px"}},e))}},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"cnStatus"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"releaseTime"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t,n){return E.default.createElement(E.default.Fragment,null,E.default.createElement(z.default,{row:t,api:"/organization/updateStatusById",status:t.status,finallyCallback:a.loadDataSource}),E.default.createElement(C.default,{row:t,api:"/organization/stickById",status:t.stick,finallyCallback:a.loadDataSource}),E.default.createElement(F.default,{row:t,FormWidget:D.default}),E.default.createElement(I.default,{api:"/organization/delById",row:t,finallyCallback:a.loadDataSource}))}}],a.config={bordered:!0,size:"small",rowKey:"_id",rowSelection:{onChange:function(e,t){a.setState({selection:t})}}},a.defaultPagination={current:1,pageSize:10,total:0},a.pagination=JSON.parse(JSON.stringify(a.defaultPagination)),a.state={dataSource:[],selection:[]},a.rowPipe=function(e){return e.avatar&&(e.avatar=e.avatar.split(",")[0]),e.cnStatus=k.default.public.status.audit[e.status]||e.status,e},a.loadDataSource=function(e,t){var n=(0,m.default)(a),r=n.pagination,l=n.searchForm,u=a.props.dispatch;e=e||r.current,t=t||r.pageSize;var o=(0,i.default)({page:e,limit:t},l.getFieldsValue());u({type:"organization/list",payload:o}).then(function(n){if(200===n.status){n=n.data;var l=n.docs.map(a.rowPipe);r.current=e,r.pageSize=t,r.total=n.total,a.setState({dataSource:l})}})},a.handleSearchFormChange=function(){var e=(0,m.default)(a),t=e.defaultPagination;a.loadDataSource(t.current,t.pageSize)},a.renderBatchOperatorBar=function(){return null},a}return(0,h.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.loadDataSource()}},{key:"render",value:function(){var e=this,t=this.columns,a=this.config,n=this.pagination,i=this.state,d=i.dataSource,c=i.selection;return E.default.createElement(r.default,{className:"page__list"},E.default.createElement(B.default,{wrappedComponentRef:function(t){return e.searchForm=t},onChange:this.handleSearchFormChange},function(e){return E.default.createElement(E.default.Fragment,null,E.default.createElement(g.default.Item,{label:"\u673a\u6784\u540d\u79f0"},e.getFieldDecorator("keyWords")(E.default.createElement(o.default,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"}))))}),E.default.createElement("div",{className:"operator-bar"},E.default.createElement(x.default,{to:"Form"}," \u6dfb\u52a0\u673a\u6784 "),c.length>0&&this.renderBatchOperatorBar()),E.default.createElement(l.default,(0,u.default)({columns:t,dataSource:d},a,{pagination:n,onChange:function(t){return e.loadDataSource(t.current,t.pageSize)}})))}}]),t}(E.default.Component),w=y))||w)||w),O=N;t.default=O},xCuD:function(e,t,a){}}]);