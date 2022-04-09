import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  activeTab = 'Home';
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}

  public onClick(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  public setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}
