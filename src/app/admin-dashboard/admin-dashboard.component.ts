import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  sideBarOpen = true;
  

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(){
    console.log("test");
    
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
