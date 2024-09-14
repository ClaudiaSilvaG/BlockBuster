import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonButton, IonIcon, ViewWillEnter, IonInfiniteScroll, IonInfiniteScrollContent
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {ApiPeliculasService} from "../services/api-peliculas.service";
import {Peliculas} from "../models/peliculas";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {PeliculaCardBigComponent} from "../components/pelicula-card-big/pelicula-card-big.component";
import {InfiniteScrollCustomEvent} from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButtons, IonMenuButton, NgForOf, NgOptimizedImage, IonButton, IonIcon, PeliculaCardBigComponent, IonInfiniteScroll, IonInfiniteScrollContent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab2Page implements ViewWillEnter {
  Peliculas:Peliculas[]=[];
  offset:number=0;
  limit:number=30;

  constructor(private apiPeliculas:ApiPeliculasService) {}

  ionViewWillEnter (): void {
    this.offset=0;
    this.apiPeliculas.getPeliculas(this.limit).subscribe(data=>{
      this.Peliculas=data as Peliculas[];
      this.offset+=this.limit;
    });
  }


  onIonInfinite($event: any) {
    this.apiPeliculas.getPeliculas(this.limit,this.offset).subscribe(data=>{
      this.Peliculas.push(...data as Peliculas[]);
      this.offset+=this.limit;
      setTimeout(() => {
        ($event as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    });

  }
}
