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

# ref website
1. https://www.npmjs.com/package/swagger-ui-express
2. swagger editor on line
3. https://swagger.io/docs/specification/describing-parameters/
