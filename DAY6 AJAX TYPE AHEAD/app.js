const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)  //抓資料
    .then(blob => blob.json())  //  轉為 json 物件
    .then(data => cities.push(...data)); // 資料傳入 citiesd

// console.log(cities);

// 查找匹配項  findMatches 純函式
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {        // .filter 透過下方函式的結果 產生新陣列
        const regex = new RegExp(wordToMatch, 'gi')  
        // 创建了一个正则表达式对象，用于将文本与一个模式匹配 / g 代表全局匹配;找到所有匹配、i 代表不分大小寫
        return place.city.match(regex) || place.state.match(regex) 
        // str.match(regexp)     匹配 city or state 有符合
    })
}
// findMatches('Bos', cities);

function numberWithCommas(x) {
    // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // console.log(typeof x); // 查詢是字串還是數字
    return Number(x).toLocaleString();
    
}
// Number.prototype.toLocaleString() 返回这个数字在特定语言环境下的表示字符串  如:各個國家 千位逗點數

function displayMatches(){
    // console.log(this.value); 印出 輸入的字
    const matchArray = findMatches(this.value, cities);
    // console.log(matchArray); 

    const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
            <span class="name"> ${cityName}, ${stateName}</span>
            <span class="population">人口：${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join(''); // 所有的元素連接、合併成一個字串
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches); // 每打一個字

