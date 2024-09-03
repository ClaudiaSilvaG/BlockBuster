import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import {
  FaIconComponent,
  FaLayersComponent,
  FaLayersCounterComponent,
  FaStackComponent, FaStackItemSizeDirective
} from "@fortawesome/angular-fontawesome";
import {faFilm, faFire, faHouseChimney} from "@fortawesome/pro-solid-svg-icons";
import {faBagShopping, faChartLine, faUser} from "@fortawesome/pro-regular-svg-icons";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, FaIconComponent, FaLayersComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ triangle, ellipse, square });
  }

  protected readonly faFilm = faFilm;
  protected readonly faFire = faFire;
  protected readonly faHouseChimney = faHouseChimney;
  protected readonly faChartLine = faChartLine;
  protected readonly faBagShopping = faBagShopping;
  protected readonly faUser = faUser;
}
