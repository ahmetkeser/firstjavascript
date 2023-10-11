fetch("https:///api.github.com/users").then(response =>response.json()).then(users =>{
users.forEach(user => {
    console.log(user.login)
});    

})

//https://www.youtube.com/watch?v=mcwBvvThO40&list=PLURN6mxdcwL86Q8tCF1Ef6G6rN2jAg5Ht
//enes bayram