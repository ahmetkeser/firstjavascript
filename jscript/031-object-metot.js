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








