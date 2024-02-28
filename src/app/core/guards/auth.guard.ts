import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let _router = inject(Router);
  let accessToken!: any;
  if (typeof sessionStorage == 'undefined' || sessionStorage == null) {
    // console.log('false1');
    return false;
  }

  accessToken = sessionStorage?.getItem('access_token');
  if (accessToken) {
    // console.log('true');
    return true;
  } else {
    // console.log('false2');
    _router.navigate(['']);
    return false;
  }
};
