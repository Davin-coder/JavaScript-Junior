//muestra una notificacion que espera una respuesta por parte del usuario.
let nombre = prompt("Escriba su nombre"); 

//uso del backtikcs para poder concatenar una variable a un texto.
if (nombre) {
    let titulo = `<h2>Bienvenido ${nombre}</h2>`;
    document.writeln(titulo);
}else {
    let titulo2 = `
    <h2>No hay bienevida para ti >:(</h2>`;
    document.writeln(titulo2);
};

let edad = 18;
document.writeln(`Tu edad es "${edad}"<br>`);
document.writeln(`Multiplicado por 5 es ${edad *= 5}<br>`);

let dinero = prompt("cuanto money tienes?");

alert(calculo(dinero));

//uso de condicionales y operadores logicos dentro de una funcion
function calculo(dinero){
    let mensaje = "";
    if (dinero >= 2){
        mensaje = "te alcanza para el helado de 2$";
        return mensaje;
    }
    else if (dinero < 2 && dinero >= 1){
        mensaje = "te alcanza para el helado de 1$";
        return mensaje;
    }
    else {
        mensaje = "no te alcanza pa ninguno xd";
        return mensaje;
    }
};

//simulacion de array asociativo usando objetos
let pcBody = {
    name: "DavinPc",
    processor: "Ryzen7800U",
    ram: "8gb",
    storage: "2TB"
};

let nPC = pcBody["name"],
    processor = pcBody["processor"],
    ram = pcBody["ram"],
    stg = pcBody["storage"]
;

componentes = `
    Nombre de la pc: ${nPC} <br>
    Procesador: ${processor} <br> 
    Ram: ${ram} <br>
    Almacenamiento: ${stg} <br>
`;

document.writeln(componentes);

class carro{
    constructor(marca, traccion, espacio){
        this.marca = marca;
        this.traccion = traccion;
        this.espacioEnCabina = espacio;
    };
};

let aventador = new carro("Ferrari", "4x4", "doble");

console.log(aventador);

//