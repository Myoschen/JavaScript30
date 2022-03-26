# 05 - Flex Panel Gallery

## 目標

- 點擊 panel 會觸發圖片展開、文字顯示的動畫。

## 提示

- 了解 CSS Flexbox，例如：`flex-grow`、`flex-shrink`、`flex-basis` 等，詳細說明可參考下方連結。
  
  ```css
  .flex {
      display: flex; /* 啟用 flex */
      flex-direction: column; /* 決定 flex 的方向，會影響軸線 */
      justify-content: center; /* 對主軸對齊 */
      align-items: center; /* 對交錯軸對齊 */
      flex: 1 0 auto; /* <flex-grow> | <flex-shrink> | <flex-basis> */
  }
  ```

- 要注意 `transitionend` 事件會被觸發兩次。

## 參考

1. [String.prototype.includes() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
2. [深入解析 CSS Flexbox](https://www.oxxostudio.tw/articles/201501/css-flexbox.html)
