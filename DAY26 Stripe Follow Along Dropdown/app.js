// 抓取cool 下 直接的 li
const triggers = document.querySelectorAll('.cool > li'); 
// 抓取 下拉選單
const background = document.querySelector('.dropdownBackground');
// 抓取  nav
const nav = document.querySelector('.top');

// console.log(triggers);  // NodeList(3) [li, li, li]
// console.log(background);
// console.log(nav);

function handleEnter(){
    // console.log('enter');
    this.classList.add('trigger-enter');
    // 下方要用arrow function  this 才會指向 li 觸發  , 否則指向 window
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    //  當 && 左方為 true 時才會執行右方動作
    background.classList.add('open'); // 新增 白色區塊

    const dropdown = this.querySelector('.dropdown'); // 取得鼠標指到的 li dropdown
    // console.log(dropdown);
    const dropdownCoords = dropdown.getBoundingClientRect(); // 取得 dropdown 的寬、高以及位置
    // console.log(dropdownCoords);
    const navCoords = nav.getBoundingClientRect(); 
    // 取得nav的寬高 ,來扣除當nav不是在最上面時 造成的白色區塊上移
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top, // 扣掉 nav 到頂端的距離
        left: dropdownCoords.left - navCoords.left // 扣掉 nav 到左側的距離
    };
    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;
    background.style.transform = `translate(${coords.left}px, ${coords.top}px)`; // 先 left  才 top
}

function handleLeave(){
    // console.log('leave');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
