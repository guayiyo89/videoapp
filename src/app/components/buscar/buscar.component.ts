import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

buscar:string = "";

  constructor(public _peliculaSrv:PeliculasService, public _actRoute:ActivatedRoute, public router:Router
    ) {
    //traemos los datos desde el navigate del navabar. Se hace en el contructor pq siempre va estar pendiente
    this._actRoute.params.subscribe( params=>{
      console.log(params);
      if(params['texto']){
        this.buscar = params['texto'];
        this.buscarFilm();
      }
    })
  }

  ngOnInit() {
  }

  buscarFilm(){
  	if(this.buscar.length == 0){
  		return;
  	}
  	this._peliculaSrv.buscarPelicula( this.buscar )
  		.subscribe(
  			data=>{
  				console.log(data);
  			}
  			)
  }

}
