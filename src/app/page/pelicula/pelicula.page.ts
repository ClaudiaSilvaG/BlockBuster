import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar, ToastController
} from '@ionic/angular/standalone';
import {ApiPeliculasService} from "../../services/api-peliculas.service";
import {Peliculas} from "../../models/peliculas";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCaretLeft} from "@fortawesome/pro-solid-svg-icons";
import {NavController} from "@ionic/angular";
import {NumberformatPipe} from "../../pipes/numberformat.pipe";
import {ApiWatchlistService} from "../../services/api-watchlist.service";
import {ApiPedidoService} from "../../services/api-pedido.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonBackButton, FaIconComponent, NumberformatPipe, IonButton]
})
export class PeliculaPage implements OnInit {
  pelicula!: Peliculas;
  constructor(private peliculaService:ApiPeliculasService,
              private navCtrl:NavController,
              private toastController: ToastController,
              private watchlistService:ApiWatchlistService,
              private pedidoService:ApiPedidoService,
              private router:Router) { }

  ngOnInit() {
    //Capture the id from the URL
    let id = window.location.href.split("/").pop();
    console.log("ID: ", id);
    //Obtenemos la información de la película
    this.peliculaService.getPeliculaById(id??"").subscribe((pelicula:any) => {
      let peliculas = pelicula as Peliculas[];
      if(peliculas.length > 0){
        console.log("Pelicula: ", peliculas[0]);
        this.pelicula = peliculas[0];
      }
      else {
        console.log("No se encontró la película");
        //Volviendo a la página anterior
        window.history.back();
      }
    });

  }

  protected readonly Peliculas = Peliculas;

  onBackButton() {
    this.navCtrl.back();
  }

  protected readonly faCaretLeft = faCaretLeft;

  addPedido() {
    let toastButtons = [
      {
        text: 'Ver',
        role: 'info',
        handler: () => {
          this.router.navigate(['/tabs/tab4']);
        },
      }
    ];
    this.pedidoService.addToPedido(this.pelicula).subscribe(value => {
      if(value){
        this.presentToast('bottom',"Agregado al carrito!",toastButtons);
      }else{
        this.presentToast('bottom',"Ya esta en el carrito!",toastButtons);
      }
    });
  }

  addWatchlist() {
    let toastButtons = [
      {
        text: 'Ver',
        role: 'info',
        handler: () => {
          this.router.navigate(['/tabs/watchlist']);
        },
      }
    ];
    this.watchlistService.addWatchlist(this.pelicula).subscribe(value => {
      if(value){
        this.presentToast('bottom',"Agregado a la lista de deseos!",toastButtons);
      }else{
        this.presentToast('bottom',"Ya esta en la lista de deseos!",toastButtons);
      }
    });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string,buttons:any=[]) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      buttons: buttons
    });

    await toast.present();
  }

}
