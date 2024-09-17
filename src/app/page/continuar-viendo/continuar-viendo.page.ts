import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { play, bookmark, heart, shareSocial } from 'ionicons/icons';
import { Pelicula } from 'src/app/services/ContinuarViendoPeliculas';
import { ContinuarViendoPeliculas } from 'src/app/services/api-continuarviendo.service';
import { addIcons } from 'ionicons';
CUSTOM_ELEMENTS_SCHEMA

@Component({
  selector: 'app-continuar-viendo',
  templateUrl: './continuar-viendo.page.html',
  styleUrls: ['./continuar-viendo.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContinuarViendoPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private continarViendoPelicula: ContinuarViendoPeliculas
  ) {
    addIcons({ play, bookmark, heart, shareSocial });
  }

  pelicula: Pelicula | undefined;

  // Cuando se inicie la vista ejecutamos:
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.pelicula = this.continarViendoPelicula.getPeliculas().find(peli => peli.id === id);
  }

}
