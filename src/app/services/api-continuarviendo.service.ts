import { Injectable } from "@angular/core";
import { Pelicula } from "./ContinuarViendoPeliculas";

@Injectable({
  providedIn: 'root'
})
export class ContinuarViendoPeliculas {

  private peliculas: Pelicula[] = [
    {
      id: 1,
      nombre: 'Shrek 2',
      fecha: 2004,
      categoria: 'Animación / Comedia',
      sinopsis: 'Shrek y Fiona regresan con más aventuras y nuevos personajes en esta secuela llena de humor y acción. La pareja intenta adaptarse a la vida en el reino de los padres de Fiona.',
      imagen: 'assets/imagenes/continuar_shrek.webp'
    },
    {
      id: 2,
      nombre: 'Soul',
      fecha: 2020,
      categoria: 'Animación / Fantasía',
      sinopsis: 'Un profesor de música encuentra su alma en un viaje hacia el más allá, donde descubre un mundo lleno de creatividad y sabiduría. Una reflexión sobre la vida y los sueños.',
      imagen: 'assets/imagenes/continuar_soul.webp'
    },
    {
      id: 3,
      nombre: 'Che Kopete',
      fecha: 2008,
      categoria: 'Comedia / Familiar',
      sinopsis: 'Una comedia que sigue las desventuras de un personaje carismático y excéntrico en su vida diaria. Con situaciones cómicas y personajes entrañables.',
      imagen: 'assets/imagenes/continuar_chekopete.webp'
    },
    {
      id: 4,
      nombre: 'Toy Story',
      fecha: 1995,
      categoria: 'Animación / Aventura',
      sinopsis: 'Los juguetes cobran vida cuando no están siendo observados por los humanos. Sigue las peripecias de Woody y Buzz Lightyear en esta clásica película de animación.',
      imagen: 'assets/imagenes/continuar_toystory.webp'
    },
    {
      id: 5,
      nombre: 'Wall-E',
      fecha: 2008,
      categoria: 'Animación / Ciencia Ficción',
      sinopsis: 'En un futuro lejano, Wall-E, un robot de limpieza, encuentra el propósito de su existencia al descubrir un nuevo mundo y luchar por un futuro mejor para la Tierra.',
      imagen: 'assets/imagenes/continuar_walle.webp'
    }
  ];

  // Método para obtener las películas para continuar viendo
  getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

}