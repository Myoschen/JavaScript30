# 24 - Sticky Nav

## 目標

- 當頁面捲動超過 header 會將 nav 固定在上方並顯示 logo。

## 筆記

- 透過 `offsetHeight` 取得 header 高度，判斷 `window.scrollY` 超過時固定 Nav。
- 由於設置 `position: fixed` 的元素會失去空間，所以要在 body 補上 nav 的空間。

## 參考

1. [JS30-Day24-Sticky Nav](https://ithelp.ithome.com.tw/articles/10196913)
