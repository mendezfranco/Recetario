import { Component, OnInit } from '@angular/core';
import { RecetasService, Recetas } from '../../services/recetas.service'

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: Recetas[] = [];

  constructor(private _recetasService: RecetasService) { }

  ngOnInit() {

    this.recetas = this._recetasService.getRecetas();
    console.log(this.recetas);

  }

}
