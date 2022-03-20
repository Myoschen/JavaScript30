# Day 1 - JavaScript Drum Kit

---

## 目標

- 當按下指定按鈕時，撥放相對應的音檔及動畫。

## 提示

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
