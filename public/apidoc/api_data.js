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
    "url": "/user/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "User"
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
  }
] });
