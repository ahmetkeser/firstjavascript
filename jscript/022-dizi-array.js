// array liste oluşturma
let domain ="hotmail"
let isActive = false
let items =[15, 22, 23, isActive, domain]
console.log(items)

let emptyArray =[] // boş liste tanımlanır

// array içersindeki eleman sayısını öğrenme
console.log(items.length)

//ilk elemana ulaşmak
console.log("dizinin ilk elemanı : ",items[0])
//son elemana ulaşmak
console.log("dizinin son elemanı :",items[items.length-1])
// içindeki bilginin array olup olmadığını kontrol
console.log(typeof(items)) // object olarak çıktı veriyor.
console.log(Array.isArray(items)) // (true) arraymıdır diye sorabiliriz boolean dönüş yapar


// array sona eleman ekleme -->push
console.log(items)
items.push(50)
console.log("sona 50 eklendi :",items)
// array başa eleman ekleme -->unshift
items.unshift(41)
console.log("başa 41 eklendi :",items)
// array sondaki öğreyi çıkar -->pop      items.pop()şeklinde direk çıkarır
let lastItem=items.pop()
console.log("Sondaki elemanı çıkardı :",items," çıkarılan eleman :",lastItem)

// baştaki elemanı çıkar -->shift  items.shift()
let firstItem =items.shift()
console.log("Sondaki elemanı çıkardı :",items," çıkarılan eleman :",firstItem)
// array içersindeki bir elemanı değiştirme
items[2]=223
console.log("dizinde 3 eleman 22 yi 223 olarakdeğiştirdik :",items)

// son elemanı değiştir
