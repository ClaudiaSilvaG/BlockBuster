import { Component } from '@angular/core';
import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu, IonMenuButton,
  IonRouterOutlet,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {fas} from '@fortawesome/pro-solid-svg-icons';
import {far} from '@fortawesome/pro-regular-svg-icons';
import {fad} from '@fortawesome/pro-duotone-svg-icons';
import {MenuPrincipalComponent} from "./components/menu-principal/menu-principal.component";
// import {all} from "@awesome.me/kit-424812913b/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton,MenuPrincipalComponent],
})
export class AppComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas)
    library.addIconPacks(far)
    library.addIconPacks(fad)
    // library.addIcons(...all)
  }
}
