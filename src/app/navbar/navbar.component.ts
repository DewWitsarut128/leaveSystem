import { Component, Input } from '@angular/core'; // ใช้ Input() เพื่อรับค่าจาก parent component
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title: string = "ระบบลางาน";

  navbarLinks  = [
    { name: 'แดชบอร์ด', route: '/dashboard' },
    { name: 'ขอลางาน', route: '/leave-request' },
    { name: 'ประวัติการลา', route: '/leave-history' }
  ];
}
