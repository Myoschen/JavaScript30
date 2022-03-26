# 03 - CSS Variables

## 目標

- 取得 spacing、blur 及背景顏色，改變下方圖片的樣式。

## 提示

- 會使用到 CSS 的變數功能。

  ```css
    :root {
        --base: #ffc600;
        --spacing: 10px;
        --blur: 10px;
    }
  ```

- 當要使拖動 range 的時候也會更新樣式，必須去監聽 `input` 事件。

- 要小心 function 的寫法，此時不可使用 es6 的箭頭函式。

  ```javascript
    let handleUpdate = function () {
        ...something
    };
  ```

## 參考

- [onchange event on input type=range is not triggering in firefox while dragging](https://stackoverflow.com/questions/18544890/onchange-event-on-input-type-range-is-not-triggering-in-firefox-while-dragging)
- [How to change CSS :root color variables in JavaScript](https://stackoverflow.com/questions/37801882/how-to-change-css-root-color-variables-in-javascript)
- [箭頭函式（arrow function）和它對 this 的影響](https://pjchender.dev/javascript/js-arrow-function/)
