import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { JobsService } from './jobs.service';
import { Job } from './job.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class JobStorageService {

    constructor(private http: HttpClient, private jobsService: JobsService) {}

    storeJobs() {
        const jobs = this.jobsService.getJobs();
        this.http.put('https://ng-job-listing-default-rtdb.firebaseio.com/jobs.json', 
            jobs).subscribe(response => {
                console.log(response);
            });
    } 

    fetchJobs() {
        return this.http.get<Job[]>('https://ng-job-listing-default-rtdb.firebaseio.com/jobs.json')
        .pipe(map(jobs => {
            return jobs.map(job => {
                return { ...job, requirements: job.requirements ? job.requirements : []};
            })
        }), tap(jobs => {
            this.jobsService.setJobs(jobs);
        }))
    }

    

}