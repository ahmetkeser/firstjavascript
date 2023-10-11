// object Destructuring     
let settings ={
    userName : "Lorem İpsum",
    password : "BadPassword",
    isActive : true,
    ip : "127.0.0.2",
    serverName : "hotmail.com"

}
console.log(settings)

//object içersindeki bilgilerin tek seferde çıkarılması
// 1
//      let firstUserName =settings.userName
//      console.log(firstUserName)

//2
        // console.log("----- object içersindeki bilgilerin tek seferde çıkarılması -----")
        // let {userName,password,isActive,ip,serverName}=settings
        // console.log(userName,password,isActive,ip,serverName)   // verilen keylerin içeriğini yazar

        // console.log(settings)   // objenin tamamını keyler ile birlikte yazar

        // console.log(password) // objeyi çağırmadan keyi ile iç bilgisini yazar bu destructurin sayesinde

// objeyi destructurin ile alırken keyleri değiştirebiliriz
let {userName:lastName, password :firstPassword, ip:ServerIP, ...newSettings} = settings // destructuring işlemi ile : yardımı ile key adını değiştirebildik ve ... ile geri kalan bilgileri bir dizide topladık
console.log(settings)
console.log(lastName)
console.log(newSettings) // ...yeniGrup ile atama yapılan ve boşta kalan diğer bilgileri buraya çektik
console.log(settings.userName)

// object içersindeki bazı bilgileri çıkarılması
let {userName:lastName2, password:firstPassword2,ip:ServerIP2, ...newSettings2} = settings
console.log(lastName2,firstPassword2,ServerIP2,newSettings2)

// objenin destructuring ile kopyalanması

//hatalı kullanım
    // let settings2 =settings // kopyalama işlemi gerçekleşmiyor
    // settings2.userName ="Değişen Bilgi"
    // console.log(settings)
    // console.log(settings2)
//Doğrusu
let settings2 = {...settings} // settings deki verileri çıkart kopyala ve settings2 ye kopyala

    settings2.userName ="Değişen Bilgi"
    console.log(settings)
    console.log(settings2)

// object kopyalama ile aynı ...let settings2 = {...settings}
let score =[100,200,300,400]
let [score1,score2, ...otherScore] = score 
console.log(score1,score2,otherScore)
let copyOfScore=[...score]
console.log(copyOfScore)