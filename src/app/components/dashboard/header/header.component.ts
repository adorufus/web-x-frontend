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

  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
  }

  public setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}
