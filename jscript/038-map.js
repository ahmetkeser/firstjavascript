const map1 = new Map();

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
