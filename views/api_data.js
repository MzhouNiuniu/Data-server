define({ "api": [
  {
    "group": "Expert",
    "type": "get",
    "url": "/expert/getDetails",
    "title": "获取详情",
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
        "url": "http://192.168.9.105:3000/expert/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/expert.js",
    "groupTitle": "Expert",
    "name": "GetExpertGetdetails"
  },
  {
    "group": "Expert",
    "type": "get",
    "url": "/expert/getList",
    "title": "获取列表",
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
        "url": "http://192.168.9.105:3000/expert/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/expert.js",
    "groupTitle": "Expert",
    "name": "GetExpertGetlist"
  },
  {
    "group": "Expert",
    "type": "post",
    "url": "/expert/delById",
    "title": "删除",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/expert/delById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/expert.js",
    "groupTitle": "Expert",
    "name": "PostExpertDelbyid"
  },
  {
    "group": "Expert",
    "type": "post",
    "url": "/expert/publish",
    "title": "发布",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "education",
            "description": "<p>学历</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "degree",
            "description": "<p>学位</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mailbox",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "experType",
            "description": "<p>专家类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "speciality",
            "description": "<p>擅长领域</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photos",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "languages",
            "description": "<p>语言能力</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "professional",
            "description": "<p>专家技术职称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "registered",
            "description": "<p>注册职业资格</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "achievement",
            "description": "<p>科研成果</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/expert/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/expert.js",
    "groupTitle": "Expert",
    "name": "PostExpertPublish"
  },
  {
    "group": "Expert",
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
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "sex",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "education",
            "description": "<p>学历</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "degree",
            "description": "<p>学位</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mailbox",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "experType",
            "description": "<p>专家类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "speciality",
            "description": "<p>擅长领域</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photos",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "languages",
            "description": "<p>语言能力</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "professional",
            "description": "<p>专家技术职称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "registered",
            "description": "<p>注册职业资格</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "achievement",
            "description": "<p>科研成果</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/expert/updateById",
    "title": "更新某条",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/expert/updateById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/expert.js",
    "groupTitle": "Expert",
    "name": "PostExpertUpdatebyid"
  },
  {
    "group": "Expert",
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
    "url": "/expert/updateStatusById",
    "title": "更新某条的状态（审核）",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/expert/updateStatusById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/expert.js",
    "groupTitle": "Expert",
    "name": "PostExpertUpdatestatusbyid"
  },
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
    "group": "News_______importExcel___________________apiParam__string__file_form_data_key_file_value_excel_______api__post___news_importExcel________",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/controller/expert.js",
    "groupTitle": "News_______importExcel___________________apiParam__string__file_form_data_key_file_value_excel_______api__post___news_importExcel________",
    "name": ""
  },
  {
    "group": "Organization",
    "type": "get",
    "url": "/organization/getDetails",
    "title": "获取详情",
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
        "url": "http://192.168.9.105:3000/organization/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/organizetion.js",
    "groupTitle": "Organization",
    "name": "GetOrganizationGetdetails"
  },
  {
    "group": "Organization",
    "type": "get",
    "url": "/organization/getList",
    "title": "获取列表",
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
        "url": "http://192.168.9.105:3000/organization/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/organizetion.js",
    "groupTitle": "Organization",
    "name": "GetOrganizationGetlist"
  },
  {
    "group": "Organization",
    "type": "post",
    "url": "/organization/delById",
    "title": "删除",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/organization/delById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/organizetion.js",
    "groupTitle": "Organization",
    "name": "PostOrganizationDelbyid"
  },
  {
    "group": "Organization",
    "type": "post",
    "url": "/organization/publish",
    "title": "发布",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "district",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>机构网站</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service",
            "description": "<p>服务内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "experience",
            "description": "<p>经验</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "intro",
            "description": "<p>简介</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/expert/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/organizetion.js",
    "groupTitle": "Organization",
    "name": "PostOrganizationPublish"
  },
  {
    "group": "Organization",
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
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "district",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>机构网站</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "service",
            "description": "<p>服务内容</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "experience",
            "description": "<p>经验</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "intro",
            "description": "<p>简介</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/organization/updateById",
    "title": "更新某条",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/organization/updateById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/organizetion.js",
    "groupTitle": "Organization",
    "name": "PostOrganizationUpdatebyid"
  },
  {
    "group": "Organization",
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
    "url": "/organization/updateStatusById",
    "title": "更新某条的状态（审核）",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/organization/updateStatusById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/organizetion.js",
    "groupTitle": "Organization",
    "name": "PostOrganizationUpdatestatusbyid"
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
