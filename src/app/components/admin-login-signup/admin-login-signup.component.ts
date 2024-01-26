import { AdminLogin, AdminSignup } from './../../model/contact';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { count } from 'rxjs';

@Component({
  selector: 'app-admin-login-signup',
  templateUrl: './admin-login-signup.component.html',
  styleUrls: ['./admin-login-signup.component.scss'],
})
export class AdminLoginSignupComponent implements OnInit {
  showLogin: boolean = true;
  signupForm!: FormGroup;
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {

    localStorage.removeItem('adminLogin');
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  adminSignup(data: AdminSignup) {
    this.http
      .post<AdminSignup>(
        'https://json-server-avob.onrender.com/adminSignup',
        data
      )
      .subscribe(
        (res) => {
          if (res) {
            alert('Admin Signed Up Successfully');
          } else {
            alert('Please Try Again!!');
          }
          this.signupForm.reset();
        },
        () => {
          alert('Something Went Wrong Please Try After Sometime');
          this.loginForm.reset();
        }
      );
  }
  adminLogin() {
    this.http
      .get<AdminSignup[]>('https://json-server-avob.onrender.com/adminSignup')
      .subscribe(
        (res) => {
          // Matching
          const user = res.find((a: any) => {
            return (
              a.email === this.loginForm.value.email &&
              a.password === this.loginForm.value.password
            );
          });
          // Cheking Condtion
          if (user) {
            alert('Successfully Logged In');
            this.loginForm.reset();
            this.router.navigate(['/admin-view']);
            localStorage.setItem('adminLogin', JSON.stringify(user));
          } else {
            // this.isFetching = true;
            alert('ith These Credentials');
            this.loginForm.reset();
          }
        },
        () => {
          alert('Something Went Wrong Please Try After Sometime');
          this.loginForm.reset();
        }
      );
  }
}
