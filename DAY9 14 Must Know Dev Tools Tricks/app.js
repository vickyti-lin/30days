function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}
makeGreen();

    // Regular
console.log('Hello!');
    // Interpolated ( %s 字串. %d 數字. %f 小數點  )
console.log('Hello %s is string', '💩');  // Hello pop is string  （💩control+command+空格）
console.log('number is %f', 3.14);  //3.14
console.log('number is %d', 3.14);  //3

    // Styled  %c 放置最前面 css 改樣式
console.log("%c Have fun!", "font-size:60px; color:red"); 
    // warning!
console.warn('Oh no!'); // 黃色錯誤
    // Error :|
console.error('Have wrong!'); // x 紅色錯誤
    // Info
console.info('Promble!！');  // ! 藍色驚嘆號 
    // Testing   
// 用於測試使用，共有兩個參數：第一個參數帶入欲測試的項目，如果結果是 false 才會印出第二個參數的字串
// const p = document.querySelector('p');
console.assert(true,'HI!');
console.assert(false,'error!');
console.assert("",'error " "');
console.assert(NaN,'error NaN');
console.assert(undefined,'error undefined');
console.assert(0,'error is 0');
    // clearing
console.clear();
    // Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);  
// 印出 DOM 元素時至只會印出該元素本身，並無法看到可用的方法（methods）或屬性（properties）
console.dir(p);
// 會印出一個 HTMLElement 內含方法及屬性
// forEach() 方法會將陣列內的每個元素，皆傳入並執行給定的函式一次。 迴圈 導致印出資料過亂
    // Grouping together 將資料 改成一個群體
// .group & .groupEnd    ( .groupCollapsed 改成關閉選單)
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 5} years old`);
    console.groupEnd(`${dog.name}`);
});
    // counting  計算 出現次數 依不同內容計算
console.count('apple');
console.count('apple');
console.count('apple');
console.count('pig');
console.count('apple');
console.count('pig');
console.count('snack');
console.count('snack');
    // timing 紀錄 動作執行 總時間
// console.time('hello');
// alert('Hello world!')
// console.timeEnd('hello');

    // table  印出 表格
console.table(dogs);
console.table(dogs,['name']); // 只印出 name 欄位