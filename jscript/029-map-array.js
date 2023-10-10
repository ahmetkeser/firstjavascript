const USERS =["AHMET","Ali","AyŞe","NaLAN"]
const NEW_USERS = USERS.map(item =>item.toLowerCase())
console.log(NEW_USERS)

// ismi orjinali ile al 
//daha sonra ilk harfinial ve nokta koy
//son olarak baş harfi büyük diğerleri küçük şekilde bir dizi oluştur
//{userName: 'Ali', shortName: 'A.', newName: 'Ali'}
const USER_OBJ = USERS.map(item =>
    { 
        return {
            userName : item, shortName : `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
        }
    }
    )

    console.log(USER_OBJ)
//*************************************************************************************** */
    const USERSAGE =[
        {fullName: "ahmet keser", age: 11},
        {fullName: "HAKKI BULUT", age: 23},
        {fullName: "sadi evren", age: 44},
        {fullName: "kamil oduncu", age: 18},
        {fullName: "ahsen keklik", age: 7},
        {fullName: "ahmet dursun", age: 14}
    ]
    
    // 18 yaşından küçüklerin soyadlarını alır Büyük harf yapar getirir
    const AGELIMIT = USERSAGE.filter(item =>
        {
            return item.age >= 18 // 18 den büyük kişiler gelir
        }).map(us =>{
            const ENDLIST =(us.fullName.split(" ")) // gelen kişilerin ad soyad bölümünü ayırır
            const KLLIST =ENDLIST[1].toUpperCase()  //ayırdığı soyadı index[1] de tuttuğu için onları ayrı bir diziye atar
            return KLLIST
        })
        console.log(AGELIMIT)