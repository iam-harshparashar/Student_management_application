import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDashComponent } from './login-dash/login-dash.component';
import { DashRegistrationComponent } from './dash-registration/dash-registration.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {path: '', component: DashRegistrationComponent},
  {path: 'register', component: LoginDashComponent},
  {path: 'teacher-dashboard', component: TeacherDashboardComponent},
  {path: 'search-result', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
