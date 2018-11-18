# CSS font rules
1. font-family: 一群共享相同特徵的字型
- serif: 具有襯線的字型
- sans-serif: 不具有襯線的字型
- 根據不同的作業系統與瀏覽器，依序放入建議之字型，最後則是這些字型家族的default設定值
- @import: 能讓我們匯入其他的CSS規則
- @media: 能讓我們建立用於特定媒體類型的CSS規則
```css
body {
	font-family: Verdana, Geneva, Arial, sans-serif;
}
```
- @font-face規則: 定義字型的名稱與位置，而後可將這個字型用在網頁中
```css
@font-face {
	font-family: "Emblema One";
	src: url("http://xxxxxx/xxx.wof"),
			 url("http://xxxxxx/yyy.wof");
}
h1 {
	font-family: "Emblema One", sans-serif;
}
```
---
2. font-size: 調整字型大小
- px, %, em
- size也有繼承的概念，如果h1設為120%，則表示為父元件size的1.2倍大小
- size通常建議為定義body元件為small or medium or large，底下的子元件再以百分比或em方式定義大小
```css
body {
	font-size: 14px;
	/*
	font-size: 120%;
	font-size: 1.2em;
	*/
}

較好方式
body {
	font-size: small;
}
h1 {
	font-size: 220%;
}
h2 {
	font-size: 140%;
}

```
---
3. font-weight: 改變字體粗細
```css
body {
	font-weight: bold; //粗體
	//font-weight: normal; 正常字體
}
```
---
4. font-style: 改變字體風格
```css
body {
	font-style: italic; //斜體
	//font-style: oblique; //假斜體
}
```

5. 顏色
- 指定色彩名稱
```css
body {
	background-color: silver;
}
```
- 紅綠藍相對百分比
```css
body {
	color: rgb(80%, 40%, 0%);
	//color: rgb(204, 102, 0);
}
```
- 十六進位碼表示
	- 如果各組兩位數分別均以相同數字組成，就可以採用縮寫。例如#ccbb00可以縮寫成#cb0
```css
body {
	background-color: #cc6600;
}
```
---
6. 字型上下中線
```css
h1 {
	text-decoration: underline; //底線
	//text-decoration: line-through;//中線
	//text-decoration: overline;//上線
	//text-decoration: none;//什麼都不加

}
``` 
