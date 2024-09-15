import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import { ApiPeliculasService } from '../services/api-peliculas.service';
>>>>>>> 31f8896cd3b68e9984fa1320740a8881164d0d14

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButtons, IonMenuButton],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {

<<<<<<< HEAD

  categorias: string[] = ['Todo', 'Acción', 'Comedia', 'Drama', 'Terror', 'Romance', 'Suspenso', 'Aventura', 'Animación', 'Documental'];
=======
  //--------------------------------------------------------------------------------------------------------------------//
  // ---------                                  CARGA Y SELECCIÓN DE CATEGORÍA                                 ---------//
  // -------------------------------------------------------------------------------------------------------------------//
  categorias: string[] = ['Todo', 'Acción', 'Comedia', 'Drama', 'Terror', 'Romance', 'Suspenso', 'Aventura', 'Animación', 'Documental']; // Aquí tenemos la lista de categorías a seleccionar
>>>>>>> 31f8896cd3b68e9984fa1320740a8881164d0d14

  selectedCategoria: string = this.categorias[0]; // Inicia la categoría en 'Todos'

  // Función para verificar cual categoría seleccionó el usuario
  selectCategory(categoria: string) {
    this.selectedCategoria = categoria;
    console.log("Categoría seleccionada: ", categoria);
  }

  // Verificamos que categoría está seleccionada
  isCategorySelected(category: string) {
    return this.selectedCategoria === category;
  }

<<<<<<< HEAD

  constructor() { }
=======
  //--------------------------------------------------------------------------------------------------------------------//
  // ---------                      PROMESA PARA SOLICITAR PELÍCULAS TENDENCIAS GLOBALES                       ---------//
  // -------------------------------------------------------------------------------------------------------------------//
  peliculasTendencia: any[] = []; // Lista para almacenar películas continuar viendo

  constructor(private apiPeliculas: ApiPeliculasService) { } // Inyectamos el servicio

  ngOnInit() {
    this.apiPeliculas.getPeliculas(15, 0, "puntuacion").subscribe((data) => {
      this.peliculasTendencia = data as any[];
      console.log("Películas: ", this.peliculasTendencia);
    });
  }


>>>>>>> 31f8896cd3b68e9984fa1320740a8881164d0d14
}
