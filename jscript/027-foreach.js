const cars =["bmw","mercedes","Audi","honda","hundai","kia","fiat"]

cars.forEach(item => console.log(item))
// dizi içersinde dögü yapısı daha kolay
    //cars.forEach((item,index,array)  =>console.log(array[index]))
    // düşündürücü ama üsteki ile aynı yapı

//cars.forEach((item,index) => console.log(item,index)) 
// index numarası ile getirir

//cars.forEach((item,index,array) => console.log(item,index,array)) 
// eleman , index,ve tüm liste her seferinde gelir

//içine müdehale etmeden çıktısı üzerinden oynar
//cars.forEach(item => console.log((item)= item +"---"))
//console.log(cars)

//içeri müdehale ederek istenen yapıyı kalıcı olarak değiştirir ve yazdırır
cars.forEach((item,index,array)  =>console.log(array[index]=item + "-----"))
console.log(cars)
cars.forEach(item => console.log(item))

//bu da yazdırma işlemi yapmadan yapı üzerinde değişikliği sağlar
cars.forEach((item,index,array)  =>array[index]=item + "++++")
console.log(cars)

cars.forEach((item,index,array)  =>console.log(array[index].toUpperCase()))
//büyük harfe çevirdi ama içeri işlemedi
console.log(cars)

// büyük harfe çevirdi ve içeriğe işledi
cars.forEach((item,index,array)  =>console.log(array[index]=`${item.toUpperCase()}`))
console.log(cars)



//userlist id li elemanın bir kopyasını yap
// for each ile döngüyü oluştur
//döngü içersinde bir li yapısı oluştur içine döngüden gelen bilgiyi yerleştir
//içeriği enjekte et
//son yapıyı kopyalanan userlist id li yapıya gönder
const addArrayCopy=document.querySelector('#userList')
cars.forEach(item => {
    const addArrayDOM= document.createElement('li')
    addArrayDOM.innerHTML=item
    addArrayCopy.appendChild(addArrayDOM)
})
