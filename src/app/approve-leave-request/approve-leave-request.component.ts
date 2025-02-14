import { Component } from '@angular/core';
import { LeaveRequestService } from '../leave-request.service';

interface LeaveRequest {
  employeeName: string;
  leaveType: string;
  days: number;
  startDate: string;
  endDate: string;
  reason: string;
}

@Component({
  selector: 'app-approve-leave-request',
  templateUrl: './approve-leave-request.component.html',
  styleUrls: ['./approve-leave-request.component.scss']
})
export class ApproveLeaveRequestComponent {

  leaveRequests: LeaveRequest[] = [];

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit(): void {
    this.getLeaveRequests();
  }

  getLeaveRequests(): void {
    this.leaveRequestService.getLeaveRequests().then(
      (data) => {
        this.leaveRequests = data;
        console.log('Leave Requests:', data);
      },
      (error) => {
        console.error('Error fetching leave requests:', error);
      }
    );
  }

  approveLeave(request: any) {
    console.log(`${request.employeeName} ได้รับการอนุมัติการลา`);
  }

  rejectLeave(request: any) {
    console.log(`${request.employeeName} ถูกปฏิเสธการลา`);
  }
}