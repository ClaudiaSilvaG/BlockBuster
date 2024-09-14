import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent, IonFab, IonFabButton,
  IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList,
  IonMenuButton, IonRefresher, IonRefresherContent, IonSelect, IonSelectOption, IonThumbnail,
  IonTitle,
  IonToolbar, ToastController,
  ViewDidEnter
} from '@ionic/angular/standalone';
import {delay, of} from "rxjs";
import {ApiPedidoService} from "../services/api-pedido.service";
import {Peliculas} from "../models/peliculas";
import {NumberformatPipe} from "../pipes/numberformat.pipe";
import {addIcons} from "ionicons";
import { qrCode } from 'ionicons/icons';
import {AlertController} from "@ionic/angular";
import {BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import {ApiPeliculasService} from "../services/api-peliculas.service";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonRefresher, IonRefresherContent, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonThumbnail, NumberformatPipe, IonButton, IonSelect, IonSelectOption, IonFab, IonFabButton, IonIcon]
})
export class Tab4Page implements ViewDidEnter {
  Peliculas :Peliculas[]= [];
  Total:number = 0;
  constructor(private pedidoService:ApiPedidoService,
              private peliculasService:ApiPeliculasService,
              private toastController: ToastController,
              private alertController: AlertController) {
    addIcons({ qrCode });
  }

  ionViewDidEnter() {
    this.reload()
  }

  reload($event?: any) {
    console.log("reload");
    this.pedidoService.getPedido().subscribe((data:Peliculas[])=>{
      console.log(data);
      console.log("reloaded!");
      this.Peliculas = data;
      this.Total = this.Peliculas.map(p=>p.Precio).reduce((a,b)=>a+b,0);
      if($event){
        let observable2$ = of(true).pipe(delay(1000));
        observable2$.subscribe((value) => {
          $event.target.complete();
        });

      }
    });
  }

  onClickEliminar(pelicula: Peliculas) {
    this.pedidoService.removePedido(pelicula).subscribe(()=>{
      this.presentToast('bottom',"Eliminado de la lista de deseos!");
      this.reload();
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

  onQr() {
    this.scan().then((result) => {
      console.log("QR Code: ", result);
      //si el qr inicia con "appbb://pelicula/" se redirige a la página de la película
      if (result.startsWith("appbb://pelicula/")) {
        let id = result.split("/").pop();
        console.log("ID: ", id);
        this.peliculasService.getPeliculaById(id??"").subscribe((pelicula:any)=>{
          let pelis= pelicula as Peliculas[];
          if(pelis.length>0){
            this.pedidoService.addToPedido(pelis[0]).subscribe(()=>{
              this.presentToast('bottom',"Agregado al carrito!");
              this.reload();
            });
          }
        });
      }
    });
  }

  async scan(): Promise<string> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return "";
    }
    const { barcodes } = await BarcodeScanner.scan();
    //retorna el primer código de barras encontrado
    return barcodes[0].rawValue;
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permiso denegado',
      message: 'Porfavor permita el acceso a la camara.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
