

// immediate=”true” 跳過驗證  , 
// apply() :執行 function, (明確指定 this ,須是陣列，會把陣列中的每個元素作為參數傳進目標函式中)
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function(){
        var context = this, args = arguments;
        // console.log(args);
        var later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.slide-in');
// console.log(sliderImges);

function checkSlide(){
    // console.count(event);
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // 我們希望瀏覽器視窗移動到圖片一半的位置才觸發滑入
        // 因此將瀏覽器視窗底部位置減掉圖片一半高度作為觸發點
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        // 圖片底部位置
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        // 當瀏覽器底部跑到圖片一半位置下方時
        const isNotScrolledPast = window.scrollY < imageBottom;
        // 瀏覽器底部還沒通過圖片底部時
        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else{
            sliderImage.classList.remove('active');
        }
        // 若瀏覽器底部超過圖片的一半
        // 且未通過圖片底部
        // 就讓圖片現身
        // 反之隱藏
    })
}
// 當視窗滾動時觸發 callback function
window.addEventListener('scroll',debounce(checkSlide));
