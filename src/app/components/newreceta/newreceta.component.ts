import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-newreceta',
  templateUrl: './newreceta.component.html',
  styleUrls: ['./newreceta.component.css']
})
export class NewRecetaComponent implements OnInit {

  formReceta: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.crearForm();

  }

  ngOnInit() {
  }

  get arregloIngredientes(): FormArray{
    return this.formReceta.get('ingredientes') as FormArray;
  }

  crearForm() {
    this.formReceta = this.formBuilder.group(
      {
        nombre: [''],
        descripcion: [''],
        ingredientes: this.formBuilder.array([]),
        pasos: ['']
      }
    );
  }

  guardarReceta(){
    
  }

  agregarIngrediente(){
    this.arregloIngredientes.push(this.formBuilder.control('Nuevo Ingrediente'));
  }

}
