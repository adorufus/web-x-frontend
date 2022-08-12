import { Component, Inject, OnInit } from '@angular/core';
import { BROWSER_STORAGE } from 'src/app/utils/storage';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  miniAbout: string = ""

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage) {
    this.miniAbout = this.storage.getItem("about_us_mini") ?? ""
   }

  ngOnInit(): void {
  }

}
