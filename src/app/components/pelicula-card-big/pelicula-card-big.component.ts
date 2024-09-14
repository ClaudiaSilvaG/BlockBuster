import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Peliculas} from "../../models/peliculas";
import {IonicModule, NavController} from "@ionic/angular";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faPlus, faStar} from "@fortawesome/pro-solid-svg-icons";
import {Route, Router} from "@angular/router";
import {ToastController, ViewDidEnter} from "@ionic/angular/standalone";
import {ApiWatchlistService} from "../../services/api-watchlist.service";
import {lastValueFrom} from "rxjs";
import {ApiPedidoService} from "../../services/api-pedido.service";
import {DecimalPipe} from "@angular/common";
import {NumberformatPipe} from "../../pipes/numberformat.pipe";

@Component({
  selector: 'app-pelicula-card-big',
  templateUrl: './pelicula-card-big.component.html',
  styleUrls: ['./pelicula-card-big.component.scss'],
  imports: [
    IonicModule,
    FaIconComponent,
    DecimalPipe,
    NumberformatPipe
  ],
  standalone: true
})
export class PeliculaCardBigComponent implements OnInit {
  @Input() pelicula!: Peliculas;
  isWatchlisted=false;
  isOnCart=false;
  @Input() onReload:()=>void = ()=>{};

  constructor(private router:Router,
              private navCtrl:NavController,
              private toastController: ToastController,
              private watchlistService:ApiWatchlistService,
              private pedidoService:ApiPedidoService) { }



  ngOnInit(): void {
    this.watchlistService.isWatchlist(this.pelicula).subscribe(value => {
      this.isWatchlisted = value;
    });
    this.pedidoService.isInPedido(this.pelicula).subscribe(value => {
      this.isOnCart = value;
    });
  }

  protected readonly faStar = faStar;
  protected readonly faPlus = faPlus;


  onCardClick() {
    // this.router.navigate(['/tabs/pelicula', this.pelicula.Id],{});
    this.router.navigate(['/tabs/pelicula', this.pelicula.Id]);
  }

  onAddCart() {
    let toastButtons = [
      {
        text: 'Ver',
        role: 'info',
        handler: () => {
          this.navCtrl.navigateForward(['/tabs/tab4']);
        },
      }
    ];
    this.pedidoService.addToPedido(this.pelicula).subscribe(value => {
      if(value){
        this.isOnCart = true;
        this.presentToast('bottom',"Agregado al carrito!",toastButtons);
      }else{
        this.presentToast('bottom',"Ya esta en el carrito!",toastButtons);
      }
    });
  }

  onAddWatchList() {
      let toastButtons = [
      {
        text: 'Ver',
        role: 'info',
        handler: () => {
          this.navCtrl.navigateForward(['/tabs/watchlist']);
        },
      }
    ];
    this.watchlistService.addWatchlist(this.pelicula).subscribe(value => {
      if(value){
        this.isWatchlisted = true;
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
