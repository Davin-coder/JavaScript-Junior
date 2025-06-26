
// let numeros = [3,4,5,6,7,8,9,10];
// console.log(numeros);

// numeros = new Set();

// numeros.add(1);
// numeros.add(2);

// console.log(numeros);

// myMap = new Map();

// myMap.set("key", "value");
// myMap.set("key2", "value2");

// console.log(myMap);

const arrayAnimales = ["perro", "gato", "elefante", "jirafa", "tigre", "leon", "mono", "ballena", "serpiente", "oso"];
animalesMap = new Map();

for (i in arrayAnimales){
    animalesMap.set(i, arrayAnimales[i]);
}
console.log(animalesMap);