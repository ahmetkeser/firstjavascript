function hello(msj){
    console.log(`Merhaba ${msj}`)
}
hello("DENEME")

// Aynı fonksiyonun Fet Arrow (=>) ile yapımı

const helloWorld = msj => console.log(` Merhaba ${msj}`)
helloWorld("Fet arrow deneme")
const helloChild = (msj1,msj2) => {
    console.log(`Merhaba ikili fet arrow ${msj1} ${msj2}`)
    console.log(` ${hello('Bude iç içe fonksiyon örneği')}çoklu parametre msj devamı`)
}
helloChild("kontrol-1","kontrol-2")