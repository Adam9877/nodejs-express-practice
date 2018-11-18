# CSS 內容
1. 

```css
p {
  color: maroon;
  border-bottom: 1px solid black;
  left: ;
  text-align: ;
  list-style: ;
  padding: ;
  font-size: ;
  background-color: ;
  
}

p.green {
  color: green;
}

.green {
  color: green;
}

h1 {
  font-family: sans-serif;
  color: gray;
}

h1, h2 {
  color: blue;
}
```

```html
<head>
  <link type="text/css" rel="stylesheet" href="../xxx.css">
</head>
<body>
  <p class="green">
  </p>
</body>
```

2. 使用更為特定的選擇器，都能覆寫繼承自父元件的特性
3. css中加入註解方式跟一般程式語法相同
> /\*....\*/
4. 選擇器會選擇較晚出現在CSS檔案中的規則 (較接近檔案底部)
