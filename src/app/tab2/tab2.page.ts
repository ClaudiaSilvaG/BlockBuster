import {Component, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonInfiniteScroll, IonInfiniteScrollContent, ViewWillEnter, IonList, IonItem
} from '@ionic/angular/standalone';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {ApiPeliculasService} from "../services/api-peliculas.service";
import {Peliculas} from "../models/peliculas";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {CardPeliculaComponent} from "../components/card-pelicula/card-pelicula.component";
import {CardpeliculalistaComponent} from "../components/cardpeliculalista/cardpeliculalista.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButtons, IonMenuButton, NgForOf, NgOptimizedImage, CardPeliculaComponent, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonItem, CardpeliculalistaComponent]
})
export class Tab2Page implements ViewWillEnter {
  Peliculas: Peliculas[] = [];

  offset: number= 0;
  constructor(private apiPeliculas: ApiPeliculasService) {
  }

  ionViewWillEnter(): void {
    this.apiPeliculas.getPeliculas(30).subscribe(data => {
      this.Peliculas = data as Peliculas[];
      this.offset+=30;
    });
  }




  onIonInfinite($event: any) {
    this.apiPeliculas.getPeliculas(30,this.offset).subscribe(data => {
      this.Peliculas.push(...data as Peliculas[]);
      this.offset+=30;
      $event.target.complete();

    })
  }
}
