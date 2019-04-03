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
    "filename": "routes/index.js",
    "groupTitle": "login"
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
            "description": "<p>类型：order订单，company企业.</p>"
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
            "description": "<p>订单类型:awaitPreviewOrder待审核订单，awaitDealOrder待处理订单，endingOrder已结束订单，awaitPreviewCompany待审核企业.</p>"
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
