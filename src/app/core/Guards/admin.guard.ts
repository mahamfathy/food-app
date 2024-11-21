import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const _LocalStorageService = inject(LocalStorageService);
  const _Router = inject(Router);
  const role = _LocalStorageService.getItem('role');
  if (role === 'SuperAdmin') {
    return true;
  } else {
    _Router.navigate(['/dashboard']);
    return false;
  }
};
