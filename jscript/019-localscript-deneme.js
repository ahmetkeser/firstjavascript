//localde saklanan değer varsa bunu numbere çevirerek getirir
// yoksa 0 değerini alır.
let counter =localStorage.getItem('counter') ? Number(localStorage.getItem('counter')): 0
let counterDOM =document.querySelector("#counter")
let positiveBtn=document.querySelector("#positiveBtn")
let negativeBtn=document.querySelector("#negativeBtn")
counterDOM.innerHTML = counter

positiveBtn.addEventListener("click",clickEvent)
negativeBtn.addEventListener("click",clickEvent)
function clickEvent (){
    console.log(typeof(counter))
    console.log(this.id)
    this.id =="positiveBtn" ? counter += 1 :counter -=1  // Kısa Hali
    localStorage.setItem("counter",counter) // değeri localde saklar
    counterDOM.innerHTML = counter
    
    // bu if yapısı yukarda fat arrow ile kısa yapılmıştır
    // if(this.id == "positiveBtn"){
    //     counterDOM.innerHTML = counter += 1
    // }else{
    //     counterDOM.innerHTML = counter -= 1
    // }
}




// for döngüsü ile dizileri key value eşleştir ve butonlara tanımlayarak 
// bir çalışma yapılacak
//    let ingClass =["abouth","above","across","action","activity","actor"]
//  let trClass =["hakkında","üzerine","karşıya","çalışma","etkinlik","aktör"]
//    localStorage.setItem("abouth","hakkında")