import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { of } from 'rxjs'; // Utilizado para crear un observable mock

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RegisterPage, IonicModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {}  // O puedes simular los parámetros que necesitas
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
