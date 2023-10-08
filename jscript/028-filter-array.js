const PRODUCTS =["ali","ahmet","veli","sadi","muhammet","niyazi"]
console.log(PRODUCTS)
//dizi içersindeki karakter sayısı 4 olanları yeni bir listeye atar
const NEWPRODUCTS =PRODUCTS.filter(item=>item.length==4)
console.log(NEWPRODUCTS)


const USERS =[
    {fullName: "ahmet keser", isActive: false},
    {fullName: "HAKKI BULUT", isActive: false},
    {fullName: "sadi evren", isActive: true},
    {fullName: "kamil oduncu", isActive: false},
    {fullName: "ahsen keklik", isActive: true},
    {fullName: "ahmet dursun", isActive: false}
]
//users dizisindeki is activesi true olanları getirir
const ACTİVEUSERS=USERS.filter(item=>item.isActive==true) 
console.log(ACTİVEUSERS)


const USERSAGE =[
    {fullName: "ahmet keser", age: 11},
    {fullName: "HAKKI BULUT", age: 23},
    {fullName: "sadi evren", age: 44},
    {fullName: "kamil oduncu", age: 18},
    {fullName: "ahsen keklik", age: 7},
    {fullName: "ahmet dursun", age: 14}
]

// 18 yaşından küçükleri getirir.
const AGELIMIT = USERSAGE.filter(item=>item.age <18)
console.log(AGELIMIT)