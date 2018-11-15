1. JPEG用於相片與複雜的圖像
2. PNG與GIF用於色彩分明的圖像或logo，GIF的色彩只有256且沒有透明性
3. 介紹新元素\<img\>: 是個inline element，不會造成前後段行，如果是指向不同網站上的圖像，通常會使用URL；若是位在同網站的連結與圖像，最好使用相對路徑
- alt attribute: 說明圖像文字的屬性，當圖像因問題無法載入時
```html
<!doctype html>
<html>
  <head>
    <title> Ths is html 5 </title>
    <style type="text/css">
      body {
        background-color: #eaf3da;
      }
    </style>
  </head>
  <body>
    <h1> We need to follow W3C latest web develop spc</h1>
    <p>
      <a href="html/aaa.html">
        <img src="../photo/sturbucks.png" / alt="This is a picture for descriping the sturbucks." width="600" height="400">
      </a>
    </p>
    <h2> Keep going to learn more, and be better</h2>
  </body>
</html>
```
4. 為什麼不能直接用width與height屬性來調整圖像在網頁上的尺寸
=> 因為瀏覽器仍然需要取得整個大型圖像，然後才能縮小到網頁中
5. matte選項提供柔化文字邊緣所用的色彩。根據網頁顏色，選擇相同色彩作為柔化

