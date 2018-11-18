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
## Server URL
1. 也可用變數(variable)來表示，但就是要在底下特別註明variable的值與說明
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
## Paths
1. are endpoints (resources), such as /users or /reports/summary/, that your API exposes, and operations are the HTTP methods used to manipulate these paths, such as **GET**, **POST** or **DELETE**.
- Paths may have an optional short summary and a longer description for documentation purposes
```yaml
paths:
  /test:
    get:
      summary: this is test
      description: this is a basci swagger test
```
2. path parameters: 路徑變數, OpenAPI 3.0 supports operation parameters passed via path, query string, headers, and cookies. You can also define the request body for operations that transmit data to the server, such as POST, PUT and PATCH.
> /test/{id}
```yaml
paths:
  /test/{id}:
    get:
      tags:
        - test
      summary: this is a test
      description: this is a **complete** test
      parameters:
        - name: id
          in: path
          description: test id
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
    
    post:
      tags:
        - test
      summary:
      description:
      
    
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
      required:
        - id
        - name
    
```
3. Query String in Paths
> GET /users?role=value
```yaml
paths:
  /users:
    get:
      parameters:
        - in: query
          name: role
          schema:
            type: string
            enum: [user, poweruser, admin]
          required: true
```
4. Deprecated Operations: 用來顯示不再使用之路徑方法
```yaml
/pet/tag:
  get:
    deprecated: true
```
---
## Parameters
1. 參數定義在operation及path當中，可以描述
- 參數名稱
- location(in): path or query and so on
- 參數型別: 可以用schema or content
- 其他屬性: description or required
```yaml
paths:
  /users/{userId}:
    get:
      summary:
      parameters:
        - in: path /*描述每個變數前因為parameters本身為個陣列，所以前面都要加-*/
          name: userId /* need to same as {userId}*/
          schema:
            type: string
          required: true
          description: 
```
2. Each path parameter must be substituted with an actual value when the client makes an API call. In OpenAPI, a path parameter is defined using in: path. The parameter name must be the same as specified in the path. Also remember to add required: true, because path parameters are always required.
3. path parameters傳進來的參數能是多個的，如x=1;y=2;z=3
4. query parameters: use in: query
> GET /users?offset=100&limit=80
```yaml
paths:
  /users:
    get:
      parameters:
        - in: query
          name: offset
          schema:
            type: integer
          description:
        - in: query
          name: limit
          schema:
            type: integer
          description:
```
---
# tags
1.  Swagger UI uses tags to group the displayed operations
