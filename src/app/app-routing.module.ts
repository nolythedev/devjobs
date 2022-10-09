import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {path: '', redirectTo: 'jobs',pathMatch:'full'},
  {path: 'jobs' , component: JobsComponent},
  { path: 'details/:id', component: JobDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
