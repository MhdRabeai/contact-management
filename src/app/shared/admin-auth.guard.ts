import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  if (localStorage.getItem('adminLogin')) {
    return true;
  } else {
    router.navigate(['/admin-login']);
    alert('You can not accsess this page whithout login');
    return false;
  }
};
