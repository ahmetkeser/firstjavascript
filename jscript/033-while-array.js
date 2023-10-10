let numbers=[]
let say=0
while(say<8){
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

console.log(numbers.sort()) // listeyi küçükten büyüğe sıralar

//include kullan ! dizi içinde varmı yokmu taraması yapar
