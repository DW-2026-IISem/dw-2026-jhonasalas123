import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-forbidden',
  styleUrl: './forbidden.css',
  templateUrl: './forbidden.html',
})
export class Forbidden {
  private readonly route = inject(ActivatedRoute);

  readonly permission = this.route.snapshot.queryParamMap.get('permission');
}
