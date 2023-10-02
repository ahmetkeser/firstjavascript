// ************* KARŞILAŞTIRMA OPERATÖRLERİ *************

// == OPERATÖRÜ İÇERİK KONTROLÜ YAPAR BOOLEAN TÜRÜNDE DEĞER DÖNDÜRÜR
let price = "100"
console.log(price == 1)     //False
console.log(price == 100)   //True

//  === OPERATÖRÜ HEM İÇERİK HEM TÜR EŞİTLİĞİ KONTROLÜ YAPAR
console.log(price === 1)    // False
console.log(price === 100)  // False
console.log(price === "100")   // True

// != EŞİT DEĞİLSE
console.log(price != 1)     // True
console.log(price != 100)   // Fale
console.log(price !== "100") //False

// < Küçükse
console.log("price < 100", price < 100) // False

// <= Küçük veya eşitse
console.log("price <= 100", price <= 100)   // True

// > Büyükse
console.log("price > 200", price > 200)     // False

// >= Büyük veya eşitse
console.log("price >= 100", price >= 100)   // True

user = "guest" 
// && VE    İki koşuluda sağlamalı
price = 1
console.log( price > 0 && user != "guest" )     // False
console.log(price > 0 && user == "guest" )      // True

// || VEYA   iki koşuldan birini sağlaması yeterli
console.log( price > 0 || user != "guest" )     // True

// ! degil (tersi)
user = "guest" 
price = 1
console.log( price > 0 && !user == "guest" )        // false
console.log( !user == "asdasd" ) 
console.log(!!2)