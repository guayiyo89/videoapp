import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

const appRoutes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'pelicula/:id/:pag', component: PeliculaComponent},
	{path: 'buscar', component: BuscarComponent},
	{path: 'buscar/:texto', component: BuscarComponent},
	{path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
//, {useHash:true}