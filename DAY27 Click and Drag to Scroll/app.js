const slider = document.querySelector('.items'); // 抓到25個div
// console.dir(slider); // 有一個scrollLeft 用來設定（或顯示） X 滾軸當前位置
let isDown = false;
let originX; //用來紀錄`mousedown`時的初始X座標，用來計算滑鼠「移動多少」
let scrollLeft; //用來紀錄`mousedown`時的捲軸X座標


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active'); // 抓取鼠標
    // console.log(e); // MouseEvent.movementX 提供了拖曳起點到當前位置（X 軸）的距離
    originX = e.pageX - slider.offsetLeft;
    // e.pageX 點擊位置到document左側邊緣的距離 - slider 到父層(body)左側邊緣的距離
    // console.log(originX);  // `mousedown`時的初始X座標
    scrollLeft = slider.scrollLeft;  // slider.scrollLeft 初始位置
});
slider.addEventListener('mouseleave', () =>{
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () =>{
    isDown = false;
    slider.classList.remove('active');

});
//if 持續觸發事件的時候，應該判斷使用者是不是在按下的情況，否則應該停止 Function
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    // console.log(isDown);
    // console.log(originX);
    e.preventDefault();
    // preventDefault() 阻止預設拖曳會選取的行為（例如，当点击提交按钮时阻止对表单的提交）
    const moveX = e.pageX - slider.offsetLeft; // 重新計算移動中的 x
    // console.log({moveX, originX});
    // 末位置 = 初位置 + 位移 , 位移 = 末 - 初
    const walk = (moveX - originX) * 3; // *3 改變滑動速度
    // console.log(walk);
    slider.scrollLeft = scrollLeft - walk;
});
