define({ "api": [
  {
    "group": "About",
    "type": "get",
    "url": "/about/getDetails",
    "title": "获取详情",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/about/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/about.js",
    "groupTitle": "About",
    "name": "GetAboutGetdetails"
  },
  {
    "group": "About",
    "type": "post",
    "url": "/about/publish",
    "title": "发布  修改同个接口",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "info",
            "description": "<p>平台介绍  [{company:公司名,content：详细信息}] 可以多条按照这个格式来提交</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "aptitude",
            "description": "<p>资质文件  [图片1，图片2]</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/about/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/about.js",
    "groupTitle": "About",
    "name": "PostAboutPublish"
  },
  {
    "group": "BasicData",
    "type": "get",
    "url": "/basicData/getDetails",
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
        "url": "http://192.168.9.105:3000/basicData/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/basicData.js",
    "groupTitle": "BasicData",
    "name": "GetBasicdataGetdetails"
  },
  {
    "group": "BasicData",
    "type": "get",
    "url": "/basicData/getList",
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
        "url": "http://192.168.9.105:3000/basicData/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/basicData.js",
    "groupTitle": "BasicData",
    "name": "GetBasicdataGetlist"
  },
  {
    "group": "BasicData",
    "type": "post",
    "url": "/basicData/delById",
    "title": "删除",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/basicData/delById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/basicData.js",
    "groupTitle": "BasicData",
    "name": "PostBasicdataDelbyid"
  },
  {
    "group": "BasicData",
    "type": "post",
    "url": "/basicData/publish",
    "title": "发布",
    "parameter": {
      "fields": {
        "Parameter": [
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
            "field": "year",
            "description": "<p>年</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "experience",
            "description": "<p>辖区名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "GDP",
            "description": "<p>GDP</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addFDP",
            "description": "<p>GDP增速</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "income",
            "description": "<p>收入</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addIncome",
            "description": "<p>增长收入</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "balance",
            "description": "<p>存续债卷余额</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/basicData/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/basicData.js",
    "groupTitle": "BasicData",
    "name": "PostBasicdataPublish"
  },
  {
    "group": "BasicData",
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
    "type": "post",
    "url": "/basicData/updateById",
    "title": "更新某条",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/basicData/updateById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/basicData.js",
    "groupTitle": "BasicData",
    "name": "PostBasicdataUpdatebyid"
  },
  {
    "group": "Collaborate",
    "type": "get",
    "url": "/collaborate/getDetails",
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
        "url": "http://192.168.9.105:3000/collaborate/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/collaborate.js",
    "groupTitle": "Collaborate",
    "name": "GetCollaborateGetdetails"
  },
  {
    "group": "Collaborate",
    "type": "get",
    "url": "/collaborate/getList",
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
        "url": "http://192.168.9.105:3000/collaborate/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/collaborate.js",
    "groupTitle": "Collaborate",
    "name": "GetCollaborateGetlist"
  },
  {
    "group": "Collaborate",
    "type": "post",
    "url": "/collaborate/delById",
    "title": "删除",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/collaborate/delById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/collaborate.js",
    "groupTitle": "Collaborate",
    "name": "PostCollaborateDelbyid"
  },
  {
    "group": "Collaborate",
    "type": "post",
    "url": "/collaborate/publish",
    "title": "发布",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>项目类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accessory",
            "description": "<p>附件  这里存一个字符串 文件服务正在建</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tcompany",
            "description": "<p>推广公司</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tcontact",
            "description": "<p>推广联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tphotos",
            "description": "<p>推广二维码</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/collaborate/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/collaborate.js",
    "groupTitle": "Collaborate",
    "name": "PostCollaboratePublish"
  },
  {
    "group": "Collaborate",
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
            "field": "stick",
            "description": "<p>0未置顶  1置顶</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/collaborate/stickById",
    "title": "置顶",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/collaborate/stickById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/collaborate.js",
    "groupTitle": "Collaborate",
    "name": "PostCollaborateStickbyid"
  },
  {
    "group": "Collaborate",
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
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accessory",
            "description": "<p>附件  这里存一个字符串 文件服务正在建</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tcompany",
            "description": "<p>推广公司</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tcontact",
            "description": "<p>推广联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tphotos",
            "description": "<p>推广二维码</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/collaborate/updateById",
    "title": "更新某条",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/collaborate/updateById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/collaborate.js",
    "groupTitle": "Collaborate",
    "name": "PostCollaborateUpdatebyid"
  },
  {
    "group": "Collaborate",
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
            "field": "message",
            "description": "<p>拒绝信息</p>"
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
    "url": "/collaborate/updateStatusById",
    "title": "更新某条的状态（审核）",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/collaborate/updateStatusById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/collaborate.js",
    "groupTitle": "Collaborate",
    "name": "PostCollaborateUpdatestatusbyid"
  },
  {
    "group": "CompanyData",
    "type": "get",
    "url": "/companyData/getDetails",
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
        "url": "http://192.168.9.105:3000/companyData/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/companyData.js",
    "groupTitle": "CompanyData",
    "name": "GetCompanydataGetdetails"
  },
  {
    "group": "CompanyData",
    "type": "get",
    "url": "/companyData/getList",
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
        "url": "http://192.168.9.105:3000/companyData/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/companyData.js",
    "groupTitle": "CompanyData",
    "name": "GetCompanydataGetlist"
  },
  {
    "group": "CompanyData",
    "type": "post",
    "url": "/companyData/delById",
    "title": "删除",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/companyData/delById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/companyData.js",
    "groupTitle": "CompanyData",
    "name": "PostCompanydataDelbyid"
  },
  {
    "group": "CompanyData",
    "type": "post",
    "url": "/companyData/publish",
    "title": "发布",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/companyData/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/companyData.js",
    "groupTitle": "CompanyData",
    "name": "PostCompanydataPublish"
  },
  {
    "group": "CompanyData",
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
    "type": "post",
    "url": "/companyData/updateById",
    "title": "更新某条",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/companyData/updateById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/companyData.js",
    "groupTitle": "CompanyData",
    "name": "PostCompanydataUpdatebyid"
  },
  {
    "group": "CompanyData",
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
            "field": "message",
            "description": "<p>拒绝信息</p>"
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
    "url": "/companyData/updateStatusById",
    "title": "更新某条的状态（审核）",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/companyData/updateStatusById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/companyData.js",
    "groupTitle": "CompanyData",
    "name": "PostCompanydataUpdatestatusbyid"
  },
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
            "field": "direction",
            "description": "<p>研究方向</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "current",
            "description": "<p>现状</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "experience",
            "description": "<p>经历</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "achievement",
            "description": "<p>科研成果</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photos",
            "description": "<p>头像</p>"
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
            "field": "stick",
            "description": "<p>0未置顶  1置顶</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/expert/stickById",
    "title": "置顶",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/expert/stickById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/expert.js",
    "groupTitle": "Expert",
    "name": "PostExpertStickbyid"
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
            "field": "current",
            "description": "<p>现状</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "experience",
            "description": "<p>经历</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "achievement",
            "description": "<p>科研成果</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photos",
            "description": "<p>头像</p>"
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
            "field": "message",
            "description": "<p>拒绝信息</p>"
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
    "group": "IndexConfig",
    "type": "get",
    "url": "/indexConfig/getDetails",
    "title": "获取详情",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/indexConfig/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/indexConfig.js",
    "groupTitle": "IndexConfig",
    "name": "GetIndexconfigGetdetails"
  },
  {
    "group": "IndexConfig",
    "type": "post",
    "url": "/indexConfig/publish",
    "title": "发布  修改同个接口",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "banner",
            "description": "<p>平台介绍  [{url:xxxx,photos：xxx}] 可以多条按照这个格式来提交</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/indexConfig/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/indexConfig.js",
    "groupTitle": "IndexConfig",
    "name": "PostIndexconfigPublish"
  },
  {
    "group": "Magazine",
    "type": "get",
    "url": "/magazine/getDetails",
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
        "url": "http://192.168.9.105:3000/magazine/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/magazine.js",
    "groupTitle": "Magazine",
    "name": "GetMagazineGetdetails"
  },
  {
    "group": "Magazine",
    "type": "get",
    "url": "/magazine/getList",
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
        "url": "http://192.168.9.105:3000/magazine/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/magazine.js",
    "groupTitle": "Magazine",
    "name": "GetMagazineGetlist"
  },
  {
    "group": "Magazine",
    "type": "post",
    "url": "/magazine/delById",
    "title": "删除",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/magazine/delById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/magazine.js",
    "groupTitle": "Magazine",
    "name": "PostMagazineDelbyid"
  },
  {
    "group": "Magazine",
    "type": "post",
    "url": "/magazine/publish",
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
            "field": "url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photos",
            "description": "<p>头像</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/magazine/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/magazine.js",
    "groupTitle": "Magazine",
    "name": "PostMagazinePublish"
  },
  {
    "group": "Magazine",
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
            "field": "stick",
            "description": "<p>0未置顶  1置顶</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/magazine/stickById",
    "title": "置顶",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/magazine/stickById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/magazine.js",
    "groupTitle": "Magazine",
    "name": "PostMagazineStickbyid"
  },
  {
    "group": "Magazine",
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
            "field": "url",
            "description": "<p>链接</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "photos",
            "description": "<p>头像</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/magazine/updateById",
    "title": "更新某条",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/magazine/updateById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/magazine.js",
    "groupTitle": "Magazine",
    "name": "PostMagazineUpdatebyid"
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
    "url": "/news/getIndex",
    "title": "获取新闻首页信息",
    "version": "0.0.0",
    "filename": "src/controller/news.js",
    "groupTitle": "News",
    "name": "GetNewsGetindex",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/news/getIndex"
      }
    ]
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>新闻类型</p>"
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "source",
            "description": "<p>来源</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>0  行业动态  1 智库新闻  2 智库动态 3 项目动态</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cover",
            "description": "<p>封面</p>"
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
            "field": "stick",
            "description": "<p>0未置顶  1置顶</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/news/stickById",
    "title": "置顶",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/news/stickById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/news.js",
    "groupTitle": "News",
    "name": "PostNewsStickbyid"
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
            "field": "message",
            "description": "<p>拒绝信息</p>"
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
            "field": "scope",
            "description": "<p>经营范围</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "speciality",
            "description": "<p>专业领域</p>"
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
            "field": "stick",
            "description": "<p>0未置顶  1置顶</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/organization/stickById",
    "title": "置顶",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/organization/stickById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/organizetion.js",
    "groupTitle": "Organization",
    "name": "PostOrganizationStickbyid"
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
            "field": "address",
            "description": "<p>详细地址</p>"
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
            "field": "message",
            "description": "<p>拒绝信息</p>"
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
    "group": "Oss",
    "type": "get",
    "url": "/Oss/download",
    "title": "下载文件",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>文件id</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/Oss/download"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/oss.js",
    "groupTitle": "Oss",
    "name": "GetOssDownload"
  },
  {
    "group": "Oss",
    "type": "post",
    "url": "/Oss/upload",
    "title": "上传文件",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/Oss/upload"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/oss.js",
    "groupTitle": "Oss",
    "name": "PostOssUpload"
  },
  {
    "group": "ResearchReport",
    "type": "get",
    "url": "/researchReport/getDetails",
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
        "url": "http://192.168.9.105:3000/researchReport/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchReport.js",
    "groupTitle": "ResearchReport",
    "name": "GetResearchreportGetdetails"
  },
  {
    "group": "ResearchReport",
    "type": "get",
    "url": "/researchReport/getList",
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>//0 专题报告  1定期报告</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchReport/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchReport.js",
    "groupTitle": "ResearchReport",
    "name": "GetResearchreportGetlist"
  },
  {
    "group": "ResearchReport",
    "type": "post",
    "url": "/researchReport/delById",
    "title": "删除",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchReport/delById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchReport.js",
    "groupTitle": "ResearchReport",
    "name": "PostResearchreportDelbyid"
  },
  {
    "group": "ResearchReport",
    "type": "post",
    "url": "/researchReport/publish",
    "title": "发布",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>文字名字</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "human",
            "description": "<p>研究人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "organization",
            "description": "<p>机构</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accessory",
            "description": "<p>附件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cover",
            "description": "<p>文号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reference",
            "description": "<p>封面</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>//0 专题报告  1定期报告</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "brief",
            "description": "<p>简介</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchReport/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchReport.js",
    "groupTitle": "ResearchReport",
    "name": "PostResearchreportPublish"
  },
  {
    "group": "ResearchReport",
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
            "field": "stick",
            "description": "<p>0未置顶  1置顶</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/researchReport/stickById",
    "title": "置顶",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchReport/stickById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchReport.js",
    "groupTitle": "ResearchReport",
    "name": "PostResearchreportStickbyid"
  },
  {
    "group": "ResearchReport",
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
            "description": "<p>文字名字</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "human",
            "description": "<p>研究人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "organization",
            "description": "<p>机构</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accessory",
            "description": "<p>附件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cover",
            "description": "<p>文号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reference",
            "description": "<p>封面</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/researchReport/updateById",
    "title": "更新某条",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchReport/updateById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchReport.js",
    "groupTitle": "ResearchReport",
    "name": "PostResearchreportUpdatebyid"
  },
  {
    "group": "ResearchReport",
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
            "field": "message",
            "description": "<p>拒绝信息</p>"
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
    "url": "/researchReport/updateStatusById",
    "title": "更新某条的状态（审核）",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchReport/updateStatusById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchReport.js",
    "groupTitle": "ResearchReport",
    "name": "PostResearchreportUpdatestatusbyid"
  },
  {
    "group": "ResearchScriptures",
    "type": "get",
    "url": "/researchScriptures/getDetails",
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
        "url": "http://192.168.9.105:3000/researchScriptures/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchScriptures.js",
    "groupTitle": "ResearchScriptures",
    "name": "GetResearchscripturesGetdetails"
  },
  {
    "group": "ResearchScriptures",
    "type": "get",
    "url": "/researchScriptures/getList",
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
        "url": "http://192.168.9.105:3000/researchScriptures/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchScriptures.js",
    "groupTitle": "ResearchScriptures",
    "name": "GetResearchscripturesGetlist"
  },
  {
    "group": "ResearchScriptures",
    "type": "post",
    "url": "/researchScriptures/delById",
    "title": "删除",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchScriptures/delById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchScriptures.js",
    "groupTitle": "ResearchScriptures",
    "name": "PostResearchscripturesDelbyid"
  },
  {
    "group": "ResearchScriptures",
    "type": "post",
    "url": "/researchScriptures/publish",
    "title": "发布",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>文字名字</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "brief",
            "description": "<p>简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cover",
            "description": "<p>封面</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchScriptures/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchScriptures.js",
    "groupTitle": "ResearchScriptures",
    "name": "PostResearchscripturesPublish"
  },
  {
    "group": "ResearchScriptures",
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
            "field": "stick",
            "description": "<p>0未置顶  1置顶</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/researchScriptures/stickById",
    "title": "置顶",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchScriptures/stickById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchScriptures.js",
    "groupTitle": "ResearchScriptures",
    "name": "PostResearchscripturesStickbyid"
  },
  {
    "group": "ResearchScriptures",
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
            "description": "<p>文字名字</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "brief",
            "description": "<p>简介</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "cover",
            "description": "<p>封面</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/researchScriptures/updateById",
    "title": "更新某条",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchScriptures/updateById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchScriptures.js",
    "groupTitle": "ResearchScriptures",
    "name": "PostResearchscripturesUpdatebyid"
  },
  {
    "group": "ResearchScriptures",
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
            "field": "message",
            "description": "<p>拒绝信息</p>"
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
    "url": "/researchScriptures/updateStatusById",
    "title": "更新某条的状态（审核）",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/researchScriptures/updateStatusById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/researchScriptures.js",
    "groupTitle": "ResearchScriptures",
    "name": "PostResearchscripturesUpdatestatusbyid"
  },
  {
    "group": "Statute",
    "type": "get",
    "url": "/statute/getDetails",
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
        "url": "http://192.168.9.105:3000/statute/getDetails"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/statute.js",
    "groupTitle": "Statute",
    "name": "GetStatuteGetdetails"
  },
  {
    "group": "Statute",
    "type": "get",
    "url": "/statute/getList",
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>0  政策法规  1 指南标准  2 国家性规范文件 3 地方规范文件 4 部门规范文件</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/statute/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/statute.js",
    "groupTitle": "Statute",
    "name": "GetStatuteGetlist"
  },
  {
    "group": "Statute",
    "type": "post",
    "url": "/statute/delById",
    "title": "删除",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/statute/delById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/statute.js",
    "groupTitle": "Statute",
    "name": "PostStatuteDelbyid"
  },
  {
    "group": "Statute",
    "type": "post",
    "url": "/statute/publish",
    "title": "发布",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>文字名字</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reference",
            "description": "<p>文号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>0  政策法规  1 指南标准  2 国家性规范文件 3 地方规范文件 4 部门规范文件</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/statute/publish"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/statute.js",
    "groupTitle": "Statute",
    "name": "PostStatutePublish"
  },
  {
    "group": "Statute",
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
            "field": "stick",
            "description": "<p>0未置顶  1置顶</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/statute/stickById",
    "title": "置顶",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/statute/stickById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/statute.js",
    "groupTitle": "Statute",
    "name": "PostStatuteStickbyid"
  },
  {
    "group": "Statute",
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
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accessory",
            "description": "<p>附件  这里存一个字符串 文件服务正在建</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tcompany",
            "description": "<p>推广公司</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tcontact",
            "description": "<p>推广联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Tphotos",
            "description": "<p>推广二维码</p>"
          }
        ]
      }
    },
    "type": "post",
    "url": "/statute/updateById",
    "title": "更新某条",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/statute/updateById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/statute.js",
    "groupTitle": "Statute",
    "name": "PostStatuteUpdatebyid"
  },
  {
    "group": "Statute",
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
            "field": "message",
            "description": "<p>拒绝信息</p>"
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
    "url": "/statute/updateStatusById",
    "title": "更新某条的状态（审核）",
    "sampleRequest": [
      {
        "url": "http://192.168.9.105:3000/statute/updateStatusById"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/statute.js",
    "groupTitle": "Statute",
    "name": "PostStatuteUpdatestatusbyid"
  },
  {
    "group": "User",
    "type": "post",
    "url": "/user/getList",
    "title": "获取用户列表",
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
        "url": "http://192.168.9.105:3000/user/getList"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/user.js",
    "groupTitle": "User",
    "name": "PostUserGetlist"
  },
  {
    "group": "User",
    "type": "post",
    "url": "/user/updateUser",
    "title": "修改密码",
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
