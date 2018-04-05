import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posterFlim'
})
export class PosterFlimPipe implements PipeTransform {

  transform(pelicula: any): any {
    let url = 'http://image.tmdb.org/t/p/w500';

  	if (pelicula.poster_path){
  		return url + pelicula.poster_path;
  	}else{
  		if(pelicula.backdrop_path){
  			return url + pelicula.backdrop_path;
  		}else{
  			return "assets/img/not-available.jpg";
  		}
  	}
  }
  }


