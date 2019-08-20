define({ "api": [
  {
    "group": "News",
    "type": "get",
    "url": "/news/getDetails",
    "title": "获取新闻详情",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/news/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/news.js",
    "groupTitle": "News",
    "name": "GetNewsGetdetails"
  },
  {
    "group": "News",
    "type": "get",
    "url": "/news/getList",
    "title": "获取新闻列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "limit",
            "description": "<p>本页多少条</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>第几页    （现成框架字段忍受一下）</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "keyWords",
            "description": "<p>关键字</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/news/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/news.js",
    "groupTitle": "News",
    "name": "GetNewsGetlist"
  },
  {
    "group": "News",
    "type": "post",
    "url": "/news/delById",
    "title": "删除新闻",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/news/delById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/news.js",
    "groupTitle": "News",
    "name": "PostNewsDelbyid"
  },
  {
    "group": "News",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "file",
            "description": "<p>form-data  key为file  value excel</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/news/importExcel",
    "title": "导入新闻",
    "version": "0.0.0",
    "filename": "src/controller/news.js",
    "groupTitle": "News",
    "name": "PostNewsImportexcel",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/news/importExcel"
      }
    ]
  },
  {
    "group": "News",
    "type": "post",
    "url": "/news/publish",
    "title": "发布新闻",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/news/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/news.js",
    "groupTitle": "News",
    "name": "PostNewsPublish"
  },
  {
    "group": "News",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/news/updateById",
    "title": "更新某条新闻",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/news/updateById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/news.js",
    "groupTitle": "News",
    "name": "PostNewsUpdatebyid"
  },
  {
    "group": "News",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>状态  （0未审核   1通过  2未通过 ）</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/news/updateStatusById",
    "title": "更新某条的状态（审核）",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/news/updateStatusById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/news.js",
    "groupTitle": "News",
    "name": "PostNewsUpdatestatusbyid"
  },
  {
    "group": "User",
    "type": "post",
    "url": "/user/updateUser",
    "title": "新增用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/user/updateUser"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/user.js",
    "groupTitle": "User",
    "name": "PostUserUpdateuser"
  },
  {
    "group": "User",
    "name": "__",
    "type": "get",
    "url": "/user/login",
    "title": "用户登陆",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/user/login"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/user.js",
    "groupTitle": "User"
  },
  {
    "group": "User",
    "name": "____",
    "type": "post",
    "url": "/user/reg",
    "title": "新增用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/user/reg"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/user.js",
    "groupTitle": "User"
  }
] });
