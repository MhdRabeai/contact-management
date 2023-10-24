import { adminAuthGuard } from './shared/admin-auth.guard';
import { AdminLoginSignupComponent } from './components/admin-login-signup/admin-login-signup.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { AuthGuard } from './shared/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';

const routes: Routes = [
  {
    path: 'contact-list',
    component: ContactListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-contact',
    component: AddContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'update-contact/:id',
    component: UpdateContactComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'admin-login', component: AdminLoginSignupComponent },
  {
    path: 'admin-view',
    component: AdminViewComponent,
    canActivate: [adminAuthGuard],
  },
  { path: '', redirectTo: 'login-signup', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
