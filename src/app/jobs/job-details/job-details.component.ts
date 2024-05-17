import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Job } from '../job.model';
import { JobStorageService } from '../job-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit{
  job: Job;
  jobId: number;
  show = false
  userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private jobsService: JobsService, 
    private jobStorageService: JobStorageService,
    private authService: AuthService) {}

  ngOnInit() {
    //get id from parameters and fetch the corresponding job from the JobsService
    this.route.params.subscribe(
      (params: Params) => {
        this.jobId = +params['id'];
        this.job = this.jobsService.getJob(this.jobId);
      }
    )

    //check authentication status from AuthService
    this.userSub = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !!user;
      }
    )
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onShow() {
    this.show = !this.show;
  }
  
  onDelete() {
    this.jobsService.deleteJob(this.jobId);
    this.jobStorageService.storeJobs();
    this.router.navigate(['/jobs']);
  }
  
  close() {
    this.show = false;
  }

}
