import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarApproveComponent } from './navbar-approve.component';

describe('NavbarApproveComponent', () => {
  let component: NavbarApproveComponent;
  let fixture: ComponentFixture<NavbarApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarApproveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
