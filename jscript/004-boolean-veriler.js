let isActive = true
console.log(isActive)
    let addElement = document.createElement("li")   //li tagı oluştur
    addElement.textContent=isActive                 // içine dışardan gelen bilgiyi yerleştir
    let tunnel=document.getElementById("tunnel")    // taşıyıcı hazırla 
    tunnel.appendChild(addElement)                  // ekleme komutu ile paketi gönder
isActive = false    // sonradan değer değiştirilebilir.
console.log(isActive)
// --------------Var Yok Kontrolü--------
//--------------- 0(false)    1(true) --------------
let userName;
let isUserName =Boolean(userName) // userName değişkeninin boolen değerinin atamasını yapar
console.log(isUserName)            // içi null olduğu için false değeri döndürür
 //direkt atama yapılabilir. false değeri verir
// bu bizim işimize değerlerin girilip girilmediği yada çekilip çekilmediği kontrolünde işimize yarar.

userName ="user"
console.log("User Name var mı:",Boolean(userName))
Boolean(9<4)  // false
Boolean("11") // true
Boolean("0") // true
Boolean("") // false

userName = "user"

// 0 ,-0, null, false, NaN, undefined, ("") ->
Boolean(0) //  false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true

// Not: Karar Yapilari Kisminda Tekrar Anlatilacak
Boolean(userName.length > 0) // true

