import { Injectable } from '@angular/core';
import axios from 'axios'; 
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  private apiUrl = `${environment.apiUrl}/api/leave-requests`;

  constructor() {}

  updateLeaveRequestStatus(id: number, updatedRequest: any): Promise<any> {
    return axios.put(`${this.apiUrl}/${id}`, updatedRequest)
      .then(response => response.data)
      .catch(error => {
        console.error('Error updating leave request status:', error);
        throw error;
      });
  }

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

  getLeaveRequests(): Promise<any> {
    return axios.get(this.apiUrl)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching leave requests:', error);
        throw error;
      });
  }
}
