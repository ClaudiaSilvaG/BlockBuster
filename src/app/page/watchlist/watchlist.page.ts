import {AfterViewInit, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
  IonList,
  IonMenuButton, IonRefresher, IonRefresherContent, IonThumbnail,
  IonTitle,
  IonToolbar, ToastController, ViewDidEnter
} from '@ionic/angular/standalone';
import { Peliculas } from 'src/app/models/peliculas';
import {ApiPeliculasService} from "../../services/api-peliculas.service";
import {ApiWatchlistService} from "../../services/api-watchlist.service";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faTrash} from "@fortawesome/pro-solid-svg-icons";
import {reload} from "ionicons/icons";
import {delay, of} from "rxjs";

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonThumbnail, IonButton, FaIconComponent, IonItemSliding, IonItemOptions, IonItemOption, IonRefresher, IonRefresherContent]
})
export class WatchlistPage implements ViewDidEnter {
  Peliculas :Peliculas[]= [];
  constructor(private watchlistService:ApiWatchlistService,
              private toastController: ToastController) { }



  ionViewDidEnter () {
    console.log("afterViewInit");
    this.reload();
  }

  protected readonly faTrash = faTrash;

  onClickEliminar(pelicula: Peliculas) {
    this.watchlistService.removeWatchlist(pelicula).subscribe(()=>{
      this.presentToast('bottom',"Eliminado de la lista de deseos!");
      this.reload();
    });
  }

  reload($event?: any) {
    console.log("reload");
    this.watchlistService.getWatchlist().subscribe((data:Peliculas[])=>{
      console.log("reloaded!");
      this.Peliculas = data;
      if($event){
        let observable2$ = of(true).pipe(delay(1000));
        observable2$.subscribe((value) => {
          $event.target.complete();
        });

      }
    });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
