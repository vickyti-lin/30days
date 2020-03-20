const inventors = [
    { first: 'Albert', last: 'Einstein' ,year: 1879 ,passed: 1955 },
    { first: 'Isaac', last: 'Newton' ,year: 1643 ,passed: 1727 },
    { first: 'Galileo', last: 'Galilei' ,year: 1564 ,passed: 1642 },
    { first: 'Marie', last: 'Kepler' ,year: 1867 ,passed: 1934 },
    { first: 'Nicolaus', last: 'Copernicus' ,year: 1571 ,passed: 1630 }
];

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoben, Ludwig'
];

// console.table(inventors);
// console.table(people);

// 1. filter() 篩選符合條件保留 並成一個陣列 不影響原資料
//列出 出生在1500的人
let fifteen = inventors.filter(function(inventor){
    return inventor.year >= 1500 && inventor.year < 1600
});
console.table(fifteen);

// 2. map() 產生一個新陣列 回傳新內容
//列出 first & last name
let fullnames = inventors.map(function(inventor){
    return inventor.first + ' ' + inventor.last
});
console.table(fullnames);

// 3. sort()對一個陣列進行排序 
// 列出 年紀小到大
let birth = inventors.sort(function(a,b){
    return a.year > b.year ? 1 : -1 
});
console.table(birth);

// 4. reduce() 累加total由左至右傳回    類似for loop 跑遍全資料
//算出 每個人年紀 並加總
let yearold = inventors.reduce(function(total,inventor){
    return total + (inventor.passed - inventor.year)
}, 0); // 初始値
console.log(yearold);

// 5. sort() 
//透過 sort 排序年紀長至短
let oldest = inventors.sort(function(a, b){
    return (a.passed - a.year) > (b.passed - b.year) ? -1 : 1
});
console.table(oldest);

// 6. 至網站console應用   列出 名字包含 ‘de’的 
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Array.from() 轉換陣列
// let links = document.querySelectorAll('.mw-category a'); // 要記得轉陣列

// let category = document.querySelector('.mw-category');
// let links = Array.from(category.querySelectorAll('a'));
// console.log(links);//結果為 nodeList 要轉array
// let de = links
//             .map(link => link.textContent) //取出名字
//             .filter(streeName => streeName.includes('de')); //過濾含有de
// console.log(de);

// 7. sort 練習
// 按姓氏排序
let alphabetically = people.sort(function(a, b){  //sort 排順序
    let [alast, afirst] = a.split(', ');  // split 從字串取出轉陣列
    let [blast, bfirst] = b.split(', ');
    return a > b ? 1 : -1 
});
console.table(alphabetically);

// 8. reduce 練習
// 加總 例子名稱 出現次數 
const data = ['car', 'car', 'truck', 'truck','bicycle', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
let count = data.reduce(function(obj,item){
    if (!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{});
console.table(count);
