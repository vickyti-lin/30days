const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handlecheck));
// for loop 所有checkbox

let lastChecked;
function handlecheck(e){
    // console.log(event); // 印出 觸發事件
    let inBetween = false; // 跑 勾選項目 頭 到 尾
    // console.log(this.checked); // 勾選為 true 取消 false
    // event.shiftkey  確認有按下shift 
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
        console.log(checkbox);  // 印出所有 input type
        if (checkbox === this || checkbox === lastChecked) {
            inBetween = !inBetween; //  = true
            // console.log('is check up!')
            }
            if (inBetween) {
                checkbox.checked = true; // 將選取中所有的check 勾選
            }
        });
    }
    lastChecked = this;
    // console.log(lastChecked); // 印出勾選的 input type
} 