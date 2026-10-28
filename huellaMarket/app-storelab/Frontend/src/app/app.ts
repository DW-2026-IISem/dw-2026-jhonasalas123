import { Component } from '@angular/core';
import { Ejemplo } from './demo/ejemplo/ejemplo';

/**
 * Componente principal (app-root).
 * En ISS-01 compone el componente de ejemplo.
 */
@Component({
  host: { class: 'block' },
  selector: 'app-root',
  imports: [Ejemplo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
