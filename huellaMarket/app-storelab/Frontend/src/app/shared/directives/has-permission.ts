import {
  Directive,
  inject,
  input,
  effect,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { SessionStore } from '../../core/services/session-store';

@Directive({
  selector: '[appHasPermission]',
})
export class HasPermission {
  private readonly session = inject(SessionStore);
  private readonly template = inject(TemplateRef<unknown>);
  private readonly container = inject(ViewContainerRef);

  readonly appHasPermission = input.required<string>();

  constructor() {
    effect(() => {
      this.container.clear();

      if (this.session.canPermission(this.appHasPermission())) {
        this.container.createEmbeddedView(this.template);
      }
    });
  }
}
