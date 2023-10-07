let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formHandler)
const alertDOM = document.querySelector('#alert')

const alertFunction = (message,clasName="")=>`
<div class="alert alert-${clasName} alert-dismissible fade show" role="alert">
<strong>Hey!</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event){
    event.preventDefault() // default işlemi engelledi sayfa göndere bastığında adres çubuğunda parametre çıkmayacak
    // let scoreInputDOM = document.querySelector('#score')
    // localStorage.setItem('score',scoreInputDOM.value)
    const USERNAME = document.querySelector('#userName')
    const SCORE = document.querySelector('#score')
    if(USERNAME.value && SCORE.value){
    addItem(USERNAME.value,SCORE.value) //gönderim işlemi
    alertDOM.innerHTML = alertFunction("Kayıt Başarılı","success")
    USERNAME.value =""      // gönderimden sonra inputları sıfırla
    SCORE.value=""
    }else{
        alertDOM.innerHTML = alertFunction("Kullanıcı Bilgileri Girilmedi","danger")

    }

}
let userListDOM = document.querySelector('#userList')
const addItem = (userName,score)=>{
    let LiDOM = document.createElement('li')
    LiDOM.innerHTML=`
        ${userName}
        <span class="badge bg-primary rounded-pill">${score}</span>
    `
    LiDOM.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    userListDOM.append(LiDOM)
}