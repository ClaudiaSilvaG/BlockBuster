import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MenuPrincipalComponent } from './menu-principal.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('MenuPrincipalComponent', () => {
  let component: MenuPrincipalComponent;
  let fixture: ComponentFixture<MenuPrincipalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MenuPrincipalComponent], // Importamos el componente standalone
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {} } } // Mock de ActivatedRoute
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('debería crear el componente', () => {
    expect(component).toBeTruthy(); // Verificamos que el componente se cree correctamente
  });
});
