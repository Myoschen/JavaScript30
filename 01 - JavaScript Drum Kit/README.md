# 01 - JavaScript Drum Kit

## 目標

- 當按下指定按鈕時，撥放相對應的音檔及動畫。

## 筆記

- 利用 HTML5 提供的 data-\* attribute 去查詢當下按下的按鈕所對應到的音檔。

  ```javascript
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.play();
  ```

- 加入 `playing` class 產生網頁動畫效果。

  ```javascript
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
  ```

- 監聽 `transitionend` 事件發生，就將 `playing` class 移除。

  ```javascript
  key.addEventListener("transitionend", removeTransition);
  ```

## 參考

1. [[技術分享] 什麼是 HTML 5 中的資料屬性（data-* attribute）](https://pjchender.blogspot.com/2017/01/html-5-data-attribute.html)
2. [transitionend - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/transitionend_event)
