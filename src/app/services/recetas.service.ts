import { Injectable, Type } from '@angular/core';

@Injectable()
export class RecetasService {

    private misRecetas: Recetas[] = [
        {
            nombre: "Pan Dulce",
            descripcion: "Receta de pan dulce de cocineros argentinos",
            ingredientes: ["1 huevo", "200gr harina"],
            pasos: ["Batir","Agregar los huevos"],
            adicionales: []
        },
        {
            nombre: "Galletas Navideñas",
            descripcion: "Galletitas para la mesa dulce de nochebuena",
            ingredientes: ["5 huevo", "400gr harina"],
            pasos: ["Batir", "Mezclar", "Cocinar"],
            adicionales: ["http://youtube.com"]
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
    ingredientes: Array<String>,
    pasos: Array<String>,
    adicionales: Array<String>
}