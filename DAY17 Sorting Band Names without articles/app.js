//  Array.sort() 排序一個Array，
//  但是排序不考慮 "The"、"An"、"A" 這些字眼

const bands = ['The Plot in You', 
                'The Devil Wears Prada', 
                'Pierce the Veil', 
                'Norma Jean', 'The Bled', 
                'Say Anything', 
                'The Midway State', 
                'We Came as Romans', 
                'Counterparts', 
                'Oh, Sleeper', 
                'A Skylit Drive', 
                'Anywhere But Here', 
                'An Old Dog'
];
// let sortband = bands.sort(); 
// console.log(sortband); // 按字母排列

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}  // 回傳新字串 
// console.log(strip('an old dog')); // old dog


// const sortedbands = bands.sort(function(a, b){
//     if(strip(a) > strip(b)){
//         return 1;
//     }else{
//         return -1;
//     }
// });
const sortedbands = bands.sort((a, b) => (strip(a) > strip(b)? 1: -1));
// console.log(sortedbands);

document.getElementById("bands").innerHTML = sortedbands
    .map(band => `<li>${band}</li>`)  // 建立新陣列
    .join("");