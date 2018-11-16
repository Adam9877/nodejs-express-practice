1. HTML5 doctype
```html
<!doctype html>
```
2. `html5` 有向下相容性，html除了會支援新事物，也將繼續支援舊有的事物
3. W3C validator 
> (http://validator.w3.org)
4. 加上meta標籤以指定字元編碼
```html
<meta charset="utf-8"> //html5以後的meta標籤可以簡化成這樣
```

## HTML5的三個重要性
- HTML5有些非常酷的新元件與屬性
> \<video\> \<article\>等等
- 很多新功能，可供網站開發人員以HTML5建立網路應用程式
- HTML5規格比之前的HTML版本更為堅固可靠，規格中記錄了網站開發人員常犯的錯誤，而且這樣有註於流覽器處理這些錯誤

## HTML編寫上之注意事項
- 永遠從\<!doctype html\>開始
- 關於\<html\>元件：千萬不可少了它，同時做為根元件
- 下一階層為\<head\>及\<body\>
- \<head\>中添加\<meta charset="utf-8"\>及\<title\>標籤
- \<img alt=""\>屬性為必要的，否則過不了W3C的驗證
