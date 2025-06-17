# ¿Que es JavaScript?

JavaScript es un lenguaje de programación de alto nivel principalmente usado para el diseño web agregandole dinamismo a la interaccion entre el usuario y una pagina web.

Es usado tambien en distintas tecnologias Frontend como Angular, React o Vue.js y como tecnologias Backend tenemos a NodeJS.

### JavaScript cuenta con las siguientes cualidades:

- Lenguaje interpretado: no necesita ser compilado para poder ejecutarse, si no que el propio navegador lo interpreta.

- Lenguaje orientado a objetos: abarca muchas de las funcionalidades que tienen los lenguajes orientado a objetos ( uso de clases, herencia, polimorfismo...).

- Lenguaje imperativo: el codigo se ejecutará linea por linea hasta llegar al final o se detenga por un error en el camino.

- Lenguaje Case Sensitive: es sensible al uso de mayusculas o minusculas en el codigo.

- Lenguaje basado en prototipos

- Lenguaje tipado debil

- Configurado en ECMAScript: es la version con la que trabajaremos con el codigo y las funcionalidades de esta version.

## Variables

### ¿Que es una variable?

Una variable como su nombre lo dice, se refiere a un tipo de dato donde su valor o contenido puede variar con el tiempo, es decir, no tiene un valor fijo y esta sujeto a cambios.

### Tipos de variables

JavaScript consta con distintas variables que podemos usar en nuestro codigo que son:

- `String`: son variables que contienen cadenas de texto.

- `Number`: variables que contienen numeros de cualquier tipo, como decimales o enteros.

- `Boolean`: variables cuyo valor varia entre True (verdadero) o False (falso).

### ¿Como se declara una variable en JavaScript?

Para declarar una variable en JavaScript primero tenemos que tener en cuenta varios conceptos como el "**Scope**" que viene siendo lo que es el alcance que una variable va a tener en todo nuestro codigo y que ese alcance varia segun el metodo como declaramos nuestra variable.

contamos con tres metodos principales para declarar una variable que son:

- `Var` : antes de ECMAcript 6 se usaba mucho el metodo var para declarar variables, en la actualidad no es muy usado ya declara variables globales, es decir, se pueden usar en todo el codigo.

- `Let` : la forma mas usada y mas recomendable para declarar variables, aunque su alcance sea de tipo bloque no importará si sabemos usarla como se debe, ademas que hace nuestro codigo mas intuitivo.

- `Const` : se declara una variable que es constante, es decir, su valor no se puede cambiar una vez lo hayamos definido, y tiene un alcance de bloque.

## Operadores

JavaScript tiene operadores binarios y unarios, y un operador ternario especial, el operador condicional. Un operador binario necesita dos operandos, uno antes del operador y otro después de este. `Por ejemplo 4+7`

Un operador unario requiere solamente un operando antes o después del operador. `Por ejemplo x++`

### Operadores aritméticos
---
Los operadores aritmeticos son los que nos permiten hacer calculos simples como resta o multiplicacion.

![Operadores-Aritmeticos-img](img/Operadores-Aritmeticos.png)

### Operadores de comparación
---
Son aquellos que nos permiten comparar dos variables entre si y lanzar una respuesta según el resultado de esa comparación.

![Operadores-Comparacion-img](img/Operadores-Comparacion.png)

### Operadores Asignación
---
Los operadores de asignación son aquellos que usamos para agregarle o cambiarle el valor a una variable ya existente.

![Operadores-Asignacion-img](img/Operadores-Asignacion.png)

### Operadores Lógicos
---
Son aquellos que retornan un valor Booleano apartir de que se cumpla (o no) una condición.

![Operadores-logicos-img](img/Operadores-Logicos.png)

## Condicionales

Los condicionales son estructuras que permiten tomar decisiones en el codigo, ejecutando un bloque si esta se cumple o no.

En JavaScript contamos con tres principales formas de usar condicionales que son:

- `if` : ejecuta un bloque de codigo si la condicion es verdadera.
```javascript
let numero = 5;
if (numero > 0){
    console.log("tu numero es mayor a 0");
};
```
- `else if` : ejecuta un bloque de codigo si la condicion anterior no se cumple.
```javascript
let numero = -5
if (numero > 0){
    console.log("tu numero es mayor a 0");
}else if (numero < 0){
    console.log("tu numero es menor a 0");
};
```
- `else` : ejecuta un bloque de codigo solo si ninguna condicion se cumple, usado mas que nada para manejar casos mas alla de nuestro alcance.

```javascript
let numero = "hola";
if (numero >= 0){
    console.log("tu numero es positivo");
}else if (numero < 0){
    console.log("tu numero es negativo");
}else{
    console.log("el dato ingresado no es un numero");
};
```

## ARRAYS

### ¿Que es un "array"?

