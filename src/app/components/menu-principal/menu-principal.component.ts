import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
  imports: [
    IonicModule,
    FaIconComponent,
    RouterLink
  ],
  standalone: true
})
export class MenuPrincipalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
