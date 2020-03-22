const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);  //  抓取input

inputs.forEach(function(input){
    input.addEventListener('change', changeinput); // 單純滑動改變的値
    input.addEventListener('mousemove', changeinput); // 滑鼠移動出現的値
    
})
function changeinput(){
    // console.log(this.name, this.value);
    const suffix = this.dataset.sizing || ''; // 抓取html data :px 或 沒有size的
    // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}