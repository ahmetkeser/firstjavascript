let counter =0
let counterDOM =document.querySelector("#counter")
let positiveBtn=document.querySelector("#positiveBtn")
let negativeBtn=document.querySelector("#negativeBtn")
counterDOM.innerHTML = counter

positiveBtn.addEventListener("click",clickEvent)
negativeBtn.addEventListener("click",clickEvent)
function clickEvent (){
    console.log(typeof(counter))
    console.log(this.id)
    if(this.id == "positiveBtn"){
        counterDOM.innerHTML = counter += 1
    }else{
        counterDOM.innerHTML = counter -= 1
    }
   // this.id =="positiveBtn" ? counter += 1 :counter -=1  // Kısa Hali
   //     counterDOM.innerHTML = counter
}