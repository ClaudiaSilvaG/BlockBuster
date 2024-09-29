import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonInfiniteScroll, IonInfiniteScrollContent, ViewWillEnter
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ApiPeliculasService } from "../services/api-peliculas.service";
import { Peliculas } from "../models/peliculas";
import { NgForOf, NgOptimizedImage } from "@angular/common";
import { CardPeliculaComponent } from "../components/card-pelicula/card-pelicula.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButtons, IonMenuButton, NgForOf, NgOptimizedImage, CardPeliculaComponent, IonInfiniteScroll, IonInfiniteScrollContent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2Page {
  Peliculas: Peliculas[] = [];

  offset: number = 0;
  constructor(
    private router: Router,
    private apiPeliculas: ApiPeliculasService) {
  }

  ngOnInit() {
    this.apiPeliculas.getPeliculas(15, 0, 'popularity').subscribe(data => {
      this.Peliculas = data as Peliculas[];
      this.offset += 15;
    });
  }

  // Función para cargar películas con el scroll infinitamente hasta el límite
  onIonInfinite($event: any) {
    this.apiPeliculas.getPeliculas(15, this.offset, 'popularity').subscribe(data => {
      this.Peliculas.push(...data as Peliculas[]);
      this.offset += 15;
      $event.target.complete();

    })
  }

  // Función para abrir la previsualización de la película
  openPrevisualizarPelicula(id: string) {
    this.router.navigate(['previsualizar-pelicula', id]);
  }
}
