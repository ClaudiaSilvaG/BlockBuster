import {Component, Input, OnInit} from '@angular/core';

interface Peliculas {
  id: string
  movie_id: string
  title: string
  overview: string
  release_date: string
  poster_path: string
  popularity: string
  price: string
  category: string
  duration: string
}

@Component({
  standalone:true,
  selector: 'app-cardpeliculalista',
  templateUrl: './cardpeliculalista.component.html',
  styleUrls: ['./cardpeliculalista.component.scss'],
})
export class CardpeliculalistaComponent {
  @Input()pelicula!:Peliculas;

  constructor() { }

}
