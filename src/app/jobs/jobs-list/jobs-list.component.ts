import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Job } from '../job.model';
import { JobsService } from '../jobs.service';
import { JobStorageService } from '../job-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent implements OnInit, OnDestroy {
  jobs: Job[];
  selectedItem = true;
  subscription: Subscription

  constructor(private jobsService: JobsService, private router: Router, private route: ActivatedRoute, private jobStorageService: JobStorageService) {}

  ngOnInit(): void {
    this.subscription = this.jobsService.jobsChanged.subscribe(
      (jobs) => {
        this.jobs = jobs;
      }
    );
    this.jobs = this.jobsService.getJobs();
    
  }

  onGetDetails(index: number) {
    this.router.navigate([index], {relativeTo: this.route });
  }

  onActivate() {
    this.selectedItem = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
