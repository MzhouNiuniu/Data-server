(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{K5ge:function(e,t,a){"use strict";var l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var n=l(a("bx4M"));a("g9YV");var r=l(a("wCAj")),u=l(a("jehZ"));a("DZo9");var o=l(a("8z0m"));a("+L6B");var d=l(a("2/Rp"));a("OaEy");var i=l(a("2fM7"));a("5NDa");var c=l(a("5rEg")),f=l(a("p0pE")),s=l(a("2Taf")),p=l(a("vZ4D")),m=l(a("l4Ni")),h=l(a("ujKo")),g=l(a("rlhR")),v=l(a("MhPg"));a("y8nQ");var w=l(a("Vl3Y"));a("mvGP");var S,y,E,F,b=l(a("q1tI")),D=(l(a("17x9")),a("MuoO")),k=l(a("Jn7e")),C=l(a("OmSi")),I=l(a("6uA3")),z=l(a("pizo")),x=l(a("q7UH")),P=l(a("rFJq")),O=l(a("69YY")),B=l(a("kAqz")),N=(S=(0,D.connect)(),y=w.default.create(),S(E=y((F=function(e){function t(){var e,a;(0,s.default)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return a=(0,m.default)(this,(e=(0,h.default)(t)).call.apply(e,[this].concat(n))),a.searchForm=null,a.columns=[{width:90,title:"\u5c01\u9762",dataIndex:"cover",render:function(e){return e?b.default.createElement("img",{className:"max-width-100",src:e,alt:""}):"\u6682\u672a\u8bbe\u7f6e"}},{width:220,title:"\u6807\u9898",dataIndex:"title"},{title:"\u7c7b\u578b",dataIndex:"cnType"},{title:"\u5ba1\u6838\u72b6\u6001",dataIndex:"cnStatus"},{title:"\u521b\u5efa\u65f6\u95f4",dataIndex:"releaseTime"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t,l){return b.default.createElement(b.default.Fragment,null,b.default.createElement(C.default,{row:t,api:"/news/updateStatusById",status:t.status,finallyCallback:a.loadDataSource}),b.default.createElement(I.default,{row:t,api:"/news/stickById",status:t.stick,finallyCallback:a.loadDataSource}),b.default.createElement(x.default,{row:t,FormWidget:P.default}),b.default.createElement(O.default,{api:"/news/delById",row:t,finallyCallback:a.loadDataSource}))}}],a.config={bordered:!0,size:"small",rowKey:"_id",rowSelection:{onChange:function(e,t){a.setState({selection:t})}}},a.defaultPagination={current:1,pageSize:10,total:0},a.pagination=JSON.parse(JSON.stringify(a.defaultPagination)),a.state={dataSource:[],selection:[]},a.rowPipe=function(e){return e.cnType=k.default.news.typeMap[e.type]||e.status,e.cnStatus=k.default.public.status.audit[e.status]||e.status,e},a.loadDataSource=function(e,t){var l=(0,g.default)(a),n=l.pagination,r=l.searchForm,u=a.props.dispatch;e=e||n.current,t=t||n.pageSize;var o=(0,f.default)({page:e,limit:t},r.getFieldsValue());u({type:"news/list",payload:o}).then(function(l){if(200===l.status){l=l.data;var r=l.docs.map(a.rowPipe);n.current=e,n.pageSize=t,n.total=l.total,a.setState({dataSource:r})}})},a.handleSearchFormChange=function(){var e=(0,g.default)(a),t=e.defaultPagination;a.loadDataSource(t.current,t.pageSize)},a.handleUploadTplFile=function(e){if("done"===e.file.status){var t=(0,g.default)(a),l=t.defaultPagination;a.loadDataSource(l.current,l.pageSize)}},a.renderBatchOperatorBar=function(){return null},a}return(0,v.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){this.loadDataSource()}},{key:"render",value:function(){var e=this,t=this.columns,a=this.config,l=this.pagination,f=this.state,s=f.dataSource,p=f.selection;return b.default.createElement(n.default,{className:"page__list"},b.default.createElement(B.default,{wrappedComponentRef:function(t){return e.searchForm=t},onChange:this.handleSearchFormChange},function(e){return b.default.createElement(b.default.Fragment,null,b.default.createElement(w.default.Item,{label:"\u6807\u9898"},e.getFieldDecorator("keyWords")(b.default.createElement(c.default,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"}))),b.default.createElement(w.default.Item,{label:"\u7c7b\u578b"},e.getFieldDecorator("type",{initialValue:0})(b.default.createElement(i.default,{placeholder:"\u8bf7\u9009\u62e9\u7c7b\u578b",className:"w160px"},k.default.news.type.map(function(e){return b.default.createElement(i.default.Option,{key:e.value,value:e.value},e.label)})))))}),b.default.createElement("div",{className:"operator-bar"},b.default.createElement(z.default,{to:"Form"}," \u6dfb\u52a0\u65b0\u95fb "),b.default.createElement("span",null,"\u2003"),b.default.createElement(o.default,{showUploadList:!1,name:"file",action:"/news/importExcel",onChange:this.handleUploadTplFile},b.default.createElement(d.default,{type:"primary"},"\u5bfc\u5165\u65b0\u95fb")),p.length>0&&this.renderBatchOperatorBar()),b.default.createElement(r.default,(0,u.default)({columns:t,dataSource:s},a,{pagination:l,onChange:function(t){return e.loadDataSource(t.current,t.pageSize)}})))}}]),t}(b.default.Component),E=F))||E)||E),M=N;t.default=M},mvGP:function(e,t,a){}}]);