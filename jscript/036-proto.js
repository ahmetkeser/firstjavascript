// _proto_ KALITIM   --- protatip  var olan bir özelliği dahil ederek üstüne eklemeler yapmak [[protatip]]

let animal = {
    firstName: "İlk özellik benim"
  };
let cow = {
    lastName: "şimdi ben ilk özelliği alıp buna ekemeler yaptım"
  };
  
  cow.__proto__ = animal; // (*)     // cow miras al = animalden :D
  
  // we can find both properties in cow now:
  console.log( cow.firstName ); // true (**)
  console.log( cow.lastName ); // true


  let user ={
    firstName1 : "hakkı",
    lastName1 : "Bulut"
  }
  let silverUs={
    key : "*"
  }
  let goldUs={
    key : "**"
  }

  silverUs.__proto__= user; // silverUs user objesinden bilgileri miras aldı
  goldUs.__proto__= silverUs; // userden miras alan silver bu mirasları golda verdi.

  console.log( goldUs.firstName1 ); // true (**)
  console.log( goldUs.lastName1 ); // true

  console.log("*********************")
  // Aynı durumu içerde tanımlayabiliyoruz.   Bu daha KOLAY Ve AÇIK
  let endUser ={
    firstName1 : "hakkı",
    lastName1 : "Bulut"
  }
  let silverUser={
    key : "*",
    __proto__: endUser // end userden mirası al bana ver
  }
  let goldUser={
    key : "**",
    __proto__:silverUser // sen zaten miras aldın olsun bu beni ilgilendirmez ama sende ne varsa bana miras ver anlaşalım.
  }

    console.log(goldUser.firstName1)

    console.log("*********************")
    //*********************** */
//     Yazmak prototip kullanmaz
// Prototip yalnızca özellikleri okumak için kullanılır.

// Yazma/silme işlemleri doğrudan nesneyle çalışır.

// Aşağıdaki örnekte, kendi walkyöntemini şuna atadık rabbit:
    let animals = {
        eats: true,
        walk() {
          /* bu yöntem tavşan tarafından kullanılmayacaktır */
        }
      };
      
      let rabbit = {
        __proto__: animals
      };
      
      rabbit.walk = function() {
        console.log("Rabbit! Bounce-bounce!");
      };
      
      rabbit.walk(); // Rabbit! Bounce-bounce!
console.log("*********************")
//********************************** */
      let userA = {
        name: "John",
        surname: "Smith",
      
        set fullName(value) {
          [this.name, this.surname] = value.split(" ");
        },
      
        get fullName() {
          return `${this.name} ${this.surname}`;   // buradaki this in amacı protatipten etkilenmemesi için yazılır
        }
      };
      
      let admin = {
        __proto__: userA,
        isAdmin: true
      };
      
      console.log(admin.fullName); // John Smith (*)
      
      // setter triggers!
      admin.fullName = "Alice Cooper"; // İçine atama yaptık
      
      console.log(admin.fullName); // atama yaptığımız şekilde geldi
      console.log(userA.fullName); // miras aldığımız bölgede değişmedi !! ÖNEMLİ

      //********************** */
      // animalD has methods
let animalD = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };
  
  let rabbitR = {
    name: "White RabbitR",
    __proto__: animalD
  };
  
  // modifies rabbitR.isSleeping
  rabbitR.sleep();
  
  console.log(rabbitR.isSleeping); // true
  console.log(animalD.isSleeping); // undefined (no such property in the prototype)