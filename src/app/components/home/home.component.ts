import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  kids:any;
  byYear:any;

  year:number = 2010;

  constructor(public _peliculaSrv:PeliculasService) {

  	this._peliculaSrv.getCartelera().subscribe(
  		data=>{
  			console.log(data);
  			this.cartelera = data;
  		}
  		);

  	this._peliculaSrv.getPopulares().subscribe(
  		data=>{
  			console.log(data);
  			this.populares = data;
  		}
  		);

  	this._peliculaSrv.getNinos().subscribe(
  		data=>{
  			console.log(data);
  			this.kids = data;
  		}
  		)

    this._peliculaSrv.getbyYear(this.year).subscribe(
      data=>{
        console.log(data);
        this.byYear = data;
      }
      )
  }

  ngOnInit() {
  }

  peliYear(){
    this._peliculaSrv.getbyYear(this.year).subscribe(
      data=>{
        console.log(data);
        this.byYear = data;
      })
  }

}
