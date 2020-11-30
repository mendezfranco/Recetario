import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from "./components/recetas/recetas.component";
import { RecetaComponent } from "./components/receta/receta.component";
import { NewRecetaComponent } from "./components/newreceta/newreceta.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: RecetasComponent },
    { path: 'receta/:id', component: RecetaComponent },
    { path: 'add', component: NewRecetaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'  }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });