import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab2Page } from './tab2.page';
import { BlockbusterapiService } from '../services/blockbusterapi.service'; // Importar el servicio real
import { of } from 'rxjs'; // Usamos 'of' para manejar el Observable
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let blockbusterService: BlockbusterapiService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [BlockbusterapiService],
      imports: [Tab2Page, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    blockbusterService = TestBed.inject(BlockbusterapiService);
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería navegar a la previsualización de una película al llamar openPrevisualizarPelicula', () => {
    const navigateSpy = spyOn(component['router'], 'navigate'); // Espiamos el router
    const movieId = '1';

    component.openPrevisualizarPelicula(movieId);

    expect(navigateSpy).toHaveBeenCalledWith(['previsualizar-pelicula', movieId]); // Verificamos que la navegación fue correcta
  });
});
