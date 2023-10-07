// şart olana kadar

let counter =0

while(counter<10){
    console.log(counter)
    counter +=1
}

let userName =""

while(!userName){       // kullanıcı adı girilene kadar soracak
    userName=prompt("Kullanıcı Adı Girin")
    console.log("hoşgeldin ",userName )
}