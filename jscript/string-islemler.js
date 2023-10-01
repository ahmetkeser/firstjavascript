// ********** String Veri Turu Islemleri ********** 


let firstName = "ahmet"
let lastName = "KESER"
let email = firstName + lastName+"@gmail.com"

// string karakter sayisi -> length
console.log( email.length )

// Ilk Karakteri Bulmak -> [0]:
console.log(firstName[0])
console.log(firstName.charAt(0))

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase() //Büyük harf yapar
console.log(firstName)              

firstName = firstName.toLowerCase() //Küçük harf yapar
console.log(firstName)
firstName= firstName[0].toUpperCase()+firstName.slice(1,) // Başharfini büyük diğerlerini küçük yazar
console.log(firstName)
// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(email.search("@"))
console.log( email[15] )

email.search('olmayan') // olmayan terim aratılırsa geri döndereceği değer -1

// belli bir yere kadar al -> slice :  (domain bilgisi)
let DOMAIN = email.slice( email.search("@") + 1) // @ işaretinden +1 dediği için sonrasını yazdıracak 
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.') )  // sadece gmail kismini aldik
)

// bilgiyi degistir -> replace :
email = email.replace('gmail.com', 'hotmail.org')
console.log(email)

// istedigim bilgi var mi ? -> includes :
email.includes('dkfhsd') // false içeride itenen karakteri arar boolean tarzında dönüş yapar.
email.includes('@') // true

// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(
    email.endsWith('resmi.org')
)

//  Ilk Harflerini Buyuk Yapmak tüm karakterleri denetler
// 21. satırda daha basite indirgenmişi var
firstName = "FIRST"
lastName = "LAST"
let fullName = `${
firstName[0].toUpperCase()+
firstName.slice(1).toLowerCase()+" "+
lastName[0].toUpperCase()+
lastName.slice(1).toLowerCase()
}
`
console.log(fullName)
