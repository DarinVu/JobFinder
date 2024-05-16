import { Component, EventEmitter, Output } from '@angular/core';
import { JobStorageService } from '../jobs/job-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(private router: Router) {}

  onSignUp() {
    this.router.navigate(['/auth', 1]);
  }
}
