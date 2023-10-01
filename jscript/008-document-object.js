// DOM

// pathname
console.log(document.location.pathname)

// head icindeki bilgiler
console.log(document.head)

// body icindeki bilgiler
console.log(document.body)

// url bilgisi
console.log(document.URL)
console.log(document.baseURI)


// document icerisinde style bilgilerini degistirmek:
// css bilginizle birlikte style yapisi uzerinde duzenlemeler yapabiliriz
document.body.style.backgroundColor = "#407088"

//****************************etiket ve id ile öğe seçimi */
// let h2 = document.getElementsByTagName('h2')
let topStar = document.getElementById('start') // html alanında id si star olan parametreyi iç bilgileri ile beraber getirir.
console.log("orjinal çekilen iç bilgi :"+topStar.innerHTML)
topStar.innerHTML = "Degisen Bilgi"  // burada oluşturulan değişim html alanında yapılmış gibi çıktıya yansır.
console.log(topStar.innerHTML)

let mndStar = document.querySelector("li#star>a")
mndStar.innerHTML += " gelen metin"
mndStar.style.color = "pink"
mndStar.classList.add('btn')