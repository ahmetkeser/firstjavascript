let succor = prompt("Sınav Notunu Giriniz :")
    
function controlSuccor(succor){    
    if (succor >=1 && succor <=100){
        if(succor>=90){
            return 'AA'
        }else if (succor < 90 && succor >= 80){
            return 'AB'
        } else if (succor < 80 && succor >= 70){
            return 'BB'
        }else if (succor < 70 && succor >= 55){
            return 'BC'
        }else if (succor < 55 && succor >= 45){
            return 'CC'
        }else if (succor < 45 && succor >= 35){
            return 'DD'
        }else if (succor < 35 && succor >= 1){
            return 'FF'
        }
    }else{
        return 'Not Girişi yapılmadı'
    }
}
console.log("Girilen Not :" +succor +" Harf karşılığı :" + controlSuccor(succor))