const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500;  // 陰影最大移動距離
function shadow(e){
    // console.log(e); // mouseEvent {offsetX, offsetY }
    // const width = hero.offsetWidth;    // 等同以下
    // const height = hero.offsetHeight;  // 等同以下
    let { offsetX: x, offsetY: y} = e; // use let is because want to reassign value
    // console.log(x,y); // 滑鼠移動座標

    // console.log(this, e.target); // this is .hero , e.target is 觸發物件 .h1
    if (this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }//  解決 碰到 h1 區塊  鼠標 錯誤  
    // console.log(x, y);  

    const { offsetWidth: width, offsetHeight: height} = hero;
    // console.log(width,height); // 1280 274    .hero 的大小
    //  計算相對位移，轉換為陰影位置 及 陰影移動的距離
    // -(walk/2)是因為要讓移動距離介於150 ~ -150之間(一半的walk)
    // 這樣才是以.hero的中心點去做變化
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    // console.log(xWalk, yWalk); 

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(0, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk * - 1}px 0 rgba(0, 255, 0, 0.7),
    ${yWalk}px ${xWalk}px 0 rgba(0, 255, 255, 0.7),
    ${yWalk * -1}px ${xWalk * - 1}px 0 rgba(255, 0, 255, 0.7)
    `;
}

hero.addEventListener('mousemove', shadow);