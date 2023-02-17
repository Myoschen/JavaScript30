# 19 - Webcam Fun

## 目標

- 使用 Web Cam、加上濾鏡效果、提供使用者下載圖片。

## 筆記

- 使用 `navigator.mediaDevices.getUserMedia()` 取得視訊鏡頭許可，並透過 `drawImage()` 渲染至 canvas。
- 使用 `getImageData()` 取得畫布內容，並改寫 data 加上濾鏡效果，最後使用 `putImageData()` 渲染至 canvas。
- 使用 `<a />` 與 download 屬性提供使用者下載。
  
## 參考

1. [HTMLMediaElement.srcObject](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject)
2. [CanvasRenderingContext2D.getImageData()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData)
3. [JS30 Day 19 - Webcam Fun](https://ithelp.ithome.com.tw/articles/10207619?sc=iThelpR)
4. [HTML \<a\> download 屬性讓連結可直接執行下載](https://mnya.tw/cc/word/1716.html)
