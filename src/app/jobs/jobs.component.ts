import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: any;

  constructor(private service:JobsService) { }

  ngOnInit() {
    this.service.getJobs()
      .subscribe(response => {
        this.jobs = response;
        console.log(response);
      });
}

}
