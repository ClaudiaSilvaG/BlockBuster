import {Component, EnvironmentInjector, inject} from '@angular/core';
import {IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {ellipse, square, triangle} from 'ionicons/icons';
import {
  FaIconComponent,
  FaLayersComponent,
  FaLayersCounterComponent,
  FaStackComponent,
  FaStackItemSizeDirective
} from "@fortawesome/angular-fontawesome";
import {faFilm, faFire, faHouseChimney} from "@fortawesome/pro-solid-svg-icons";
import {faBagShopping, faChartLine, faUser} from "@fortawesome/pro-regular-svg-icons";
import {BarcodeFormat, BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, FaIconComponent, FaLayersComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private alertController: AlertController,
              private router: Router) {
    addIcons({ triangle, ellipse, square });
  }

  protected readonly faFilm = faFilm;
  protected readonly faFire = faFire;
  protected readonly faHouseChimney = faHouseChimney;
  protected readonly faChartLine = faChartLine;
  protected readonly faBagShopping = faBagShopping;
  protected readonly faUser = faUser;

  onQr($event: MouseEvent) {
    $event.preventDefault();
    this.scan().then((result) => {
      console.log("QR Code: ", result);
      //si el qr inicia con "appbb://pelicula/" se redirige a la página de la película
      if (result.startsWith("appbb://pelicula/")) {
        let id = result.split("/").pop();
        console.log("ID: ", id);
        this.router.navigate(['/tabs/pelicula', id]);
      }
    });
  }

  async scan(): Promise<string> {
    const barcodeAvailable = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();
    if (!barcodeAvailable.available) {
      //si no esta disponible, lo instalamos
      await BarcodeScanner.installGoogleBarcodeScannerModule();
    }
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return "";
    }
    const { barcodes } = await BarcodeScanner.scan({formats: [BarcodeFormat.QrCode]});
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
