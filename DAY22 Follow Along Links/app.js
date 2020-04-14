const triggers = document.querySelectorAll('a');
console.log(triggers);  // 抓取所有a連結 存入變數
const highlight = document.createElement('span'); 
console.log(highlight); // 創建新的元素 span 來顯示 highlight 的效果
highlight.classList.add('highlight');  // 新增css class = hightlight  入 span 
document.body.appendChild(highlight);  // 將span 放到 HTML 當中
// 此時 HTML 當中可以看到新建的元素，但畫面上卻看不到，因為我們還沒定義寬、高
// 使用 Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置

function highlightLink(){
    // console.log(this); // 印岀 指到的 a link
    const linkCoords = this.getBoundingClientRect();
    // console.log(linkCoords); // 取得指到的 link 元素大小.位置資訊  DOMRect
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY, //  加上滑鼠滾動的距離
        left: linkCoords.left + window.scrollX,
    }
    // 添加 highlight css
    highlight.style.width = `${coords.width}px`; // link 寬
    highlight.style.height = `${coords.height}px`; // link 高
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`; // link 位置
    
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

// 如果單純
// highlight.style.width = `${linkCoords.width}px`;
// highlight.style.height = `${linkCoords.height}px`;
// highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
//  但是當你把網頁往下滑動的時候
//  會發現highlight沒辦法正確的顯示在<a>上
//  這是因為給highlight的top和left是相對於父層元素(body)的距離
//  position: absolute;的緣故