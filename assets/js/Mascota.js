import Animal from './Animal.js';

export default class Mascota extends Animal {
    constructor(nombreMascota, tipo, enfermedad) {
        super(tipo);
        this._nombreMascota = () => nombreMascota;
        this._enfermedad = () => enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota();
    }
    set nombreMascota(new_nombreMascota) {
        return this._nombreMascota = () => new_nombreMascota;
    }

    get enfermedad() {
        return this._enfermedad();
    }
    set enfermedad(new_enfermedad) {
        return this._enfermedad = () => new_enfermedad;
    }

    datosMascota() {
        document.getElementById('datosMascota').innerHTML = `El tipo de animal es: ${this.tipo}, mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`;

    }
}