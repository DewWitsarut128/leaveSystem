import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { HomeComponent } from './home/home.component';

import { ApproveLeaveRequestComponent } from './approve-leave-request/approve-leave-request.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leave-request', component: LeaveRequestComponent },
  { path: 'leave-history', component: LeaveHistoryComponent },
  { path: 'approve-leave-request', component: ApproveLeaveRequestComponent },
  { path: 'leave-statistics', component: StatisticsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
