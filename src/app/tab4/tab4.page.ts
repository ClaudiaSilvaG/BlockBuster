import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class Tab4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
