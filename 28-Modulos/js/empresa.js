import { Cliente } from "./cliente.js";

export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre} tiene un ahorro de ${this.ahorro} y es del giro ${this.categoria}`
    }
}