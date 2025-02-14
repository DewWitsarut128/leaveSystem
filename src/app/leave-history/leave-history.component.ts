import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leave-history',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss']
})
export class LeaveHistoryComponent {
  leaveHistory = [
    { date: '01/01/2023', type: 'ลาพักร้อน', days: 5, status: 'อนุมัติแล้ว', id: 1 },
    { date: '02/01/2023', type: 'ลาป่วย', days: 3, status: 'รออนุมัติ', id: 2 },
    { date: '03/01/2023', type: 'ลากิจ', days: 1, status: 'อนุมัติแล้ว', id: 3 },
    { date: '04/01/2023', type: 'ลาพักร้อน', days: 7, status: 'อนุมัติแล้ว', id: 4 },
  ];

  leaveTypes = ['ลาพักร้อน', 'ลาป่วย', 'ลากิจ'];
  statuses = ['อนุมัติแล้ว', 'รออนุมัติ'];

  selectedType = '';
  selectedStatus = '';

  filteredHistory = this.leaveHistory;

  selectType(type: string) {
    this.selectedType = type;
    this.filterLeaveHistory();
  }

  selectStatus(status: string) {
    this.selectedStatus = status;
    this.filterLeaveHistory();
  }

  filterLeaveHistory() {
    this.filteredHistory = this.leaveHistory.filter(item => {
      return (this.selectedType ? item.type === this.selectedType : true) &&
             (this.selectedStatus ? item.status === this.selectedStatus : true);
    });
  }

  viewLeaveDetails(id: number) {
    console.log('ดูรายละเอียดของการลา ID:', id);
  }
}
