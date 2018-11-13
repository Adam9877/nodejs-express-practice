1. 儲存html檔案時，encoding選擇為utf-8
2. HTML中的註解為 
```html
<!--與-->
```
3. Browser會無視HTML文字中的tab、換行與大多數的空白字元
4. HTML為我們提供了向瀏覽器說明網頁架構(structure)的方式，架構是為文字加上標記，讓瀏覽器知道何謂標題、何謂文字段落、何謂副標題等等事項。
一旦瀏覽器明白了架構的一部分，就能夠以更有意義且更易閱讀的方式呈現我們的網頁
5. HTML (HyperText Markup Language)的縮寫，用於網頁的架構(structure)
6. CSS (Cascading Style Sheets)，用於控制HTML的外觀呈現
7. 使用HTML，我們用tag為內容加上標記，以提供其架構。我們把成對的對偶標籤(matching tag)，以及對偶標籤裡的內容，合稱為元素(element)
8. 元素由三個部份組成：起始標籤(opening tag)、內容、結束標籤(closing tag)。但有些元素例外，例如：<img>
9. opening tag具有attribute，例如type
10. 網頁中應該都有<html>元素，以及一個<head>元素和一個<body>元素
11. 藉由在<style>元素裡添加CSS規則，即可為HTML網頁加上CSS。<style>元素應該只能放在<head>元素中

```html
<html>
  <head>
    <title> Moon Festival Cake </title>
    <style type="text/CSS">
      body {
        background-color: #d2b48c;
        margin-left: 20%;
        margin-right: 20%;
        border: 2px dotted black;
        padding: 10px 10px 10px 10px;
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <h1> 2018 Moon Festival cake handmade </h1>
    <h2> pipeapple flavor, $1.2 </h2>
    <p> This flavor is our best seller, it comprise of a lot of pipeapple. </p>
    
    <h2> red bean flavor, $1.3</h2>
    <p> This flavor is our new product. it comprise of a lot of red bean.</p>
  </body>
</html>
