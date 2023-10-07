let items =[1, 2, 3, 4, 5]

//array içine array
let femaleUsers =["Ayşe", "Hülya", "Merve"]
let maleUsers =["ahmet", "Hasan", "Mehmet"]

// başına eleman ekle
items.unshift(femaleUsers)
console.log(items)
//sona eleman ekle
items.push(maleUsers)
console.log(items) 
console.log(`
iç içe elemanlar 1 eleman olarak görülür
son eleman sayısı : ${items.length} adet
`)

// iç içe elemanların sayısını öğrenme
console.log("ilk iç array eleman sayısı :",items[0].length)
console.log("dizi son hali :",items)
//array içersindeki öğeleri ayırma splice(pos,item)
let newItem = items.splice(1,5) //2. indexten başla 4 eleman al
console.log("yeni dizi :",newItem)
console.log("eski liste :",items)

// array içersindeki öğrenin index bilgisini bul indexof('value')
items.unshift("lorem") //dizinin başına ekle
items.push("ipsum")      // dizinin sonuna ekle
console.log("ipsum elemanının dizideki indexi :",items.indexOf("ipsum"))

//array kopyalama --> slice ile yapılmalı aksi takdirde değişiklikler 
// ilk kopyalanan diziyide etkiler
let copyItems = items.slice()   //1. yöntem
let copyItems2= [...items]      //2. yöntem

// birden fazla arrayı birleştir
let allUsers =[...femaleUsers,...maleUsers]
console.log(`
birleştirilen kadın ve erkek kullanıcı listesi :
${allUsers}`)

// array içersindeki bilgiyi stringe çevirme tostring , join
console.log(allUsers.toString())
console.log(allUsers.join(" --- ")) // istenilen yapıda sunar 

// istenilen indexe eleman ekleme --> splice(index , 0 ,value)
allUsers.splice(allUsers.length-1, 0, "Melissa") //sondan bir önceki elemana ekle
allUsers.splice(Math.floor(allUsers.length /2),0,"ortanca") // ortaya eleman ekleme
console.log(allUsers)