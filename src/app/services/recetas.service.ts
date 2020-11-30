import { Injectable } from '@angular/core';

@Injectable()
export class RecetasService {

    private misRecetas: Recetas[] = [
        {
            nombre: "Pan Dulce",
            descripcion: "Receta de pan dulce de cocineros argentinos",
            ingredientes: "1 huevo, 200gr harina",
            pasos: "Batir, batir y batir y asdasd"
        },
        {
            nombre: "Galletas Navideñas",
            descripcion: "Galletitas para la mesa dulce de nochebuena",
            ingredientes: "5 huevo, 400gr harina",
            pasos: "Batir, mezclar y batir"
        }
    ];

    constructor() {}

    getRecetas(){
        return this.misRecetas;
    }

    getReceta(id: number){
        return this.misRecetas[id];
    }

}

export interface Recetas {
    nombre: string,
    descripcion: string,
    ingredientes: string,
    pasos: string
}