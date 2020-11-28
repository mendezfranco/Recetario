import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { RecetasService } from './services/recetas.service';
 
import { AppComponent } from './app.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
