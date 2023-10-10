let sayi=0
while (sayi == 10){
    Math.random(1,9)
    console.log(sayi)
    sayi++
}


let numbers=[]
let say=0
while(say<9){
//let deger= Math.floor(Math.random()*9+1) //1,2,3,4,5,6,7,8,9  *****************alternatif kullanım 
let deger= Math.ceil(Math.random()*9) //1,2,3,4,5,6,7,8,9
    if(numbers.includes(deger))
    {
        console.log("tekrar eden değer :",deger)
        
    }else{
        numbers[say]=deger
        say++
    }    
    
}

console.log(numbers.sort())
numbers.forEach(item =>
    {
        
    } )

//include kullan !


let numbers2=[]
let sy=0
for(let s=0;s<10;s--){
//let deger= Math.floor(Math.random()*9+1) //1,2,3,4,5,6,7,8,9  *****************alternatif kullanım 
let deger= Math.ceil(Math.random()*9) //1,2,3,4,5,6,7,8,9
    if(numbers2.includes(deger)&& deger<0)
    {
        console.log("tekrar eden değer :",deger)
        
    }else{
        numbers2[s]=deger
        sy++
    
    }    
    if(sy==9)
    {
        s=11
    }
}
console.log("ikinci yöntem",numbers2.sort())