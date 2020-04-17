const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const start = document.querySelector('.start');
let lastHole; // 記錄上次的地洞
let timeUp = false;  // 當遊戲時間結束時會改為 true
let score;

// 隨機出現的時間
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


// holes 得到的是所有洞洞元素組成的清單，用 length 屬性取得洞洞總量，
// 接著用 Math.random() 配合 Math.floor() 製造出隨機的洞洞編號，就可以指定隨機洞洞了
//  隨機地洞, holes 也就是所有的地洞
function randomHole(holes){
    // idx = 隨機產生 0～5 的數字
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lastHole) {
        console.log('the same one');
        return randomHole(holes);
    }
    // 當 hole 與上次相同實則重新產生新的 hole，若與上次不一樣則 return 該值。
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}
// peep();

function startGame(){
    scoreBoard.textContent = 0; //  重設分數
    timeUp = false;
    score = 0;
    peep();
    // 當 timeUp === true 時，peep 會停止執行, 設定 10 秒後遊戲結束
    setTimeout(() => timeUp = true, 10000);
}

moles.forEach(mole => mole.addEventListener('mousedown', bonk));
start.addEventListener('click', startGame);

function bonk(e) {
    if (!e.isTrusted) return; // 確保使用者真的用滑鼠點擊
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}