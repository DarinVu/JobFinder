import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { JobsService } from '../jobs.service';
import { Job } from '../job.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { JobStorageService } from '../job-storage.service';

@Component({
  selector: 'app-jobs-edit',
  templateUrl: './jobs-edit.component.html',
  styleUrl: './jobs-edit.component.css'
})
export class JobsEditComponent implements OnInit {
  jobForm: FormGroup
  display = '';
  id: number;
  job: Job;


  constructor(private jobsService: JobsService, private router: Router, private jobStorageService: JobStorageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    )

    this.job = this.jobsService.getJob(this.id);

    let jobRequirements = new FormArray([]);

    for (let requirement of this.job.requirements) {
      jobRequirements.push(
        new FormGroup({
          'requirement': new FormControl(requirement["requirement"])
        }));
    }
        
    this.jobForm = new FormGroup({
      'position': new FormControl(this.job.position, Validators.required),
      'company': new FormControl(this.job.company, Validators.required),
      'location': new FormControl(this.job.location, Validators.required),
      'description': new FormControl(this.job.description, Validators.required),
      'requirements': jobRequirements,
      'contact': new FormControl(this.job.contact, [Validators.required, Validators.email])
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

    this.jobsService.editJob(newJob, this.id);
    this.jobStorageService.storeJobs();
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  openModal() {
    this.display = "block";
  }
  
  // onContinue() {
  //   this.router.navigate(['../'], {relativeTo: this.route});
  // }
  

  
}
