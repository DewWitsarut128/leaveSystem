import { Component } from '@angular/core';
import { LeaveRequestService } from '../leave-request.service';
import { BuddhistYearPipe } from '../pipes/buddhist-year.pipe';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

interface LeaveRequest {
  id: number;   
  employeeName: string;
  leaveType: string;
  days: number;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
}

@Component({
  selector: 'app-approve-leave-request',
  standalone: true,
  imports: [CommonModule, FormsModule,BuddhistYearPipe],
  templateUrl: './approve-leave-request.component.html',
  styleUrls: ['./approve-leave-request.component.scss']
})
export class ApproveLeaveRequestComponent {

  leaveRequests: LeaveRequest[] = [];
  pendingLeaveRequests: LeaveRequest[] = [];

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit(): void {
    this.getLeaveRequests();
  }

  getLeaveRequests(): void {
    this.leaveRequestService.getLeaveRequests().then(
      (data) => {
        this.leaveRequests = data;
        this.pendingLeaveRequests = this.leaveRequests.filter(request => request.status === 'รออนุมัติ');
        console.log('Pending Leave Requests:', this.pendingLeaveRequests);
      },
      (error) => {
        console.error('Error fetching leave requests:', error);
      }
    );
  }

  approveLeave(request: LeaveRequest): void {
    request.status = 'อนุมัติแล้ว';

    this.leaveRequestService.updateLeaveRequestStatus(request.id, request).then(
      (updatedRequest) => {
        console.log(`${updatedRequest.employeeName} ได้รับการอนุมัติการลา`);
      },
      (error) => {
        console.error('Error updating leave request status:', error);
      }
    );
  }

  rejectLeave(request: LeaveRequest): void {
    request.status = 'ไม่อนุมัติ';

    this.leaveRequestService.updateLeaveRequestStatus(request.id, request).then(
      (updatedRequest) => {
        console.log(`${updatedRequest.employeeName} ถูกปฏิเสธการลา`);
      },
      (error) => {
        console.error('Error updating leave request status:', error);
      }
    );
  }
}