import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarApproveComponent } from './navbar-approve/navbar-approve.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, NavbarApproveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LeaveSystem';
  isHomePage = false;
  isManager: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
        this.isManager = event.url === '/approve-leave-request';
      }
    });
  }

  setAsManager() {
    this.isManager = true;
    this.router.navigate(['/approve-leave-request']);
  }

  setAsEmployee() {
    this.isManager = false;
    this.router.navigate(['/dashboard']);
  }
}
