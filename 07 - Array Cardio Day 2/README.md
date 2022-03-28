# 07 - Array Cardio Day 2

## 目標

- 本次同 04 為練習操作 Array 的方法，例如：`some()`, `every()`, `find()`, `findIndex()` 等。

## 提示

- 須了解 `some()`、`every()`、`find()`、`findIndex()` 的參數及回傳值。
  
- 透過解構 `...` 及 `slice()` 來達成刪除陣列中某元素。

    ```javascript
    // Target: 4
    const arr = [1, 2, 3, 4, 5];
    const newArr = [...arr.slice(0, 3), ...arr(4)];
    console.log(newArr); // [1, 2, 3, 5]
    ```

## 參考

1. [Array - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array)
