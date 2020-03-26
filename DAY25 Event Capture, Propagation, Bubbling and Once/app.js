const divs = document.querySelectorAll('div');
// console.log(divs); // Nodelist div.one two three

function logText(e) {
    console.log(this.classList.value); // this = div one two three
    // e.stopPropagation(); // stop bubbling 只顯示click的 div
    // 阻止當前事件繼續進行 capture捕捉 & bubble的傳遞
}
// document.body.addEventListener('click',logText); // 印出 bod
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,  // 捕捉 預設false ; true 與 bubble 相反 , 從外往內讀取,點到誰就是誰
    once: true // 只執行一次 就停止
    // 就像 div.removeEventListener
}));
// bubbling  如 預設 div 含 div : 將會 從內往外讀取
// 從元素往上到 body


// button 舉例 : once 應用 只能點擊一次  
// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('click up!');
// }, {
//     once : true
// });