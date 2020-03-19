// var as = 25;
// var a = as / 2;
// a = as % 2;
// console.log(a);

// 透過 Reduce 把播放清單中的時間加起來
//功能 : 加總時間,畫面 : 依時間格式顯示小時、分鐘、秒數

let timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// console.log(timeNodes);  // 原始為 nodelist   Array.from() 轉 array

const seconds = timeNodes
    .map(node => node.dataset.time)   // 印出時間 分：秒
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat); // split 刪掉： ， parseFloat 忽略字串  
        return (mins * 60) + (secs * 1); // 計算每個video 全部幾分
    })
// console.log(seconds); // 印出所有video 時長
    .reduce((total, next) => total + next , 0);
console.log(seconds); // 算出總時間秒

// let secondsLeft = seconds;
// const hours = Math.floor(secondsLeft / 3600);
// secondsLeft = secondsLeft % 3600;

// const mins = Math.floor(secondsLeft / 60);
// secondsLeft = secondsLeft % 60;

// console.log(hours, mins, secondsLeft);

const second = seconds % 60;  // 1 分鐘 === 60 秒
const hour = Math.floor(seconds / 3600);
const minute = ((seconds - second) % 3600) / 60;  
// (總秒 - 秒) ％3600 = 剩餘總小時/60  = 分

console.log(`${hour}時 ${minute}分 ${second}秒`);
// 4,17,3