import {Component, OnInit} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {ApiPeliculasService} from "../services/api-peliculas.service";
import {Peliculas} from "../models/peliculas";
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButtons, IonMenuButton, NgForOf, NgOptimizedImage]
})
export class Tab2Page implements OnInit{
  Peliculas:Peliculas[]=[];

  constructor(private apiPeliculas:ApiPeliculasService) {}

  ngOnInit(): void {
    this.apiPeliculas.getPeliculas(30).subscribe(data=>{
      this.Peliculas=data as Peliculas[];
    });
  }


}
