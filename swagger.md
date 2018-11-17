# Swagger spec tutorial 
1. ref: (https://swagger.io/docs/specification/about/) 
2. OpenAPI規格就是來描述REST APIs的API描述
  - 可用的路由及操作方法
  ```
  GET /users
  POST /users
  ```
  - 輸入輸出的參數
  - 認證方法
  - 聯絡資訊、license、其他重要資訊
  - 可以用**YAML**或**JSON**編寫
> OpenAPI spec is an API description format for REST APIs.

3. swagger是一套open-source工具，同時遵照著OpenAPI規格來做開發
- Swagger Editor -線上編輯swagger的網頁
- Swagger UI - 讓後端程式render的一個前端API互動頁面
- Swagger Codegen - 生成server及client會用的libraries

---
# Basic Structure
```yaml
openapi: 3.0.0
info:
  title: Sample API
  description: Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.
  version: 0.1.9 or 2018-11-16
  contact:
    name: YC
    url: www.google.com.tw
    email: xxx@gmail.com
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0.html
    
servers:
  - url: http://api.example.com/v1 // base url
    description: Optional server description, e.g. Main (production) server
  - url: http://staging-api.example.com
    description: Optional server description, e.g. Internal staging server for testing
paths:
  /users:
    get:
      summary: Returns a list of users.
      description: Optional extended description in CommonMark or HTML.
      responses:
        '200':    # status code
          description: A JSON array of user names
          content:
            application/json:
              schema: 
                type: array
                items: 
                  type: string
```
# 重要說明
1. All API endpoints are relative to the base URL. assuming the base URL of https://api.example.com/v1, the /users endpoint refers to https://api.example.com/v1/users.
2. server url也可用變數(variable)來表示，但就是要在底下特別註明variable的值與說明
```yaml
servers:
  - url: https://{customerId}.saas-app.com:{port}/v2
    variables:
      customerId:
        default: demo
        description: .........
      port:
        enum:
          - '443'
          - '8443'
        default: '443'
```

---
# how to install & use swagger in express 
1. npm install swagger-ui-express --save
2. npm install yamljs --save // if you want swagger to accpet yaml file not json
```javascript
let express = require('express');
let app = express();
let swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs'); // accpet yaml file
const swaggerDocument =  YAML.load('./xxx.yaml');

app.use('/路徑', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```
# how to write swagger doc in yaml format
```yaml
openapi: 3.0.0
info:
  title: test swagger appearance
  description: a basic swagger doc for telling caller how to use API
  version: 1.0.0

servers:
  - uri: http://localhost:3000

paths:
  /api:
    get:
      tags:
        - name of this route
      summary: what does this api do
      response:
        200:
          description: "OK"
        404:
          description: "Not found"
          
  /api/:id:
    get:
      tags:
        - name of this route
      summary: what does this api do
      response:
        200:
          description: "OK"
        404:
          description: "Not found"
```        
## after you modify your yaml file, you need to interpret your node file again. Otherwise, the yaml file will not change.

## view of swagger doc
![Image of swaggerDoc](https://github.com/Adam9877/nodejs-express-practice/blob/master/images/swagger.gif)

# ref website
1. https://www.npmjs.com/package/swagger-ui-express
2. swagger editor on line
3. https://swagger.io/docs/specification/describing-parameters/
