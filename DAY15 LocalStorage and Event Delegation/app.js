const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
//  把一個JSON字串轉換成 JavaScript的數值或是物件   讀取
//  這邊items 先確認localstorage有無値 ,如果抓不到的資料的話預設為空陣列

function addItem(e) {
    e.preventDefault(); //阻止我們 reload 畫面重新更新
    // 阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
    // console.log('hello'); // submit 完消失
    const text = (this.querySelector('[name=item]')).value; // .value 印出輸入的値
    // console.log(text); // this = form 表單
    const item = {
        text,   //  =  text: text,  因為keyname剛好與value相同
        done: false
    };
    
    items.push(item);
    // console.table(items); // 印出輸入的値
    populateList(items, itemsList);

    localStorage.setItem('items', JSON.stringify(items)); // 這裡做儲存
    //   : JSON.stringify 先轉成字串存入localstorage

    this.reset(); //把表单中的元素重置为它们的默认值。
    // 這邊是做 submit後 重置初始化輸入清單
}  

function populateList(plates =[], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {  // i = 1.2.3 看多少個項
        return`
            <li> 
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}"> ${plate.text} </label>
            </li>
        `; // plate.done  判斷 item.done ,if true :checked 
        
    }).join('');   // 將一堆字串 轉成 一大字串 
}

// checked done
function toggleDone(e){  // .matches() 检测字符串是否匹配给定的正则表达式
    if(!e.target.matches('input')) return; // 判斷匹配input , e.target 印出click 的 label & input
    // console.log(e.target); 
    const el = e.target; // 印 input
    const index = el.dataset.index; //印 click 第幾項 0.1.2
    items[index].done = !items[index].done;  // true & false 轉換
    localStorage.setItem('items',JSON.stringify(items));  // 儲存
    populateList(items, itemsList);   // update 資料
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click',toggleDone);

populateList(items, itemsList);  // 必須放在 checkBoxes上方 否則 讀不到新增的 input
// 這行做到重整後保留localstorage的値


// 下方導致 當新增一個新的値, 即不會運作
// const checkBoxes = document.querySelectorAll('input');
// checkBoxes.forEach(input => input.addEventListener('click', () => console.log('hi')));



