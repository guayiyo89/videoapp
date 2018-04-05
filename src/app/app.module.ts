import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { PeliculasService } from './services/peliculas.service';
import { appRoutingProviders, routing } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { ImagenFlimPipe } from './pipes/imagen-flim.pipe';
import { PosterFlimPipe } from './pipes/poster-flim.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    PeliculaComponent,
    ImagenFlimPipe,
    PosterFlimPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    routing
  ],
  providers: [PeliculasService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
