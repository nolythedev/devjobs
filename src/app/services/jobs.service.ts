import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../job';
import { JOBS } from '../mock-jobs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private url = '/assets/data.json';

  constructor(private httpClient: HttpClient) { }

  getJobs(): Observable<Job[]> {
    const jobs = of(JOBS);
    return jobs;
  }

  getJob(id: number): Observable<Job> {

    const job = JOBS.find(j => j.id === id)!;
    return of(job);
  }
}