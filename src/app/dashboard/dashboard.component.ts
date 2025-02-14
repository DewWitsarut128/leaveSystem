import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  leaveDaysRemaining:string = '';
  leaveRequestsCount:string = '';
  totalLeaveDays:string = '';
  date:string = '';
  type:string = '';
  days:string = '';
  status:string = '';

  latestLeaveRequests: any[] = [
    {
      date: '10 ม.ค. 2568',
      type: 'พักร้อน',
      days: '5 วัน',
      status: 'รออนุมัติ'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
