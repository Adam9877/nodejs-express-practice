# nodejs-express-practice

## This project uses nodejs, express, and mysql to practice the backend development

It will record the development.
>test markdown  
>...
## project includes 
1. *node.js* 
2. *express.js* 
3. *monogDB* 

```javascript
var express = require('express');
var app = express();
```

## After learning, you could have the ability to build your own app.

##Let's started
###2018/11/4
1. 安裝Node.js
2. 使用命列介面
  1. Mac 終端機
  2. Windows 命令提示字元
3. 操作目前的工作資料夾
  1. 切換磁碟機 磁碟機代號:
  2. 切換資料夾 cd 資料夾路徑
    - 回到上一層 cd ..
    - 進入下一層 cd 資料夾的名稱
4. 建立專案資料夾
5. 初始化 Node 專案: 建立專案描述檔 (package.json)
  - npm init
6. 使用 node 執行 JavaScript 程式
  - node 程式檔案名稱
7. 使用 npm 套件管理工具
  - 安裝套件
     - npm install 套件名稱
     - npm uninstall 套件名稱
  - 安裝 express 伺服器程式套件
     - npm install express --save (--save才會存在專案描述檔中)
8. 使用 require(套件名稱) 載入套件=> node.js專屬
```javascript
let express = require("express");
```
建立 application 物件
```javascript
let app = express();
```
網址的組成 http://主機名稱/路徑
處理連線路徑 /test
```javascript
app.get("/test", function(req, res){
	res.send("Server <u>is running...</u><script>alert('Hello');</script>");
});
```
啟動伺服器在本機測試用的網址 http://localhost:3000/
```javascript
app.listen(3000, function(req, res){
	//res.send("test");
	console.log("server started");
});
```
#Node.js quickly tutorial
- module.exports，就是宣告，這個登入物件，是一個modules，可以讓任何程式使用require調用這個模組，使用裡面的物件，方法及變數
- 我們只有在自創module時，require() 裡要寫清楚檔案path，如果是原生模組或是npm時，則不需要
- Express 的 middleware 功能可以讓請求（request）在被處理之前，先執行一些前置作業，例如檢查使用者是否有登入或是紀錄一些使用者的瀏覽資料等等，凡是需要在實際處理請求之前要做的動作，都可以使用 middleware 來處理
- 在使用 middleware 時必須要注意他的放置位置必須要在 routes 之前，程式在執行的時候會依據 middleware 與 routes 的先後順序來執行，如果不小心將 middleware 放在 routes 之後，那麼在 routes 處理完請求之後就會結束處理的流程，這樣 middleware 就根本不會執行

#How to call c code using Node.js

待續

#jade template
- npm install jade --save
```jade
app.set("view engine", "jade");
app.set("views", "自訂放jade檔資料夾");
app.get("/", function(req, res){
	res.render("samplejade", {items: data});
});
```

#MVC
- Model: 做資料庫，接收controller的request處理後再回應給controller
- Controller: 做路由繞送
- View: 畫面的呈現(html、jade、Angularjs)

#swagger-ui implement
- npm install swagger-ui-express --save
```javascript
var swaggerUi = require("swagger-ui-express");
var swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```
註: 線上swagger編輯 -> swagger editor

#Mongodb quickly tutorial
- install mongodb in MS/Linux/Mac
- mongod --dbpath d:\dbfolder\data\db
- mongo shell -> mongo (已經加入環境變數)
- CRUD指令 (Create, Read, Update, Delete)
	- db.CollectionName.find() //打it再按enter才能show接著的20筆
	- db.CollectionName.insert()
	- db.CollectionName.update()
	- db.CollectionName.remove()

#Mongoose quickly tutorial
- Nodejs介接MongoDB的第三方模組
```javascript
./lib/db.js
var mongoose = require("mongoose");
var Schemd = mongoose.Schema;
var Blog = new Schema({
 Username: String,
 Article: String,
 CreateDate: Date,
 MessageID: Schema.Types.ObjectId
});
mongoose.model("Blog", Blog); //Blog為collection
mongoose.connect("mongodb://localhost/blog");

./routes/user.js
var mongoose = require("mongoose");
var Blog = mongoose.model("Blog");
var Comment = mongoose.model("Comment");

Blog.find({Username: req.session.name}, function(err, blogs, count){
	res.render();
});
Blog.remove({_id: req.params.id}, function(err){
	if(err) throw err;
});
```

#Markdown

待續

#OpenStack

待續

#VNF deployment to GCP (Google Cloud Platform)

待續
