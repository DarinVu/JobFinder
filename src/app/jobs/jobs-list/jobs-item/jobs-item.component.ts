import { ActivatedRoute, Route, Router } from '@angular/router';
import { Job } from '../../job.model';
import { JobsService } from './../../jobs.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-jobs-item',
  templateUrl: './jobs-item.component.html',
  styleUrl: './jobs-item.component.css'
})
export class JobsItemComponent implements OnInit {
  @Input() job: Job;
  @Input() index: number;
  active = false;
  currentIndex: number;
  show = false;
  
  constructor(private jobsService: JobsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.jobsService.currentIndexChanged.subscribe(
      (currIndex: number) => {
        this.currentIndex = currIndex;
      }
    );
    
  }

  onClick() {
    this.jobsService.setCurrentIndex(this.index);
  }

  onShow() {
    this.show = !this.show;
  }

  

}
