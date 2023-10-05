let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formHandler)

function formHandler(event){
    
    event.PreentDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')
    AddItem(USER_NAME.value, score.value)
}

let userLıstDOM = document.querySelector('userLıst')

const AddItem =(userName, score) =>{
    let liDOM = document.createElement('li')
    liDOM.innerHTML(`${userName} ${score}`)
    userLıstDOM.append(liDOM)
}











{/* <li class="list-group-item dflex justify-content-between align-items-center">
                            asdasdasdas
    <span class="badge bg-primary rounded-pill"></span>
</li> */}