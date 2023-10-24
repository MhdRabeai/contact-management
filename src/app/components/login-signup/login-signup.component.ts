import { Login } from './../../model/contact';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from 'src/app/model/contact';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss'],
})
export class LoginSignupComponent implements OnInit {
  isShow: boolean = false;
  signupForm!: FormGroup;
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    // UserData Should Not Be stored in localstorage
    localStorage.removeItem('adminLogin');
    localStorage.removeItem('loginData');

    // *****
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
  switch() {
    this.isShow = !this.isShow;
  }
  submitLogin() {
    this.http
      .get<Login[]>('https://json-server-avob.onrender.com/singUp')
      .subscribe(
        (res) => {
          // Matching Email And Password
          const user = res.find((ele: any) => {
            return (
              ele.email === this.loginForm.value.email &&
              ele.password === this.loginForm.value.password
            );
          });
          // Check Condition For Login
          if (user) {
            alert('Successfully Loged In');
            this.loginForm.reset();
            this.router.navigate(['/contact-list']);
            // Storage Data In Local Storage
            localStorage.setItem('loginData', JSON.stringify(user));
          } else {
            alert('User Not Found With These Credentials');
          }
        },
        (err) => {
          this.loginForm.reset();
          this.router.navigate(['/server-error']);
        }
      );
  }
  submitSignUp() {
    this.http
      .post<SignUp>(
        'https://json-server-avob.onrender.com/singUp',
        this.signupForm.value
      )
      .subscribe(
        () => {
          alert('User SingedUp Successfully!!');
          this.signupForm.reset();
        },
        (err) => {
          this.signupForm.reset();
          this.router.navigate(['/server-error']);
        }
      );
  }
}
