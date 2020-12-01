import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { RecetasService } from './services/recetas.service';
 
import { AppComponent } from './app.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RecetaComponent } from './components/receta/receta.component';
import { NewRecetaComponent } from './components/newreceta/newreceta.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    NavbarComponent,
    RecetaComponent,
    NewRecetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule
  ],
  providers: [
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
