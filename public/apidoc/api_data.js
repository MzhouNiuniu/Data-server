define({ "api": [
  {
    "group": "User",
    "name": "__",
    "type": "post",
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
        "url": "http://localhost:3000/user/login"
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
        "url": "http://localhost:3001/user/reg"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/user.js",
    "groupTitle": "User"
  }
] });
