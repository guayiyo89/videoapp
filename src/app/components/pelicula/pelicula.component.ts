import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

	pelicula:any;
  creditos:any;

  constructor( private _actRoute:ActivatedRoute, public _peliculaSrv:PeliculasService
  	) { }

  ngOnInit() {
  	this._actRoute.params.map(params=>params['id'])
  				.subscribe(
  					id=>{
  						this._peliculaSrv.getFilm(id).subscribe(
  							pelicula=>{
  								this.pelicula = pelicula;
  								console.log(pelicula);
  							})
  					}
  					);

    this._actRoute.params.subscribe( params=>{
      this._peliculaSrv.getCredits(params.id).subscribe(
        creditos=>{
          this.creditos = creditos;
          console.log(creditos);}
        )}
      )
    }

  }
//d

