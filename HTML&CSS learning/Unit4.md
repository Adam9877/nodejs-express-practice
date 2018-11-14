1. URL(Uniform Resource Locators): 除了指定資源的位置，URL也指出存取資源時所用的協定, 典型的URL，由協定、網域名稱、通向資源的絕對路徑所共同構成
2. HTTP (HyperText Transfer Protocol): 用於網路傳遞超文字文件的方式(一種協定)，是一種請求與回應式的協定，用在網站伺服器與我們的瀏覽器間傳送網頁
- index.html 與 defult.html是預設檔案的兩個例子。如果指定目錄，但沒有指定檔名，網站伺服器將尋找預設檔案以傳回瀏覽器
3. 新增\<a\> attribute title
```html
<a href="www.xxx.com" title="This is xxx website">xxx </a>
```
4. 新增attribute id，只需要在連結末端加入#,後接目標的識別標籤id
```html
<h2 id="test" > xxx </h2>

<a href="index.html#test"> xxx </a>
<a href="#top"> back to top </a>
```
5. 在任何元件中，屬性的順序都不重要
6. 新增attribute target
```html
<a href="../index.html" target="_blank"> xxx </a>
```
