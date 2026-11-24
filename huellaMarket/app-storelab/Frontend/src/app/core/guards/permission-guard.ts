import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionStore } from '../services/session-store';

/**
 * Verifica los permisos de acceso a las rutas de HuellaMarket.
 * data: { permission: 'GET /api/clientes' }
 * El backend Express vuelve a validar la autorización.
 */
export const permissionGuard: CanActivateFn = (route) => {
  const session = inject(SessionStore);
  const router = inject(Router);

  if (!session.authEnabled) {
    return true;
  }

  const permission = route.data?.['permission'] as string | undefined;
  if (!permission || session.canPermission(permission)) {
    return true;
  }

  return router.createUrlTree(['/forbidden'], {
    queryParams: { permission },
  });
};
