import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AdminLoginSignupComponent } from './components/admin-login-signup/admin-login-signup.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [AppComponent, ContactListComponent, AddContactComponent, UpdateContactComponent, LoginSignupComponent, NotFoundComponent, ServerErrorComponent, FilterPipe, AdminLoginSignupComponent, AdminViewComponent, ViewContactComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,MatPaginatorModule,MatTableModule,MatFormFieldModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
