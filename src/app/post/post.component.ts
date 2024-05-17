import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { JobsService } from '../jobs/jobs.service';
import { Job } from '../jobs/job.model';
import { ActivatedRoute, Router } from '@angular/router';
import { JobStorageService } from '../jobs/job-storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  jobForm: FormGroup
  display = '';


  constructor(private jobsService: JobsService, private router: Router, private jobStorageService: JobStorageService) {}

  ngOnInit(): void {
    let jobRequirements = new FormArray([]);
    this.jobForm = new FormGroup({
      'position': new FormControl(null, Validators.required),
      'company': new FormControl(null, Validators.required),
      'location': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'requirements': jobRequirements,
      'contact': new FormControl(null, [Validators.required, Validators.email])
    })
  }

  onAddRequirement() {
    (<FormArray>this.jobForm.get('requirements')).push(
      new FormGroup({
        'requirement': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteRequirement(index: number) {
    (<FormArray>this.jobForm.get('requirements')).removeAt(index);
  }

  get controls() {
    return (<FormArray>this.jobForm.get('requirements')).controls;
  }

  onSubmit() {
  
    const newJob = new Job(
      this.jobForm.value['position'],
      this.jobForm.value['company'],
      this.jobForm.value['location'],
      this.jobForm.value['description'],
      this.jobForm.value['requirements'],
      this.jobForm.value['contact']
    )
    this.jobsService.addJob(newJob);
    this.jobStorageService.storeJobs();
  }

  openModal() {
    this.display = "block";
  }
  
  onContinue() {
    this.router.navigate(['/jobs']);
  }

  

}
