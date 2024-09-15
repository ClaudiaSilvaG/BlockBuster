import {Component, Input, input, OnInit} from '@angular/core';
import {faCartPlus, faHeartCirclePlus} from "@fortawesome/pro-regular-svg-icons";
import {Peliculas} from "../../models/peliculas";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.scss'],
  imports: [
    FaIconComponent
  ],
  standalone: true
})
export class CardPeliculaComponent  implements OnInit {
 @Input() pelicula!:Peliculas;
  constructor(private router:Router) { }

  ngOnInit() {}

  protected readonly faHeartCirclePlus = faHeartCirclePlus;
  protected readonly faCartPlus = faCartPlus;

  onClickImagen() {
    this.router.navigate(["tabs/pelicula",this.pelicula.Id])

  }
}
