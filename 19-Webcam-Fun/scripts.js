const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((error) => {
      alert(`Your camera can not use! \n(${error})`);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let imageData = ctx.getImageData(0, 0, width, height);

    // ImageData.data 為一維陣列，依序為 R (Red)、G (Green)、B (Blue)、A (Alpha)。
    // imageData.data = redEffect(imageData.data);
    // imageData.data = rgbSplit(imageData.data);
    imageData.data = greenScreen(imageData.data);

    ctx.putImageData(imageData, 0, 0);
  });
}

function takePhoto() {
  // 撥放快門聲效
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;

  // 指定 link 的 download 屬性可以使該連結執行下載動作
  link.setAttribute('download', 'photo');
  link.innerHTML = `<img src="${data}" alt=photo" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i + 0] = pixels[i + 0] + 200;
    pixels[i + 1] = pixels[i + 1] - 50;
    pixels[i + 2] = pixels[i + 2] * 0.5;
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i - 150] = pixels[i + 0];
    pixels[i + 500] = pixels[i + 1];
    pixels[i - 550] = pixels[i + 2];
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (let i = 0; i < pixels.length; i += 4) {
    let red = pixels[i + 0];
    let green = pixels[i + 1];
    let blue = pixels[i + 2];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      pixels[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
