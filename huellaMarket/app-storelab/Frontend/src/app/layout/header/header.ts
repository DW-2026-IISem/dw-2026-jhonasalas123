import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: { class: 'block' },
})
export class Header {
  readonly title = 'HuellaMarket';
}
