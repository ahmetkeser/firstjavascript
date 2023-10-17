// Yöntemler ve özellikler şunlardır:

// new Map()– haritayı oluşturur.
// map.set(key, value)– değeri anahtarla saklar.
// map.get(key)undefined– eğer keyharitada mevcut değilse , değeri anahtara göre döndürür .
// map.has(key)– truevarsa key, falseyoksa döndürür.
// map.delete(key)– öğeyi (anahtar/değer çifti) anahtarla kaldırır.
// map.clear()– haritadaki her şeyi kaldırır.
// map.size– geçerli öğe sayısını döndürür.
// const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('c', 7);// aynı değeri iki kez tanımlarsak son değer geçerli sayılacaktır 
                // fakat eleman denetimi yapıldığında bu girişleri tek bir giriş sayacaktır
map1.set('d',8);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b'); // b keyi silindi

console.log(map1.size);
// map değer uzunluğu
console.log(map1.get('c'));
map1.forEach(element => console.log(element)) // key değerlerini getirir


// ekleri düzenle
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
console.log(contacts)



const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
myMap.set(2, "three");
/**************************************** */
//              FOR
for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

for (const key of myMap.keys()) {
    console.log(key);
}
for (const value of myMap.values()) {
    console.log(value);
}
for (const [key, value] of myMap.entries()) {
    console.log(`${key} = ${value}`);
}
  /*************************************** */
  //            FOREACH
  myMap.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });