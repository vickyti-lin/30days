// get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// bluid out functions
function togglePlay(){
    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
}

function updateButton(){
    const icon = this.paused ? '▶️' : '■' ;
    // console.log(icon); // this.paused  is  true & false
    toggle.textContent = icon ; // 變換 toggle 的 icon 
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
    // console.log(this.dataset.skip); // 累加 快轉 25 倒退10
}
//.currentTime  以秒設置播放時間 改變當前設置

function handleRangeUpate(){
    // console.log(this.name);
    // if(this.name === 'sound'){ 
    //     this.name = 'volume';
    // }
    video[this.name] = this.value; // html video api 去操控影片內有的功能 volume 
    // console.log(this.name);
    // console.log(this.value);
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100; // 播放時間
    progressBar.style.flexBasis = `${percent}%`;
    // console.log(percent);
    // video.duration 影片總時長
}

function scrub(event){
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // console.log(event); //印出 點擊處object  找到 offsetX
    // progress.offsetWidth = 640
}

// hook up the event listens

video.addEventListener('click', togglePlay); // 按影片播放暫停
video.addEventListener('play', updateButton); // 當play 換 icon
video.addEventListener('pause', updateButton); //當 pause 換 icon
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener('click', togglePlay); // 按播放鈕 播放暫停
skipButtons.forEach(button => button.addEventListener('click', skip)); // 按快轉 倒退

ranges.forEach(range => range.addEventListener('change',handleRangeUpate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpate));

let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e) => mousedown && scrub(e));  // if mousedown 按下拖曳 true 執行 scrub  , false 不動作
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);