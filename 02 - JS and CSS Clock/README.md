# 02 - JS AND CSS CLOCK

## 目標

- 取得當下時間，完成時鐘。

## 提示

- 創造時間物件，取得 hours、minutes、seconds。

  ```javascript
  const current = new Date();
  current.getHours();
  current.getMinutes();
  current.getSeconds();
  ```

- 透過 `setInterval` 每秒自動更新時鐘。

  ```javascript
  setInterval(update, 1000);
  ```

## 參考

1. [談談 JavaScript 的 setTimeout 與 setInterval](https://kuro.tw/posts/2019/02/23/%E8%AB%87%E8%AB%87-JavaScript-%E7%9A%84-setTimeout-%E8%88%87-setInterval/)
