import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlockbusterapiService } from './blockbusterapi.service';

describe('BlockbusterapiService', () => {
  let service: BlockbusterapiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa el módulo de pruebas para HttpClient
      providers: [BlockbusterapiService], // Proveedor del servicio
    });
    service = TestBed.inject(BlockbusterapiService); // Inyección del servicio
    httpTestingController = TestBed.inject(HttpTestingController); // Inyección del controlador para mockear HTTP
  });

  afterEach(() => {
    // Verifica que no haya solicitudes HTTP pendientes
    httpTestingController.verify();
  });

  it('debería crear el servicio correctamente', () => {
    // Verifica que el servicio se haya creado
    expect(service).toBeTruthy();
  });

  it('debería obtener una película por ID desde la API', () => {
    // Mock de una película que devolverá la API
    const mockPelicula = [
      {
        id: '1',
        movie_id: '101',
        title: 'Test Movie',
        overview: 'Esta es una película de prueba.',
        release_date: '2024-01-01',
        poster_path: '/path/to/poster.jpg',
        popularity: '10',
        price: '5',
        category: 'Acción',
        duration: '120',
      },
    ];

    // Llamamos al método del servicio con un ID
    service.getPeliculaById('1').subscribe((pelicula) => {
      // Verifica que los datos recibidos coincidan con el mock
      expect(pelicula.length).toBe(1);
      expect(pelicula).toEqual(mockPelicula);
    });

    // Mockea la solicitud HTTP realizada por el servicio con el ID
    const req = httpTestingController.expectOne(
      `${service['urlAPIPelicula']}?id=1`
    );
    expect(req.request.method).toBe('GET'); // Verifica que sea un método GET
    req.flush(mockPelicula); // Responde con el mock
  });
});
