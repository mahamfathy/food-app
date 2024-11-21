import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/auth/service/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  const _LocalStorageService = inject(LocalStorageService);
  const userToken = _LocalStorageService.getItem('userToken');
  if (userToken !== null) {
    return true;
  } else {
    _Router.navigate(['/auth']);
    return false;
  }
};
