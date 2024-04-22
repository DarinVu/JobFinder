import { Injectable } from "@angular/core";
import { Job } from "./job.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class JobsService {
    jobsChanged = new Subject<Job[]>();
    currentIndexChanged = new Subject<number>();

    private jobs = [];

    private currentIndex: number;

    public getJobs() {
        return this.jobs.slice();
    }

    public getJob(index: number) {
        return this.jobs[index];
    }

    public addJob(newJob: Job) {
        this.jobs.push(newJob);
        this.jobsChanged.next(this.jobs.slice());
    }

    public setJobs(jobs: Job[]) {
        this.jobs = jobs
    }

    public setCurrentIndex(index: number) {
        this.currentIndex = index;
        this.currentIndexChanged.next(this.currentIndex);
    }

    public editJob(newJob: Job, index: number) {
        this.jobs[index] = newJob;
    }

    public deleteJob(index: number) {
        this.jobs.splice(index, 1);
        this.jobsChanged.next(this.jobs.slice());
    }
}