Un "array" o arreglo es una estructura de datos que almacena una colección de elementos, generalmente del mismo tipo, cuyo elemento se puede acceder mediante el indice o posicion que este ocupa dentro del array.

### ¿Como se declara un array?

Tenemos distintas formas para declarar nuestro array, la mas utilizada y recomendada es por medio de la declaracion Let, como si estuvieramos declarando una variable, solo que los elementos que contendra nuestra array deben estar dentro de corchetes ( [ ] ).

```javascript
let array = ["elemento1", "elemento2", "elemento3"];
```

Cada elemento ocupara una posicion en nuestra array que será identificada por un indice, comenzando por 0 como inicio de nuestra array.

Para acceder a los elementos se haria de la siguiente manera:

```javascript
let frutas = ["manzana","pera","mango"];
console.log(frutas[1]);//muestra en consola "pera"
```

En el debido caso que no queramos acceder mediante indices podemos simular un **"array asociativo"** donde podremos acceder a los elementos usando una clave.

En JavaScript podemos simular un array asociativo con el uso de objetos de la siguiente forma:

```javascript
let camioneta = {
    marca: "ford",
    traccion: "4x4",
    espacioEnCabina: "doble"
};
console.log(camioneta["marca"]); //muestra en consola el valor de la clave "marca" que seria "ford"
```

## Bucles

Los bucles son aquellos ciclos que ejecutaran un bloque de codigo simultaneamente hasta que nosotros se lo indiquemos por medio de una condicion (o simplemente se ejecuten infinitamente).

Dentro de estos encontraremos los siguientes:

- `while`: Ejecuta un bloque de codigo si la condicion es verdadera, cabe aclarar que tenemos que darle un alto al bucle para que no se ejecute infinitamente y de errores a futuro.
    ```javascript
    let ciclo = 10;
    //imprime en consola un conteo del 10 al 0
    while (ciclo >= 0){
        console.log(ciclo);
        ciclo--;
    };
    ```

- `for`: Ejecuta un bloque hasta que una condición especificada se evalúe como falsa, la diferencia con el bucle *while* radica que el bucle *for* se basa en una estructura ya definida donde nosotros especificamos, una variable de inicializacion, la condicion, y una expresion por iteracion.
    ```javascript
    for ([inicializacion]; [condicion]; [expresionPorIteracion]){
        codigo a ejecutar
    }
    ```
    *ejemplo practico:*
    ```javascript
    //imprimirá en consola un conteo del 10 al 0
    for (let i = 10; i > 0; i--){
        console.log(i);
    };
    ```

- `for in / for of`: Ambos son principalmente usados para iterar sobre los elementos de un objeto como arrays, strings o maps, la diferencia es que el `for in` itera sobre el indice de los elementos dentro de un objeto mientras que `for of` trabaja con el valor de esa misma posicion.

    *for in*
    ```javascript
    let animales = ["perro", "gato", "mapache"];
    for (animal in animales){
        console.log(animal);//devolvera el indice
    };
    ```
    *for of*
    ```javascript
    let animales = ["perro", "gato", "mapache"];
    for (animal of animales){
        console.log(animal);//devolvera el valor
    };
    ```
### Sentencia `continue`

Una sentencia es una instruccion que se le da a un proceso para alterar su flujo en la ejecucion, en los bucles podemos usar sentencias para alterar el comportamiento en los ciclos de nuestro bucle, una de las sentencias mas utilizadas es "*continue*".

Esta instruccion se encarga de que el bucle, llegado hasta cierto punto se reinicie, ignorando lo que le sigue y volviendo a empezar, como si le dijeran a un corredor a mitad de la carrera "ve al punto de partida, pero devolviendo tus pasos", esto se usa mas que nada cuando queremos ignorar porciones de codigo de nuestro bucle que no hace falta ejecutar si se cumple un proposito y asi volver a empezar un bucle, usado mas que nada en menus.

*ejemplo practico*
```javascript
let i = 10;
//conteo del 10 al 0 omitiendo el 5
while (i >= 0){
    if (i == 5){
        i--;
        continue;
    };
    console.log(i);
    i--;
};
```

### Sentencia `break`

Se emplea de la misma manera con la que usamos *continue* solo que a diferencia de omitir una porcion de codigo no requerida, este lo que hace es romper ese bucle, es decir, detenerlo, usado cuando ya no queremos que el bucle siga corriendo y se detenga en cierto punto.

*ejemplo practico*
```javascript
let estudiantes = ["eduardo", "adrian", "samuel", "santiago"];

//recorre los indices del array "estudiantes"
for (estudiante in estudiantes){
    if (estudiante == 2){
        break; //rompe la iteracion del bucle al llegar a la posicion 2
    };
    console.log(estudiantes[estudiante]);//accede al valor del elemento en esa posicion
};
```