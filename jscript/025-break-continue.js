let divide ="Lorem ipsum dolor sit amet"
const loremList=[divide.split(" ")] // slip yazıyı boşluklarla böler ve dizi oluşturur
console.log(loremList)
console.log(loremList[2])


const LOREM_LİST =['Lorem', 'ipsum', 'dolor', 'sit', 'amet']
let counter =0

// for(;counter<10;counter++){
//     console.log(counter)
//     if(counter ===5 ){break}
// }

// for(;counter<10;counter++){
//     if(counter ===5 ){continue} // 5 olduğunda atlar yazmadan bir sonrakine geçer
//     console.log(counter)
// }

const ulDOM=document.querySelector('#userList')
let index =0
// for(;index<LOREM_LİST.length;index++){
//     if(LOREM_LİST[index] == "dolor"){break} // dolar elemanını gördüğünde döngüden çıkar
//     let liDOM =document.createElement('li')
//     liDOM.innerHTML=LOREM_LİST[index]
//     ulDOM.appendChild(liDOM)
// }

for(;index<LOREM_LİST.length;index++){
    if(LOREM_LİST[index] == "dolor"){continue} // dolar elemanını gördüğünde bir sonraki işleme atlar
    let liDOM =document.createElement('li')
    liDOM.innerHTML=LOREM_LİST[index]
    ulDOM.appendChild(liDOM)
}