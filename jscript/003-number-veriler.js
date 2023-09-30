function write(text){       //console.log yazısını sürekli yazmadan fonksiyon işlemi ile değer göndererek işlem yaptırır
    console.log(text)
}

function transportation(incoming){
    let postBody =document.createElement("li");    // oluşturulan yazılar için li tagı açar ve içersine yazar
    postBody.textContent= `işlem ${incoming}`;
    let tunnel = document.getElementById("tunnel")
    tunnel.appendChild(postBody)
}


let price = 11
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat :",price,
    "KDV :",tax,
    "KDV Tutari:",priceTax,
    "Toplam :",total
)
let country =200
write(`ilk değer : ${country}`)
transportation(`ilk değer : ${country}`)
country +=1 // artırma operatör
write(`ilk değer (+=1): ${country}`)
transportation(`ilk değer (+=1): ${country}`)
country ++  // artırma operatörü
write(`ilk değer (++): ${country}`)
transportation(`ilk değer (++): ${country}`)
country --  // eksiltme operatörü
write(`ilk değer (--): ${country}`)
transportation(`ilk değer (--): ${country}`)
country -=1  // eksiltme operatörü
write(`ilk değer (-=1): ${country}`)
transportation(`ilk değer (-=1): ${country}`)
country *=10  // çarpma operatörü
write(`ilk değer (*=10): ${country}`)
transportation(`ilk değer (*=10): ${country}`)

console.log("3+5+7+8 =",3+5+7+8) // içerde matematiksel işlemler yaptırılabilir.
hoder= 3+5+7+8
let valueProcess=(`3+5+7+8 = ${holder}`)
transportation(valueProcess)