// Girilen sınav notunun harf karşılığını hesaplar
let succor = prompt("Sınav Notunu Giriniz :")
    
function controlSuccor(succor){    
    if (succor >=1 && succor <=100){
        if(succor>=90){
            return 'AA'
        }else if (succor < 90 && succor >= 80){
            return 'AB'
        } else if (succor < 80 && succor >= 70){
            return 'BB'
        }else if (succor < 70 && succor >= 55){
            return 'BC'
        }else if (succor < 55 && succor >= 45){
            return 'CC'
        }else if (succor < 45 && succor >= 35){
            return 'DD'
        }else if (succor < 35 && succor >= 1){
            return 'FF'
        }
    }else{
        return 'Not Girişi yapılmadı'
    }
}
console.log("Girilen Not :" +succor +" Harf karşılığı :" + controlSuccor(succor))


// Kullanıcılara özel indirimleri gösteren fonksiyon

function discount(userCustomer,spacial){
    if(spacial==11){
        console.log (`
        Merhaba Premium Müşterimiz ${userCustomer}
        Premium müşterilerimize özel %50 + 10 tl indirim ile
        Güncel Fiyat : ${productPrice=productPrice / 2 - 10} `)
    }else{
        console.log(`
        "Merhaba müşterimiz ${userCustomer}
        %50 indirimlerden yararlandınız
        Güncel Fiyat :" ${productPrice=productPrice / 2}
        Premium üyelik ayrıcalıkları için başvurmanız halinde 10 tl
        indirim daha alabilirsiniz`)
    }
}

let userCustomer = prompt("Üye Üye Adını Giriniz ")
let productPrice =100
let clasUser =["Hakan" , "Hüseyin" ,"Hakkı"]  // Kayıtlı normal Kullanıcı
writeText("KAYITLI KULLANICILAR")
writeText(clasUser[0])
writeText(clasUser[1])
writeText(clasUser[2])

let PremierCustomer =["ali" , "ahmet" , "mehmet"] // Kayıtlı Premium kullanıcı
writeText("PREMİUM KULLANICILAR")
writeText(PremierCustomer[0])
writeText(PremierCustomer[1])
writeText(PremierCustomer[2])
let spacial=""

if(PremierCustomer.includes(userCustomer)){
    spacial =11
    discount(userCustomer,spacial)
}else if(clasUser.includes(userCustomer)){
        spacial=1
        discount(userCustomer,spacial)
}else {
    console.log("Ürün Fiyatı :",productPrice," Üye olmanız halinde extra indirim alabilirsiniz")
}
function writeText (info){
    let know = document.createElement("p")
    know.textContent =info
    let tunnel = document.getElementById("promptIndex")
    tunnel.appendChild(know)

}