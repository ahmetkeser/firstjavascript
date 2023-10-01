
function addMan (carryText){
    let userName = document.createElement("p")
    userName.textContent = "Kullanıcı Adı : "+ carryText
    let homeDiv =document.getElementById("inputSet")
    homeDiv.appendChild(userName)
}

const domain ="carry.com"
let userTe =(prompt("Kullanıcı adını giriniz :").split(" ")).join("").toLowerCase() // girilen metinde kullanıcı adında boşluklar varsa siler
addMan("size tahsis edilen mail adresi :")
addMan(userTe+"@"+domain)



// Fonksiyonsuz Kullanım için hazırlandı.
//        let userName = document.createElement("input")  // input tagı oluştur
//        serName =document.getElementById("inputSet")   //inputSet id li elementi getir
//        userName.textContent = "Kullanıcı Adı : "+ prompt("Kullanıcı adınızı giriniz").toUpperCase()
//          ^ bu elementin yazı kısmına  promt ile alınan değeri modifiye ederek ekle
//          userName.appendChild(inputSet) // oluşturulan bilgileri html bölümünde id si inputSet olana gönder.

let firstname ="Ahmet"
let lastname ="KESER"
const DOMAIN="denemejs.com"
const DOMAIN2=DOMAIN.replace('denemejs','gmail') // mevcut domain adresinden başka bir adres türetildi
let email=firstname.toLowerCase() + lastname.toLowerCase() + "@" + DOMAIN //Kullanıcı isim soyisim ile domain uzantılı e  mail üret
console.log(email)
console.log(`              
kullanıcı ${firstname} sana tahsis edilen ${DOMAIN} adresiniz
${email}
`) //^Template Literals kullanımını pekiştir^
console.log(`
${DOMAIN.slice(0,DOMAIN.indexOf("."),).toUpperCase()} Tarafından 

${DOMAIN.slice(DOMAIN.indexOf("."),)} uzantılı adresiniz değiştirmek isterseniz
// ^Vurada tanımlı bilginin . ya kadar olan kısmından sonrasını alır sonuna kadar yazdırır

seçenekler
* ${lastname.toLowerCase()+firstname.toLowerCase()+"@"+DOMAIN}
** ${firstname.toLocaleLowerCase()+lastname.toLowerCase()+"@"+DOMAIN2}
***${lastname.toLowerCase()+firstname.toLowerCase()+"@"+DOMAIN2}
****${firstname[0].toLowerCase()+lastname.toLowerCase()+"@"+DOMAIN2}
*****${firstname.toLowerCase()+lastname[0].toLowerCase()+"@"+DOMAIN2}
`)
console.log(`
>>>>>>>>>"${DOMAIN.slice(DOMAIN.indexOf("."),)}`)