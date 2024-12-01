import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardPeliculaComponent } from './card-pelicula.component'; // Importar el componente standalone

describe('CardPeliculaComponent', () => {
  let component: CardPeliculaComponent;
  let fixture: ComponentFixture<CardPeliculaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CardPeliculaComponent]  // Aquí importamos el componente standalone
    }).compileComponents();

    fixture = TestBed.createComponent(CardPeliculaComponent);
    component = fixture.componentInstance;

    // Asignamos un valor a la propiedad 'pelicula' antes de detectar cambios
    component.pelicula = {
      id: '1',
      movie_id: '123',
      title: 'Movie Title',
      overview: 'Movie Overview',
      release_date: '2024-01-01',
      poster_path: 'poster.jpg',
      popularity: 'high',
      price: '20',
      category: 'Action',
      duration: '120'
    };

    // Llamamos a detectChanges para aplicar los cambios
    fixture.detectChanges();
  }));

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();  // Verificamos que el componente fue creado exitosamente
  });
});
