
// object tanımlama çeşitleri

let arrayObj = [1,2,3]
let object1 = {obj : 1}
console.log("arrayObj :",typeof(arrayObj))
console.log("object1 :", typeof(object1))

let item1 = new Object()        
let item2 ={}
console.log("item1 :",typeof(item1))
console.log("item2 :", typeof(item2))

let users ={
    isim : "ahmet",
    soyisim: "keser",
    tckn: "17005067860",
    "1dil" : 2,      // çok mecbur kalmadık.a key bilgisi intla başlanmamalı mecburi durumlarda bu şekilde kullanılmalı.
    dogumYeri : "Ankara" // key tanımlarken boşluklu tanım kullanılmamalı camelcase kuralları dikkate alınmalı!
}
console.log(users)
console.log(users.tckn)
console.log(users["soyisim"])   // buda ikinci bir çağırma yöntemi
console.log(users["1dil"]) // int başlayan key çağırırken bu şekilde ağırma işlemi yapılmalı aksi takdirde hata alınır!!!

//Anahtar bilgiye yeni değer ekleme
users.isim ="Mehmet"
users["soyisim"]="Kıraç" // ikinci bir kullanım şekli
console.log(users)

// Yeni Bilgi ekleme
 users.kilo =72
 console.log(users)

 // anahtar bilgilere ulaşmak (keys) --->   Object.keys(item)
 keys =Object.keys(users)
 console.log(keys)
console.log("Diğer kullanım :",Object.keys(users))


keys.forEach(element => {
    console.log(element)
});

// Değer bilgilerine ulaşmak
console.log(Object.values(users))

let values =Object.values(users)
values.forEach(item => {
    console.log(item)
    console.log(users["item"])
})