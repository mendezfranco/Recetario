import { Component, OnInit } from '@angular/core';
import { RecetasService, Recetas } from '../../services/recetas.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: Recetas[] = [];

  constructor(private _recetasService: RecetasService, private router: Router) { }

  ngOnInit() {

    this.recetas = this._recetasService.getRecetas();

  }

  verReceta(id: number){
    this.router.navigate(['/receta', id]);
  }

}
