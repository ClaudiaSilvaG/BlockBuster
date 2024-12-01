import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CardpeliculalistaComponent } from './cardpeliculalista.component';

// Interfaz de película para el mock
interface Peliculas {
  id: string;
  movie_id: string;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  popularity: string;
  price: string;
  category: string;
  duration: string;
}

describe('CardpeliculalistaComponent', () => {
  let component: CardpeliculalistaComponent;
  let fixture: ComponentFixture<CardpeliculalistaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CardpeliculalistaComponent, IonicModule.forRoot()] // Importar el componente standalone
    }).compileComponents();

    fixture = TestBed.createComponent(CardpeliculalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería recibir los datos de la película a través de @Input()', () => {
    const mockPelicula: Peliculas = {
      id: '1',
      movie_id: '1',
      title: 'Película 1',
      overview: 'Descripción de la Película 1',
      release_date: '2024-01-01',
      poster_path: 'path/to/poster1',
      popularity: 'alta',
      price: '10',
      category: 'Acción',
      duration: '120 min'
    };

    // Pasar el mock al componente
    component.pelicula = mockPelicula;
    fixture.detectChanges();

    // Verificar si la película fue correctamente asignada al input
    expect(component.pelicula).toEqual(mockPelicula);
  });
});
