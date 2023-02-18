# 25 - Event Capture, Propagation, Bubbling and Once

## 目標

- 了解 `EventTarget.addEventListener`。

## 筆記

- `capture` 可設置為冒泡或捕捉、`once` 設置只監聽一次 (觸發一次就清除)、`passive` 使該函式無法使用 `event.preventDefault()`。
- 設置 `Event.stopPropagation()` 可在該事件目標執行後就停止傳遞事件。

## 參考

1. [JS25-Event Capture, Propagation, Bubling & Once](https://ithelp.ithome.com.tw/articles/10197036)
