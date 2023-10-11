let user1 ={
    firstName : "ahmet",
    lastName : "keser",
    score : [1, 2, 3, 4],
    isActive : true,
    shortName : function() {return `${this.firstName[0].toUpperCase()}.${this.lastName.toLocaleUpperCase()}`} // içersine fonksiyon gömülebilir

}
console.log(user1.shortName)
console.log(user1.shortName())

let user2 ={
    firstName : "hakkı",
    lastName : "Bulut",
    score : [1, 2, 3, 4],
    isActive : true,
    shortName : function() {return `${this.firstName[0].toUpperCase()}.${this.lastName.toLocaleUpperCase()}`}

}
let user3 ={
    firstName : "mehmet",
    lastName : "şengör",
    score : [1, 2, 3, 4],
    isActive : true,
    shortName : function() {return `${this.firstName[0].toUpperCase()}.${this.lastName.toLocaleUpperCase()}`}

}

let allusers ={user1,user2,user3}
console.log(allusers)



//  KEY - VALUE
let leptop = {
    brand : "Apple",
    model : "MacBook Pro",
    "2centry" : 2,
    modelName : "RS15"
}
console.log(leptop)

console.log(leptop.brand,"---",leptop["brand"]) // iki şekildede çağırabiliriz
console.log(leptop["2centry"])  //key adı rakamla başlamışsa sadece bu şekilde çağırabiliriz.

// Anahtar bilgisine yeni değer eklemek
leptop.brand = "Mac"
leptop["brand"] = "Mac1"    // iki şekilde de çağırabiliriz.
console.log(leptop)

// yeni key valueekleme
leptop.version = "10.2.8"
leptop["seri"]= "MSS6"  // iki şekilde giriş de uygundur.
console.log(leptop)

//Anahtar bilgilerine ulaşmak keys --->Object.keys(item)
keys = Object.keys(leptop)
console.log(keys)
console.log(Object.keys(leptop))  // iki şekilde de çağırabiliriz.

console.log("----------------")

keys.forEach(element => {
    console.log("foreach ile",element)
    console.log(leptop[element])    
});

//Değer bilgilerine ulaşmak (values) ---> Object.values(item)
console.log(
    Object.values(leptop)
)


let values = Object.values(leptop)
values.forEach(item => {
    console.log("2.foreach ile",item)  
})




