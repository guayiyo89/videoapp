import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http'; //para tmdb usamos JSONP para las peticiones. No acepta HTTP
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

	private apikey:string = "98479dc2381eeb3711ff16470f6f45fc";
	private urlTmdb:string = "https://api.themoviedb.org/3";

  constructor(
  	private jsonp:Jsonp
  	) { }
  //FORMATO DE LA URL
  // {this.urlTmdb}/loquequeremos...&apikey={apikey}&language=es&callback
  //image.tmdb.com/t/p/w500/{imagen} : para usar la imagen

  peliculas:any[] = [];

  getCartelera(){

    let desde = new Date();
    let hasta = new Date();
    desde.setDate( hasta.getDate()-7 );

    //para setearlas al formato que requiere TMDB. (los meses en JS estan seteados en cero)
    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDate() }`;

    let url = `${ this.urlTmdb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getPopulares(){

    let url = `${ this.urlTmdb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getNinos(){

  let url = `${ this.urlTmdb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`; 

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getFilm( id:string ){
    let url = `${ this.urlTmdb }/movie/${ id }?&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`; 

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getCredits( id:string ){
    let url = `${ this.urlTmdb }/movie/${ id }/credits?&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`; 

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlTmdb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=>{
                  this.peliculas = res.json().results;
                  return res.json().results;});
  }

  getbyYear( year:number ){
    let url = `${ this.urlTmdb }/discover/movie?primary_release_year=${ year }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                .map( res=> res.json());
  }

}
