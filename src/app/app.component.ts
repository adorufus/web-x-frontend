import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { GeneralSettingsService } from './services/general-settings.service';
import { BROWSER_STORAGE } from './utils/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'Artemiz';

  constructor(private generalSettings: GeneralSettingsService, @Inject(BROWSER_STORAGE) private storage: Storage){
    
  }

  ngAfterViewInit(): void {
    (<any>window).twttr.widgets.load(document.getElementById("container"))
  }

  ngOnInit(): void {
    // this.getSettings();
  }

  // getSettings() {
  //   this.generalSettings.getSettings().subscribe({
  //     next: (data) => {

  //       console.log(data);

  //       this.storage.setItem("app_name", data.data.app_name)
  //       this.storage.setItem("about_us", data.data.about_us)
  //       this.storage.setItem("about_us_mini", data.data.about_us_mini)
  //       this.storage.setItem("company_email", data.data.company_email)
  //       this.storage.setItem("company_phone", data.data.company_phone)
  //       this.storage.setItem("jumbotron_image", data.data.jumbotron_image)

  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }


}
