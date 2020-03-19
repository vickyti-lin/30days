// 設置一個keyword 當 輸入成功 則印出彩蛋
// 以下彩蛋為 印出 彩虹小馬

//join() 方法會將陣列（或一個類陣列（array-like）物件）中所有的元素連接、合併成一個字串，並回傳此字串



const press = [];
const secretCode  = 'wesbos';

window.addEventListener('keyup',function(e){
    
    console.log(e.key);   // 印出按下的按鍵  // e.keycode  印出字符代表 ASCII 數
    press.push(e.key);  
    // console.log(secretCode.length);
    // console.log(press.length);
    press.splice(-secretCode.length -1, press.length - secretCode.length);
//splice(（起始為負,從陣列最後往前移動）, 刪除數量 )
    if (press.join('').includes(secretCode)){
        console.log('Sprise!')
        cornify_add();
    }
    console.log(press);
});

