import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from "./components/recetas/recetas.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: RecetasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'  }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });