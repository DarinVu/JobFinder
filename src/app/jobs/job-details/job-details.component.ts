import { JobsService } from './../jobs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Job } from '../job.model';
import { JobStorageService } from '../job-storage.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit{
  job: Job;
  jobId: number;
  show = false

  constructor(private route: ActivatedRoute, private router: Router, private jobsService: JobsService, private jobStorageService: JobStorageService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.jobId = +params['id'];
        this.job = this.jobsService.getJob(this.jobId);
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
