import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Recetas, RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  recetaBuscada: Recetas;

  constructor(private _recetasService: RecetasService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(idParameter => {
      
      this.recetaBuscada = this._recetasService.getReceta(idParameter['id']);
    
    });
  }

  ngOnInit() {
  }

}
