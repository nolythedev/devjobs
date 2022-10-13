import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { JobsService } from '../services/jobs.service';
import { Job } from '../job';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job: Job | undefined;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getJob();
  }

  getJob(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobService.getJob(id)
      .subscribe(job => this.job = job);
  }
}
