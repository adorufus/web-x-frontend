import { ViewportScroller } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { BROWSER_STORAGE } from 'src/app/utils/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  activeTab = 'Home';
  appName = "" ;
  isCollapsed = true;

  constructor(private viewportScroller: ViewportScroller, @Inject(BROWSER_STORAGE) private storage: Storage) {
    this.appName = this.storage.getItem("app_name") ?? ""
  }

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
