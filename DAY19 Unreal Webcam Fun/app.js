const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const click = document.querySelector('.click');
// const rgb = document.querySelectorAll('.rgb input');
// console.log(rgb);

// navigator.mediaDevices 取得 麥克風、攝影機或共享螢幕的連結
// .getUserMedia()來取得許可 ,(攝像頭的視訊, 麥克風的音訊)
function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream); // MediaStream
            try {
                video.srcObject = localMediaStream;  // 將HTMLMediaElement的srcobject屬性拿來存放
            } catch (err) {
                video.src = window.URL.createObjectURL(localMediaStream); // 與上方相同 ,舊方法
            }
            video.play();
        })
        .catch(err => {
            console.err('OH NO!', err);
        });
}
getVideo();

// image的左上角在目标canvas上 X 轴.Y軸坐标
// ctx.drawImage(image, dx, dy, dWidth, dHeight);
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    // 每 16 毫秒將攝影機畫面「印」至 canvas,
    // 如果不用 setInteval(..)，則只會是靜態的一張圖像
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

    // 取出pixels(從canvas的0,0開始取，寬 = width, 高 = height)
        let pixels = ctx.getImageData(0, 0, width, height);

    // 做效果
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        pixels = greenScreen(pixels);
        // 儲存像素點的地方是一個叫做Uint8ClampedArray的array
        
        // ctx.globalAlpha = 0.1; // 鬼魂模樣 慢動作
        
    // 放回(將pixels從0,0的位置開始放回)
        ctx.putImageData(pixels, 0, 0);
    }, 16);

}

// 泛紅效果: 就是要將紅色增加,其他兩種顏色下降
// +=4 , 4個為一組,表示一個rgba的像素點要呈現的顏色
// 由左到右、由上到下排列
function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100; // red
        pixels.data[i + 1] = pixels.data[i + 1] - 50;  // green
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // blue
    }
    return pixels;
}

// 色相分裂: 將不同的顏色移動到不同的位置即可
function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0];
        pixels.data[i + 500] = pixels.data[i + 1];
        pixels.data[i - 550] = pixels.data[i + 2];
    }
    return pixels;
}

// 過濾顏色: 只要顏色落在指定區間,就讓他變透明(抽掉顏色)
function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll('.rgb input').forEach((input) => {
        levels[input.name] = input.value;
    });
    var red, green, blue, alpha;
    for (let i = 0; i < pixels.data.length; i = i + 4) {
        red = pixels.data[i + 0];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];
        alpha = pixels.data[i + 3];

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }

    return pixels;
}



// 截圖; 拍照功能
function takePhoto() {
    // 播放音效/影片前要先把時間設為 0
    snap.currentTime = 0;
    snap.play(); // 截圖音效

    // 取得圖像連結 , 可以將圖片儲存在網頁上 , canvas.toDataURL(type, encoderOptions);
    const data = canvas.toDataURL('image/jpeg'); // jpeg or png 都可
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'picture'); // 後面是自定義檔名
    link.innerHTML = `<img src="${data}" alt="picture" />`;
    strip.insertBefore(link, strip.firsChild);
    // insertBefore 將新增的放置首位, appendChild 將新增的放置末位

}
// takePhoto();

click.addEventListener('click', takePhoto);
video.addEventListener('canplay', paintToCanvas); // 當影片可播放時執行

