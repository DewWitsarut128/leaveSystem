import { Injectable } from '@angular/core';
import axios from 'axios'; 
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  private apiUrl = `${environment.apiUrl}/api/leave-requests`;

  constructor() {}

  createLeaveRequest(leaveRequest: any) {
    return axios.post(this.apiUrl, leaveRequest)
      .then(response => {
        console.log('Request successful:', response);
        return response.data;
      })
      .catch(error => {
        console.error('Error occurred:', error);
        throw new Error('Failed to create leave request');
      });
  }

  getLeaveRequests() {
    return axios.get(this.apiUrl)
      .then(response => {
        console.log('Leave requests fetched:', response);
        return response.data;
      })
      .catch(error => {
        console.error('Error occurred:', error);
        throw new Error('Failed to fetch leave requests');
      });
  }
}
