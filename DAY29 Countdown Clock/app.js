let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown); //  清除已有的倒數計時器

    const now = Date.now(); // 取得目前的時間戳（timestamp）, 全用毫秒來算才不用判別進位問題
    const then = now + seconds * 1000; // 將取得的時間轉換為秒數
    // console.log({now, then});
    displayTimeLeft(seconds);
    displayEndTime(then);

    // 使用 setInterval(..) 每秒更新 ,將 setInterval 存入變數 , 才能clearInterval()停止它
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // // 檢查是否需要停止倒數計時（當數字為 0 時）
        if(secondsLeft <= 0) {
            clearInterval(countdown); // 清除設定的時間
            return; // 跳出 function
        }
        // 將時間渲染至畫面
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    // console.log(seconds);
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    document.title = display; // 直接在title 顯示倒數
    timerDisplay.textContent = `開始倒數 ${display}`;
    // console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp){
    const end = new Date(timestamp); // 將時間戳（timestamp） 轉換成 現代顯示時間
    const hour = end.getHours();
    const adjustHour = hour > 12 ? hour - 12 : hour ;
    const minutes = end.getMinutes();
    // .textContent 印到html
    endTime.textContent = `最終時間為 ${adjustHour} : ${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTime(){
    const seconds = parseInt(this.dataset.time); // parseInt 取出數字的整數部分
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTime));

// 之所以不用 querySelector html , 因為我們有賦予 name 値 , 因此可以 以這種方式執行
document.customForm.addEventListener('submit', function(e) {
    // 由於 form submit 之後會提交表單重整頁面，但我們並不需要，因此要先 event.preventDefault() 來停止預設行為
    e.preventDefault();
    const mins = this.minutes.value;
    // console.log(mins);
    this.reset();
    timer(mins * 60); // 轉成分數後再執行 timer
})
// timer(124); 測試用