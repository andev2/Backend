let nombres = {
    name: "Cristhian" ,
    apellido: "Escobar"
};



console.log(nombres.name);

console.log(nombres.hasOwnProperty("telefono"));

console.log(nombres);


function perro(nombre, edad){
    let perro = Object.create(ObjectConstructor);
    perro.nombre = nombre;
    perro.eded = edad;
    return perro;

}

let ObjectConstructor = {
    habla: function(){
        return "Nel perro xdd ";
    }
}


let firulais = perro("Firulais", 9);

console.log(firulais);

