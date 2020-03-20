//  顯示目前的時間並可以更新時針、分針、秒針
//讀得到目前的時間  // 指針要能分辨長短  //分針、時針的特性


const second = document.querySelector('.second-hand');
const min = document.querySelector('.min-hand');
const hour = document.querySelector('.hour-hand');

// console.log(second, min, hour);

function setClock(){
    let data = new Date();
    // console.log(data); // 印出當下時間
    // 算出一秒鐘、一分鐘、一小時中秒針、分針、時針需要轉動多少角度，一圈轉360度
    // getSeconds() 抓取當下秒 , 同理其他
    let secondDeg = data.getSeconds() * 6;  // 一秒轉6度 (deg = 360/60)
    let minDeg = data.getMinutes() * 6 + data.getSeconds() * 6 / 60;  // 一分轉6度 (deg = 360/60) + / 60sec * sencondDeg
    let hourDeg = data.getHours() * 30 + data.getMinutes() * 30 / 60;// 一小時轉30度 (deg = 360/12)  + / 60min * minDeg
    // console.log(secondDeg,minDeg,hourDeg);

    // 透過 event.style.transform 更動秒針、分針、時針的 CSS
    second.style.transform = `rotate(${secondDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
    // 分針、時針不太符合常態，會真正到等分針、秒針轉完一圈才進位一大格
    // (+ data.getSeconds() * 6 / 60; ) & ( + data.getMinutes() * 30 / 60; )
    
};

setClock();
setInterval(setClock,1000);