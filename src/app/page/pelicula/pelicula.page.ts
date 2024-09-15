import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButtons,
  IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonContent,
  IonHeader, IonImg,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ApiPeliculasService} from "../../services/api-peliculas.service";
import {Peliculas} from "../../models/peliculas";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faArrowLeft} from "@fortawesome/pro-regular-svg-icons";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, FaIconComponent, IonCard, IonImg, IonCardHeader, IonCardTitle, IonCardContent]
})
export class PeliculaPage implements OnInit {
  pelicula!:Peliculas;

  constructor(private apiPeliculas:ApiPeliculasService) { }

  ngOnInit() {
    let id=window.location.href.split("/").pop()
    this.apiPeliculas.getPeliculasById(id??"").subscribe((peliculas:any)=>{
      let pelis= peliculas as Peliculas[];
      if (pelis.length>0){
        this.pelicula=pelis[0];
      }
      else {
        window.history.back()
      }
    })
  }

  protected readonly faArrowLeft = faArrowLeft;

  onClickVolver() {
    window.history.back()
  }
}
