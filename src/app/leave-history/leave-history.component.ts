import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios';

import { BuddhistYearPipe } from '../pipes/buddhist-year.pipe';

interface LeaveHistory {
  id: number;
  type: string;
  status: string;
  startDate: string;
  endDate: string;
  days?: number;
}

@Component({
  selector: 'app-leave-history',
  standalone: true,
  imports: [CommonModule, FormsModule, BuddhistYearPipe],
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.scss']
})
export class LeaveHistoryComponent implements OnInit {
  leaveHistory: LeaveHistory[] = []; // ใช้เป็น array
  filteredHistory: LeaveHistory[] = [];

  leaveTypes = ['ลาพักร้อน', 'ลาป่วย', 'ลากิจ'];
  statuses = ['อนุมัติแล้ว', 'รออนุมัติ'];

  selectedType = '';
  selectedStatus = '';

  constructor() {}

  ngOnInit() {
    this.fetchLeaveHistory();
  }

  async fetchLeaveHistory() {
    try {
      const response = await axios.get<LeaveHistory[]>('http://localhost:8080/api/leave-requests');
      this.leaveHistory = response.data.map(item => ({
        ...item,
        days: this.calculateDays(item.startDate, item.endDate)
      }));
      this.filterLeaveHistory();
    } catch (error) {
      console.error('Error fetching leave history:', error);
    }
  }

  calculateDays(startDate: string, endDate: string): number {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  }

  filterLeaveHistory() {
    this.filteredHistory = this.leaveHistory.filter(item => {
      return (!this.selectedType || item.type === this.selectedType) &&
             (!this.selectedStatus || item.status === this.selectedStatus);
    });
  }

  viewLeaveDetails(id: number) {
    console.log('ดูรายละเอียดของการลา ID:', id);
  }
}
