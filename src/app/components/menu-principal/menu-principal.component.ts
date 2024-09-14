import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  IonAvatar,
  IonButton, IonButtons,
  IonContent, IonHeader, IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar
} from "@ionic/angular/standalone";
import {NgOptimizedImage} from "@angular/common";
import {faGear} from "@fortawesome/pro-regular-svg-icons";


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
  imports: [
    FaIconComponent,
    RouterLink,
    IonMenu,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonRouterOutlet,
    IonSplitPane,
    IonHeader,
    IonButton,
    IonAvatar,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonIcon,
    NgOptimizedImage

  ],
  standalone: true,
})
export class MenuPrincipalComponent {

  constructor() {

  }


  protected readonly faGear = faGear;
}