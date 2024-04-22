import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { Job } from './job.model';
import { JobStorageService } from './job-storage.service';
import { JobsService } from './jobs.service';

@Injectable({
    providedIn: 'root'
})
export class JobsResolverService implements Resolve<Job[]> {
    constructor(private jobStorageService: JobStorageService, private jobsService: JobsService) {}


    resolve() {
        if (this.jobsService.getJobs().length === 0) {
            return this.jobStorageService.fetchJobs();
        }
        }
    
}