import {Component} from '@angular/core';
import {
  IonApp,
  IonRouterOutlet, MenuController
} from '@ionic/angular/standalone';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import { register } from 'swiper/element/bundle';

register()
// import {all} from "@awesome.me/kit-424812913b/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(library: FaIconLibrary,private menu: MenuController) {
    // library.addIconPacks(fas)
    // library.addIconPacks(far)
    // library.addIconPacks(fad)
    // library.addIcons(...all)
  }


}
