// 建構一個SpeechSynthesisUtterance物件
const msg = new SpeechSynthesisUtterance();
let voices = []; //存放我們的資訊
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
// 抓取聲音要講的文字內容
msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
    voices = this.getVoices();
    // console.log(voices); // 取得包含所有物件的陣列 ,66種發音
    voicesDropdown.innerHTML = voices
        // .filter(voice => voice.lang.includes('en')) // 將範圍縮小, 只包含 en的
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join();
}

function setVoice(){
    // console.log(this.value); // 選到的 語言的名稱
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle(); // 語音設置好後閱讀文字
}

function toggle(startOver = true){
    speechSynthesis.cancel();
    if(startOver){
        speechSynthesis.speak(msg);
    }
}

function setOption(){
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}

// speechSynthesis.speak(msg); 測試用
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', function(){
    toggle(false);
});

// () => toggle(false);
// toggle.bind(null, false);