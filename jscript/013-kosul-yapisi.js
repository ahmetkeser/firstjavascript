let userName = prompt("Kullanıcı Adını Giriniz :")

if (userName.length > 0){
    console.log(`Girilen kullanıcı adı : ${userName}`)
} else{
    console.log("Kullanıcı adı girilmedi  ...")
}

let userAge = prompt("Kullanıcı Yaşı :")
if (userName.length > 0){
    if (userAge > 0){
        if (userAge >= 18){
            console.log("Kayıt Tamamlandı")
        }else{
            console.log("Kullanıcı 18 yaşında veya büyük olmalıdır ...")
        }
    } else {
        console.log("Kullanıcı yaşı girilmedi")
    }
}else {
    console.log("Kullanıcı adı girilmedi!")
}

/// TERNARY OPERATÖRÜ      koşul ? doğruysa bunu yap : yanlışsa bunu
let firstCaryy = prompt("Bir sayı gir")
console.log(` ${firstCaryy %2 == 0  ? "Sayı Çift" :"sayı Tek"}`)