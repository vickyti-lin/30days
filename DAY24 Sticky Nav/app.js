const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav(){
    // console.log(topOfNav); // nav 與網頁頂部的距離： 304   // scrollY 滑動時畫面的y座標 
    if(window.scrollY >= topOfNav) { 
        document.body.style.paddingTop = `${nav.offsetHeight}px`;   // offsetHeight: header 的高度
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = `0px`;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);