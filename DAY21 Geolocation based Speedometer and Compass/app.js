const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');


// getCurrentPosition() 只會提供一次結果；
// 但 watchPosition() 會每隔一段時間提供更新的結果
// navigator.geolocation.watchPosition(success, error);
// success & error 都是 callback
// success 是位置資訊，而 error 則是錯誤訊息
navigator.geolocation.watchPosition((data) => {
    console.log(data); // // Position {coords: Coordinates, timestamp: 1570368253203}
    speed.textContent = data.coords.speed; // 取得速度
    arrow.style.transform = `rotate(${data.coords.heading}deg)`; // 取得方位
    latitude.textContent = `緯度：${data.coords.latitude}`;
    longitude.textContent = `經度：${data.coords.longitude}`;
}, (err) =>{
    console.err(err);
    alert('Hey! You Gotta Allow That To Happen!!!');
});
