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

------------------##Let's started-------------------
###2018/11/4
1. 安裝Node.js
2. 使用命列介面
  2.1 Mac 終端機
  2.2 Windows 命令提示字元
3. 操作目前的工作資料夾
  3.1 切換磁碟機 磁碟機代號:
  3.2 切換資料夾 cd 資料夾路徑
      回到上一層 cd ..
      進入下一層 cd 資料夾的名稱
4. 建立專案資料夾
5. 初始化 Node 專案: 建立專案描述檔 (package.json)
  - npm init
6. 使用 node 執行 JavaScript 程式
  - node 程式檔案名稱
7. 使用 npm 套件管理工具
  - 安裝套件
      npm install 套件名稱
      npm uninstall 套件名稱
  - 安裝 express 伺服器程式套件
      npm install express --save (--save才會存在專案描述檔中)
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
