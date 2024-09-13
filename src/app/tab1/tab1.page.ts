import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButtons, IonMenuButton],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {
  constructor() {}
}
