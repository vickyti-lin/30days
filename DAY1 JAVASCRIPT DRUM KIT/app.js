function playSound(e) {
    // console.log(e.keyCode); // 顯示按下的keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // 如果沒有的audio 則 停止function
    if (!audio) return;
    // console.log(audio); 
    // console.log(key);
    audio.currentTime = 0; // 讓按鍵可以一直發出聲音 倒帶到開始
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    // console.log(e);
    // console.log(this);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// window.addEventListener('keyup', function(e) {
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     key.classList.remove('playing');
// })