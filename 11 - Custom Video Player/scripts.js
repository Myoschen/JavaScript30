const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// 播放或暫停影片
function togglePlay() {
    let playOrPause = video.paused ? 'play' : 'pause';
    video[playOrPause]();
}

// 切換播放按鈕的 Icon
function switchIcon() {
    let icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', switchIcon);
video.addEventListener('pause', switchIcon);
toggle.addEventListener('click', togglePlay);

// 快轉、倒退
function handleSkip(e) {
    video.currentTime += Number(e.target.dataset.skip);
}

skipButtons.forEach(btn => {
    btn.addEventListener('click', handleSkip);
});

// 調整音量及播放速度
function handleRange(e) {
    // e.target.name => volume or playbackRate
    video[e.target.name] = e.target.value;
}

ranges.forEach(range => {
    range.addEventListener('input', handleRange);
});

// 顯示當前進度
function showCurrentProgress() {
    // video.currentTime 影片當前時間
    // video.duration 影片總共時間
    let percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + '%';
}

// timeupdate: 當 currentTime 改變時會觸發
video.addEventListener('timeupdate', showCurrentProgress);

// 點擊進度條改變當前撥放進度
function changeCurrentProgress(e) {
    // console.log(e.target.offsetParent) => div.player__controls
    // element.offset: 以外層容器左上角為原點
    // element.offsetWidth: 元素實際的寬度 => width + padding + border
    let targetTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = targetTime;

}

progress.addEventListener('click', changeCurrentProgress);
