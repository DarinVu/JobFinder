import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
  signUpForm: FormGroup;
  loginStatus: boolean;
  isLoading = false;
  error: string = null;
  display = '';


  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {}


  ngOnInit(): void {
    //the route parameter "status" will be 0 for login and 1 for sign up
    this.route.params.subscribe(
      (params: Params) => {
        if (+params['status'] == 0) {
          this.loginStatus = true;
        } else {
          this.loginStatus = false;
        }
      }
    )
    
    this.signUpForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {   
    const email = this.signUpForm.value['email'];
    const password = this.signUpForm.value['password'];

    this.isLoading = true;

    //call the AuthService method login or signup based on the current status
    if (this.loginStatus) {
      this.authService.login(email, password).subscribe(
        resData => {
          this.isLoading = false;
          this.error = null;
          this.router.navigate(['/jobs']);
        }, 
        errorMessage => {
          this.error = errorMessage
          this.isLoading = false;
        }
      );
    } else {
      this.authService.signup(email, password).subscribe(
        resData => {
          this.isLoading = false;
          this.error = null;
          this.openModal();
          // this.router.navigate(['/jobs']);
        }, 
        errorMessage => {
          this.error = errorMessage
          this.isLoading = false;
        }
      );
    }

    
  }

  openModal() {
    this.display = 'block';
  }

  switchToLogin() {
    this.router.navigate(['/auth', 0])
  }

  switchToSignup() {
    this.router.navigate(['/auth', 1]);
  }

  onFind() {
    this.router.navigate(['/jobs']);
  }

  onPost() {
    this.router.navigate(['/post']);
  }
}
