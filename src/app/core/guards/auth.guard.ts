import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let accessToken = sessionStorage!.getItem('access_token');

  if (accessToken) {
    return true;
  } else {
    _router.navigate(['']);
    return false;
  }
};
