const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    // console.log(this); // 指向 被點擊的object
    this.classList.toggle('open');
}
function toggleActive(e){

    console.log(e.propertyName); // 顯示panel.transition

    if (e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
