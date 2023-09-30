let isActive = true
console.log(isActive)
    let addElement = document.createElement("li")   //li tagı oluştur
    addElement.textContent=isActive                 // içine dışardan gelen bilgiyi yerleştir
    let tunnel=document.getElementById("tunnel")    // taşıyıcı hazırla 
    tunnel.appendChild(addElement)                  // ekleme komutu ile paketi gönder
isActive = false    // sonradan değer değiştirilebilir.
console.log(isActive)

let userName;
let isUserName =Boolean(userName) // userName değişkeninin boolen değerinin atamasını yapar
console.log(isUserName)            // içi null olduğu için false değeri döndürür
Boolean("11")           //direkt atama yapılabilir. false değeri verir
// bu bizim işimize değerlerin girilip girilmediği yada çekilip çekilmediği kontrolünde işimize yarar.