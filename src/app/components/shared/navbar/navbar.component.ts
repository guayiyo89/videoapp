import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  buscarFilm( texto:string ){
  	console.log(texto)
  	if(texto.length == 0){
  		return;
  	}

  	this.router.navigate(['buscar', texto]);
  	//mandamos por URL la info a la pagina de buscar...

  }

}
