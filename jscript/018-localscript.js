// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

// bu local tutucu sayfa verilerini hafızada tutar ve
// key anahtarıyla çağırıldığında value değerini bize döndürür

// set itemle tanımlama yapılır
localStorage.setItem("key","value")

//veri okuma bu şekilde çağırılır ve value yi bize gönderir
console.log(localStorage.getItem("key"))

localStorage.removeItem("key"); // anahtarı siler daha sonra null değerine dönüşür
	localStorage.clear(); // Tüm verileri siler

    let user ={userName: "Ahmet keser ", isActive : true}
    //localStorage.setItem("userInfo",user) // Bu şekilde çağıramıyoruz
    //bunu json.string ile dönüştürmemiz lazım
    console.log(user)
   
    localStorage.setItem("userInfo",JSON.stringify(user))
    userInfo=localStorage.getItem("userInfo") // bilgi al
    userInfo= JSON.parse(userInfo)
    console.log(userInfo)

    //************************ */
    // Local Storage Islemleri:
// Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.


// 2. egzersiz:
let items = [1,2,3, user]
// localStorage.setItem('newItems', items) // hatali :(
localStorage.setItem('newItems', JSON.stringify(items))

let newItems = JSON.parse( localStorage.getItem('newItem') )
//JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..

