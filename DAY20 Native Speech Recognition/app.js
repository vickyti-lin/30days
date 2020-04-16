// speechRecognition 語音識別(非同步語音識別),向用戶請求麥克風的許可
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// 透過 interimResults這個方法，來判斷使用者在講話的當下，如果設定為 True 就會即時辨識，
// 不然設定為 False 就會在一段話結束之後，才會開始辨識
const recognition = new SpeechRecognition();
recognition.interimResults = true;
// 設定辨認的語系
recognition.lang = 'zh-TW';
// 新增元素p
let p = document.createElement('p');
const words = document.querySelector('.words');
// 加到指定父节点的子节点列表的末尾处, 將語音辨識的字加在段落上
words.appendChild(p);

recognition.start();

recognition.addEventListener('result', e => {
    // console.log(e.results); // SpeechRecognitionEvent
    const transcript = Array.from(e.results) // 將resultsList變成一個陣列
        .map(result => result[0]) // 使用.map取出存放字的result.transcript
        .map(result => result.transcript)
        .join('') // 用.join('')將他們合併成string

        p.textContent = transcript;

        
        // 這個boolean值false是表示語音辨識尚未結束
        // 如果是true就是辨識完成
        if(e.results[0].isFinal) {
            p = document.createElement('p');
            words.appendChild(p);
        }
        // 包含說到的字 可以做功能
        // if(transcript.includes('熊熊')){
        //     console.log('🐻🐻🐻🐻🐻🐻');
        // }
    console.log(transcript);
});

// 我們要偵測辨識結束,再開啟一次辨識
recognition.addEventListener('end', recognition.start)