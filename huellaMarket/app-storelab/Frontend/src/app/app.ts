import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Aside } from './layout/aside/aside';
import { Footer } from './layout/footer/footer';

@Component({
  host: { class: 'block' },
  selector: 'app-root',
  imports: [Header, Aside, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Inicio';
}

