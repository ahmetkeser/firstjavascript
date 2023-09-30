var serverName1 = "---Server Name--- (var) "
console.log(serverName1)

let serverName2 ="***Server Name (let)"
console.log(serverName2)

let serverName3 ="V 3.1"        
console.log(serverName2,serverName3) //let değişkenlerininin birleştirilebilir özelliği

console.log(serverName2,serverName3,".1") //consol.log içersinde operatörlerle işlemler yapılabilir.

serverName2 +=" tanımlanan bilgi sonradan müdehale ile değişim***" // önceden tanımlı değişkene müdehale edebiliyoruz.
console.log(serverName2)

const PASSWORD="const değiştirilmemesi gereken bilgi DEĞİŞKEN İSMİ BÜYÜK HARFLE YAZILARAK KURALLARA UYULMALI"
// PASSWORD += "asdas"              Cosnt ile tanımlanan bilgiler değiştirilemez, ekleme çıkarma yapılamaz
// console.log(PASSWORD)            boş tanımlanıp sonradan eklemede yapılamaz !
console.log(PASSWORD)