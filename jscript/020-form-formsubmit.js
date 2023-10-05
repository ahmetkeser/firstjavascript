let formDOM = document.querySelector('#userForm')
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault() // get parametreleri adres çubuğunda çıkmaması ve sayfayı göndermeden bekler default işlemi engellendi.
    console.log("İşlem Gerçekleşti")
    let scoreInputDOM = document.querySelector('#score')
    localStorage.setItem('score',scoreInputDOM.value)
}