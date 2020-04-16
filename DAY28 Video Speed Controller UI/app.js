const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');


// speed.offsetHeight 可以取得 speed 的元素高度
function handleMove(e){
    // 滑鼠與調節器原點距離
    const y = e.pageY - this.offsetTop; // this 是 speed, 取得在 speed 的當前位置
    // 進度條所佔的比例 = 滑鼠位置與調節器原點的距離 / 調節器總高度
    const percent = y / this.offsetHeight; // 當前speed位置的比例
    const min = 0.4;
    const max = 4;
    // 將比例化為百分率
    const height = Math.round(percent * 100) + '%'; // 由於css speed-bar 是％ , 因此這裡也要轉換
    const playbackRate = percent * (max - min) + min ;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';  // toFixed() 最多在小數點後 2 位
    video.playbackRate = playbackRate;

    // console.log(y); // 0 ~ 410
    console.log(height); // 0 ~ 100%
}


speed.addEventListener('mousemove', handleMove)