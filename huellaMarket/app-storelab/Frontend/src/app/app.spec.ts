import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App - HuellaMarket', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the header, aside and footer', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-aside')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('should display HuellaMarket content', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('HuellaMarket');
    expect(compiled.textContent).toContain('Mascotas');
    expect(compiled.textContent).toContain('Productos');
  });

  it('should not render the example component', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-ejemplo')).toBeNull();
  });
});
