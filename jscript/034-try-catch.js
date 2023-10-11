// HATA YÖNETİMİ İÇİN KULLANILIR.

let items 
try {       // burada takılabilir fakat devam etmesini sağlamalıyız
    items.forEach(element =>console.log(element))    // kodu dene 
} catch (error) {
    console.log("Alınan hata:",error)   // hata alırsa bura çalışır
}

console.log("Hata Yönetimi Devrede")    // hata alsada çalışmaya devam eder


        