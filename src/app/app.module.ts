import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { ApproveLeaveRequestComponent } from './approve-leave-request/approve-leave-request.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LeaveRequestService } from './leave-request.service';

const routes: Routes = [
  { path: 'approve-leave-request', component: ApproveLeaveRequestComponent },
  { path: 'leave-statistics', component: StatisticsComponent },
];

@NgModule({
  declarations: [
    ApproveLeaveRequestComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,  
    HttpClientModule,
    AppComponent,
    LeaveRequestComponent, 
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    CommonModule,
    NgApexchartsModule,
    FormsModule
  ],
  providers: [LeaveRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
