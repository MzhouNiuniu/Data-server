define({ "api": [
  {
    "type": "get",
    "url": "/selectData/getSelectData",
    "title": "获取不需要入参的下拉框数据",
    "name": "getSelectData",
    "group": "SelectData",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "customsHasNoCompanyName",
            "description": "<p>不带企业名称的客户列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "customsHasCompanyName",
            "description": "<p>带企业名称的客户列表.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "provinceList",
            "description": "<p>省份列表.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/selectData.js",
    "groupTitle": "SelectData"
  },
  {
    "type": "get",
    "url": "/selectData/getSelectDataByParams",
    "title": "获取城市下拉框",
    "name": "getSelectDataByParams",
    "group": "SelectData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "all",
            "description": "<p>是否显示全部.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>城市代码.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/selectData.js",
    "groupTitle": "SelectData"
  },
  {
    "group": "goods",
    "name": "goodList",
    "type": "get",
    "url": "/goodsList",
    "title": "优质好货列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cityCode",
            "description": "<p>城市code.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>模糊关键字查询</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "isSpotGoods",
            "description": "<p>分类</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>当前页面</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页面尺寸</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/goods.js",
    "groupTitle": "goods"
  },
  {
    "group": "goods",
    "name": "goodsDetail",
    "type": "get",
    "url": "/goodsDetail",
    "title": "优质好货详情",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "goodsId",
            "description": "<p>订单id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/goods.js",
    "groupTitle": "goods"
  },
  {
    "type": "get",
    "url": "/home/getHomeData",
    "title": "获取首页数据",
    "name": "getHomeData",
    "group": "home",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "goodsNum",
            "description": "<p>优质好货数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "orderNum",
            "description": "<p>订单推荐数量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/home.js",
    "groupTitle": "home"
  },
  {
    "type": "get",
    "url": "/loginByCode",
    "title": "验证码登陆",
    "name": "loginByCode",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>手机验证码.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "login"
  },
  {
    "type": "get",
    "url": "/sendMessage",
    "title": "获取登陆验证码",
    "name": "sendMessage",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/goods.js",
    "groupTitle": "login"
  },
  {
    "type": "get",
    "url": "/sendMessage",
    "title": "获取登陆验证码",
    "name": "sendMessage",
    "group": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone",
            "description": "<p>手机号.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "login"
  },
  {
    "type": "post",
    "url": "/order/applyInsteadCustomer",
    "title": "代客报名",
    "name": "applyInsteadCustomer",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactMan",
            "description": "<p>联系人（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactPhone",
            "description": "<p>联系电话（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "isSpot",
            "description": "<p>是否现货0否1是（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productAddr",
            "description": "<p>产地详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCity",
            "description": "<p>产地市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>产品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productPrice",
            "description": "<p>商品单价（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productPriceUnit",
            "description": "<p>商品单价单位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productProvince",
            "description": "<p>产地省</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "supplierAccount",
            "description": "<p>供应商账号（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "supplyQuantity",
            "description": "<p>供货量（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "supplyQuantityUnit",
            "description": "<p>供货量单位（必填）</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/order/checkOrder",
    "title": "审核订单或企业",
    "name": "checkOrder",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "checkResult",
            "description": "<p>审核结果:1通过，0不通过.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单或企业id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型:buyRequirementOrder求购订单，sellingProduct出售商品，company企业</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/order/getOrderDetail",
    "title": "获取订单获企业详情",
    "name": "getOrderDetail",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>订单或企业id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型：order订单，goods商品，company企业，childOrder求购子订单，sellingOrder出售交易中订单.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleType",
            "description": "<p>身份信息:采购商buyer，供应商supplier（type为childOrder和sellingOrder时用到）</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "order"
  },
  {
    "type": "get",
    "url": "/order/getOrderList",
    "title": "获取订单或企业列表",
    "name": "getOrderList",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示数量.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页数.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>订单类型:awaitPreviewOrder待审核订单，awaitDealOrder待处理订单，endingOrder已结束订单，awaitPreviewCompany待审核企业，order求购订单.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productClass",
            "description": "<p>产品分类（type为order时用到）.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productionArea",
            "description": "<p>产品地区编码（type为order时用到）.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchContent",
            "description": "<p>搜索条件（type为order时用到）.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/order/releaseRequirementInsteadCustomer",
    "title": "代客发布订单",
    "name": "releaseRequirementInsteadCustomer",
    "group": "order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "businessAccount",
            "description": "<p>业务员账号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "buyAmount",
            "description": "<p>购买数量（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buyAmountUnit",
            "description": "<p>购买数量单位（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buyDeadline",
            "description": "<p>采购截止时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyName",
            "description": "<p>公司名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactMan",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactPhone",
            "description": "<p>联系人电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryAddr",
            "description": "<p>交货详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryCity",
            "description": "<p>交货地址市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDeadline",
            "description": "<p>交货截止时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryDistrict",
            "description": "<p>交货地址区</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryProvince",
            "description": "<p>交货地址省</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "expectPrice",
            "description": "<p>期望单价</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expectPriceUnit",
            "description": "<p>期望单价单位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "generalizeAccount",
            "description": "<p>居间人账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memberAccount",
            "description": "<p>会员账号（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "predictAmount",
            "description": "<p>预计供货量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "productClass",
            "description": "<p>商品分类（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>商品名称（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productStandard",
            "description": "<p>产品标准</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "productionPlace",
            "description": "<p>产地 [ { city: String,//产地市 province: String,//产地省 regionCode: String,//产地省编码 requirementNumber: String,//买货需求单编号 } ],</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "regionCode",
            "description": "<p>交货地区编码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "order"
  },
  {
    "type": "post",
    "url": "/userCenter/addCustomer",
    "title": "添加客户",
    "name": "addCustomer",
    "group": "userCenter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/userCenter.js",
    "groupTitle": "userCenter"
  },
  {
    "type": "get",
    "url": "/userCenter/getCompanyInfo",
    "title": "企业认证信息",
    "name": "getCompanyInfo",
    "group": "userCenter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memberAccount",
            "description": "<p>客户账户.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/userCenter.js",
    "groupTitle": "userCenter"
  },
  {
    "type": "get",
    "url": "/userCenter/getCustomOrPerformanceList",
    "title": "获取我的顾客和我的业绩列表",
    "name": "getCustomOrPerformanceList",
    "group": "userCenter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型:performance我的业绩，customer我的顾客.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示数量（顾客列表用到）.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页码（顾客列表用到）.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>日期（业绩列表用到）.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/userCenter.js",
    "groupTitle": "userCenter"
  },
  {
    "type": "get",
    "url": "/userCenter/getCustomerList",
    "title": "获取客户详情",
    "name": "getCustomerList",
    "group": "userCenter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型:customerInfoBuyList客户详情（求购列表），customerInfoSellList客户详情（出售列表）.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页显示数量.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageNum",
            "description": "<p>页码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memberAccount",
            "description": "<p>客户账户.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/userCenter.js",
    "groupTitle": "userCenter"
  }
] });
