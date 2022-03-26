# 06 - Type Ahead

## 目標

- 輸入 City 或 State，於頁面顯示符合的資料（City、State、Population）。

## 提示

- 了解如何使用 `fetch()` 取得 API 的資料。
  
  ```javascript
  fetch(url)
    .then(res => res.json()) // 回應成功的話，將資料轉為 JSON。
    .catch(err => console.log(`Error: ${err}`)) // 回應失敗的話，印出錯誤資訊。
  ```

- 透過正規表達式來篩選符合輸入的資料。
  
  ```javascript
  const city = "Taipei";
  // 建構正規表達式。
  // 前方放要判斷的字串，後方則為判斷的方式（flag）。
  const regex = new RegExp("Tai", "gi");
  // match()：回傳符合的字串陣列，若無任何符合的則回傳 Null。
  const match = city.match(regex);
  console.log(match); // ['Tai']
  ```

## 參考

- [String.prototype.match() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/match)

- [String.prototype.replace() - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

- [[JS] 正則表達式（Regular Expression, regex）](https://pjchender.dev/javascript/js-regex/)
