//  References VS Copying 參考點 ＆ 複製

// start with strings, numbers and booleans

// let age = 100;
// let age2 = age;
// console.log(age, age2); // 100 ,100

// age = 200;
// console.log(age, age2); // 200 , 100

// let name = 'Vicky';
// let name2 = name;
// console.log(name, name2); // vicky, vicky

// name = 'Bunny';
// console.log(name, name2); // bunny, vicky

// 實際上複製一份自己的值給 另一個變數，也因此當更改它的值的時候， 原始的值不會一起被更改
//-------------------------------------------------
    // Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// console.log(players);
//     // and we want to make a copy of it.
// const team = players;
// team[3] = 'Happy';  // 指向相同array 因此兩份資料皆會改變
// console.log(team);

//  複製到參考點，不是實際値 ，  更改後 原始資料不變
//     // 1.
// const team1 = Array.from(players);
// team1[3] = 'Happy1';
// console.log(team1);
// console.log(players); // 原値不變
//    // 2.
// const team2 = players.slice();
// team2[3] = 'Happy2';
// console.log(team2);
// console.log(players); // 原値不變
//     // 3.
// const team3 = [].concat(players);
// team3[3] = 'Happy3';
// console.log(team3);
// console.log(players); // 原値不變
//     // 4.
// const team4 = [...players];
// team4[3] = 'Happy4';
// console.log(team4);
// console.log(players); // 原値不變
// 以上 幾種 Array 複製方式 ：  when we update it, the original one isn't changed

//-------------------------------------------------------------------
// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};
    // and think we make a copy:
// const per2 = person;
// per2.age = 99;
// console.log(per2);
// console.log(person); // 原始値變了
//     // how do we take a copy instead?
// 1. const per3 = {...person};
// per3.name = 'Cool';
// console.log(per3);
// console.log(person); // 不變
    // We will hopefully soon see the object ...spread
// 2. const per4 = Object.assign({},person, { number : 99, ege :18});  
// console.log(per4);
// console.log(person); // 不變
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
};

// const de = Object.assign({},wes);
// de.social.twitter = '@cool';
// console.log(de);
// console.log(wes); 
// 一起變更了 , 因為 只複製了第一層 ， 當 object/array 中的項目有 object/array 時會失效

const de2 = JSON.parse(JSON.stringify(wes));
de2.social.twitter = '@cool';
console.log(de2);
console.log(wes);
// 沒有變更了
// JSON.stringify 先將 object 轉成了 string（此時原本的參考點就不復存在了）字串化
// 並透過 JSON.parse 還原
