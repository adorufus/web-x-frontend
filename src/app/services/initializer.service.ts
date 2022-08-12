import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../utils/storage';
import { GeneralSettingsService } from './general-settings.service';

@Injectable({
  providedIn: 'root'
})
export class InitializerService {

  constructor(private generalSettings: GeneralSettingsService, @Inject(BROWSER_STORAGE) private storage: Storage) { }

  public init(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.generalSettings.getSettings().subscribe({
        next: (data) => {
  
          console.log(data);
  
          this.storage.setItem("app_name", data.data.app_name)
          this.storage.setItem("about_us", data.data.about_us)
          this.storage.setItem("about_us_mini", data.data.about_us_mini)
          this.storage.setItem("company_email", data.data.company_email)
          this.storage.setItem("company_phone", data.data.company_phone)
          this.storage.setItem("jumbotron_image", data.data.jumbotron_image)

          resolve(true);
  
        },
        error: (err) => {
          console.log(err);
          reject(err);
        }
      })
    })
  }
}
