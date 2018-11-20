# CSS 樣式調整 & box model
```css
body {
  font-size: small;
  font-family: Verdana, Helvetica, Arial, sans-serif;
  line-height: 1.6em;
}

h1, h2 {
  color: #007e7e;
}

h1 {
  font-size: 150%;
}

h2 {
  font-size: 130%;
}
```
1. CSS把每個元件都視為一個方盒: 內容區域、邊距(padding)、邊框(border)、邊界(margin)
2. 邊距想成元件的一部分，至於邊界則是圍繞在元件周圍做為元件與外界的緩衝
3. 如果需要再內容區域周圍留下更多可見空間，請使用邊距；而元件間需要空間，或元件與網頁邊緣需要空間實，則用邊界
```css
.guarantee {
  line-height: 1.9em;
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #333333;
  border-color: white;
  border-width: 1px;
  border-style: solid;//dashed
  background-color: #a7cece;
  padding: 25px;
  padding-left: 30px;
  margin: 30px;
  margin-left: 80px;
  background-image: url(images/background.gif);
  background-repeat: none;
  background-position: top left;
}

#idname {
  color: red;
}
```
