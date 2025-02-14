import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-approve',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar-approve.component.html',
  styleUrls: ['./navbar-approve.component.scss']
})
export class NavbarApproveComponent {
  title: string = "ระบบอนุมัติการลา";

  approveLinks = [
    { name: 'อนุมัติการลา', route: '/approve-leave-request' },
    { name: 'สถิติการลา', route: '/leave-statistics' }
  ];
} 
