import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private url = '/assets/data.json';

  constructor(private httpClient: HttpClient) { }

  getJobs(){
    return this.httpClient.get(this.url);
  }

  
}
