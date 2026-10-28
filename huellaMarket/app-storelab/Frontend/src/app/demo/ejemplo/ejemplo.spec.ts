import { TestBed } from '@angular/core/testing';
import { Ejemplo } from './ejemplo';

describe('Ejemplo', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Ejemplo);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should start with the initial product and price', () => {
    const fixture = TestBed.createComponent(Ejemplo);
    const component = fixture.componentInstance;

    expect(component['producto']().nombre).toBe('Café molido 500 g');
    expect(component['producto']().precio).toBe(18000);
    expect(component['precioFinal']()).toBe(21420);
  });

  it('should increase the price by 1000', () => {
    const fixture = TestBed.createComponent(Ejemplo);
    const component = fixture.componentInstance;

    component['variarPrecio'](1000);

    expect(component['producto']().precio).toBe(19000);
    expect(component['precioFinal']()).toBe(22610);
  });

  it('should change the product name and state', () => {
    const fixture = TestBed.createComponent(Ejemplo);
    const component = fixture.componentInstance;

    component['cambiarNombre']({
      target: { value: 'Alimento para mascotas' },
    } as unknown as Event);

    component['alternarEstado']();

    expect(component['producto']().nombre).toBe('Alimento para mascotas');
    expect(component['producto']().activo).toBe(false);
  });
});
