import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  show = false;
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    //check authentication from AuthService
    this.userSub = this.authService.user.subscribe(
      (user) => {
        this.isAuthenticated = !!user;
        console.log(this.isAuthenticated);
      }
    )
  }

  onShow() {
    this.show = !this.show;
    console.log(this.isAuthenticated);
  }

  onLogin() {
    this.router.navigate(['/auth', 0]);
  }

  onLogout() {
    this.authService.logout();
  }

  close() {
    this.show = false;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  
}
