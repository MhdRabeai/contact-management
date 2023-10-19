import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  if (localStorage.getItem('loginData')) {
    return true;
  } else {
    router.navigate(['/']);
    alert('You can not accsess this page whithout login');
    return false;
  }
};
