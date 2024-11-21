import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const _LocalStorageService = inject(LocalStorageService);
  const _Router = inject(Router);
  const _AuthService = inject(AuthService);
  const userToken = _LocalStorageService.getItem('userToken');
  if (userToken !== null && _AuthService.role === 'SuperAdmin') {
    return true;
  } else {
    _Router.navigate(['/dashboard']);
    return false;
  }
};
