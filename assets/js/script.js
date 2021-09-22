import Propietario from './Propietario.js';
import Mascota from './Mascota.js';
import Animal from './Animal.js';


//Pruebas creación de Mascota y Propietario
// var mascota1 = new Mascota('Perro', 'Pepito', 'Alergia');
// console.log(mascota1.tipo);
// console.log(mascota1.nombreMascota);
// console.log(mascota1.enfermedad);

// var mascota2 = new Mascota('Gato', 'Michi', 'Pulgas');
// console.log(mascota2.tipo);
// console.log(mascota2.nombreMascota);
// console.log(mascota2.enfermedad);

// var propietario1 = new Propietario('Jorge', 'Av. Macul 1234', '123456789');
// console.log(propietario1.nombre);
// console.log(propietario1.direccion);
// console.log(propietario1.telefono);

let formulario = document.querySelector('form');

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(formulario.rut.value,"en submit");
    let nombre = document.getElementById("propietario").value; //capturar el dato
    let telefono = formulario.telefono.value; //capturar el dato
    let direccion = document.getElementById("direccion").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let tipo = document.getElementById("tipo").value;
    let enfermedad = document.getElementById("enfermedad").value;

    let propietario1 = new Propietario(nombre, direccion, telefono);
    propietario1.datosPropietario();

    let mascota1 = new Mascota(nombreMascota, tipo, enfermedad);
    mascota1.datosMascota();

    let animal1 = new Animal(tipo);
    animal1.mensajeTipoMascota();

})