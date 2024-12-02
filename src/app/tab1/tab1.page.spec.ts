import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab1Page } from './tab1.page';
import { HttpClientModule } from '@angular/common/http';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab1Page, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar peliculasTendencia como una lista vacía', () => {
    expect(component.peliculasTendencia.length).toBe(0);
  });

  it('debería seleccionar una categoría correctamente', () => {
    const categoria = 'Terror';
    component.selectCategory(categoria);

    expect(component.selectedCategoria).toBe(categoria);
  });

  it('debería verificar si una categoría está seleccionada', () => {
    component.selectCategory('Comedia');
    expect(component.isCategorySelected('Comedia')).toBeTrue();
    expect(component.isCategorySelected('Acción')).toBeFalse();
  });
});
