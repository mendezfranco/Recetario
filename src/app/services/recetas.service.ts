import { Injectable } from '@angular/core';

@Injectable()
export class RecetasService {

    private misRecetas: Recetas[] = [
        {
            nombre: "Pan Dulce",
            ingredientes: "1 huevo, 200gr harina",
            pasos: "Batir, batir y batir"
        },
        {
            nombre: "Galletas Navideñas",
            ingredientes: "5 huevo, 400gr harina",
            pasos: "Batir, mezclar y batir"
        }
    ];

    constructor() {
        console.log("Hola Servicio");
    }

    getRecetas(){
        return this.misRecetas;
    }

}

export interface Recetas {
    nombre: string,
    ingredientes: string,
    pasos: string
}