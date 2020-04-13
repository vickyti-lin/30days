const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
// 以下 畫布變成全螢幕大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;
// getContext()，透過此方法可以取得渲染環境及其繪圖函數(function)
//  strokeStyle 設定勾勒圖形時用的顏色. 
// .lineCap 绘制每一条线段末端的属性, 有3个可能的值，分别是：butt 方形, round圓形 and square 方形 矩形
// .lineJoin 是 Canvas 2D API 用来设置2个长度不为0的相连部分   'round','bevel','miter' 线段，圆弧，曲线
ctx.globalCompositeOperation = 'overlay'; // 畫圖重疊處

// 預設滑鼠點擊為 false , true 才會畫畫
let isDrawing = false;
let lastX = 0; // 初始 x位置
let lastY = 0; // 初始 y位置
let hue = 0;
let direction = true; // 變數 direction 為 true 來表示正向， false 來表示反向
function draw(e){

    if(!isDrawing) return;
    // console.log(e); 
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // HSL分別代表 Hue(顏色), Saturation(飽和度), Lightness(亮度)
    ctx.beginPath(); // 開始規劃路徑
    ctx.moveTo(lastX, lastY); // 畫筆移動到初始座標
    ctx.lineTo(e.offsetX, e.offsetY); // 劃線到 e.offsetX, e.offsetY 滑鼠座標
    ctx.closePath();//結束規劃路徑
    ctx.stroke(); //作畫
    [lastX, lastY] = [e.offsetX, e.offsetY];  //將結束位置設為下次起始位置
    hue++;

    if(hue >= 360){
        hue = 0;
    }
    //控制線的粗細變化
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // 從鼠標位置開始畫
    
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

