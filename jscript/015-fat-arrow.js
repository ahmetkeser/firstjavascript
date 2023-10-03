function hello(msj){
    console.log(`Merhaba ${msj}`)
}
hello("DENEME")

// Aynı fonksiyonun Fet Arrow (=>) ile yapımı

const helloWorld = msj => console.log(` Merhaba ${msj}`) //gönderilen 1 veri ise paranteze gerek yok
helloWorld("Fet arrow deneme")                           // işlem yapılacak bölüm bir satır sa => den
const helloChild = (msj1,msj2) => {                      //sonra süslü paranteze gerek yok FAZLA İSE KULLAN
    console.log(`Merhaba ikili fet arrow ${msj1} ${msj2}`)
    console.log(` ${hello('Bude iç içe fonksiyon örneği')}çoklu parametre msj devamı`)
}
helloChild("kontrol-1","kontrol-2")