// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events


// fat arrow fonksiyonu ile atta tanımlanan tiktok fonksiyonu aynı
// fat arrow fonksiyonu kullanmadan önce tanımlanmalı yoksa hata veriyor diğer fonksiyon bu dura duyarlı değil.

//const tiktok = () => console.log("TIKLANDI")

let greeting = document.querySelector("#promptIndex")
// greeting.addEventListener("click", tiktok) // tıklandığında yapılacak işlem

// function tiktok() {
//     console.log("TIKLANDI")
//     this.style.color == "red" ? this.style.color = "blue" : this.style.color = "red"  // tıklandığındaki işlem
    
// }

greeting.addEventListener("mouseover",ontiktok) // yazının üstüne gelindiğinde 
function ontiktok() {
    console.log("TIKLANDI")
    this.style.color == "red" ? this.style.color = "blue" : this.style.color = "red"  // tıklandığındaki işlem
    
}