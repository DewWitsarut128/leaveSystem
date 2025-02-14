import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LeaveRequestService } from '../leave-request.service';

@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent {
  leaveTypes = [
    { id: 1, name: 'ลาพักร้อน' },
    { id: 2, name: 'ลาป่วย' },
    { id: 3, name: 'ลากิจ' }
  ];

  leaveRequest = {
    userId: '',
    leaveTypeId: null,
    startDate: '',
    endDate: '',
    status: 'รออนุมัติ',
    reason: ''
  };

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit() {}

  submitLeaveRequest() {
    // ตรวจสอบความครบถ้วนของข้อมูล
    if (!this.leaveRequest.userId || !this.leaveRequest.leaveTypeId || !this.leaveRequest.startDate || !this.leaveRequest.endDate || !this.leaveRequest.reason) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    // ส่งคำขอลาไปยัง backend ผ่าน service
    this.leaveRequestService.createLeaveRequest(this.leaveRequest).then(
      (response) => {
        console.log(response);
        alert('คำขอลาได้ถูกส่งเรียบร้อย');
        this.resetForm();
      },
      (error) => {
        console.error('Error:', error);
        alert('เกิดข้อผิดพลาดในการส่งคำขอลา');
      }
    );
  }

  resetForm() {
    // รีเซ็ตข้อมูลฟอร์ม
    this.leaveRequest = {
      userId: '',
      leaveTypeId: null,
      startDate: '',
      endDate: '',
      status: 'รออนุมัติ',
      reason: ''
    };
  }
}
