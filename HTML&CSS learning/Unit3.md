1. 在輸入內容前，先規劃好網頁的架構。請從草稿圖開始，然後建立藍圖，最後才編寫HTML。
2. 新增新元素
  - \<q\>: 引文和其他段落的內容放在一起時
  - \<blockquote\>: 引文在網頁上自成一個區塊時。
  - 區塊元件(block element): 前後都有換行字元
  ```html
  <ol> <ul> <li> <p> <h1> <br> <blockquote> <a>
  ```
  - 行內元件(inline element): 隨著文字流出現在行內
  ```html
  <em> <q> <img> <a>
  ```
  - \<br\>: 換行元件
  - 空元件(void element): 沒有內容，也沒有結束標籤。
  - 清單元件: \<li\>: 標記清單項目，\<ol\>\<ul\>: 決定建立清單的總類
  ```html
  <ul>
    <li> Google</li>
    <li> Facebook </li>
    <li> at&t </li>
  </ul>
  ```
  - 字元實體(character entity): \> 的字元縮寫即為&gt；\<字元則為&lt； &則為&amp
  - \<code\>: 用於呈現電腦程式的程式碼
  - \<time\>: 告訴瀏覽器此段內容是日期或時間，或兩者皆是
  - \<strong\>: 標示強調的文字
  - \<pre\>: 瀏覽器忠實顯示我們輸入的文字格式時
  
  
