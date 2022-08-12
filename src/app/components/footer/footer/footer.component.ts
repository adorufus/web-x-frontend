import { Component, Inject, OnInit } from '@angular/core';
import { BROWSER_STORAGE } from 'src/app/utils/storage';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email: string = ""
  phone: string = ""

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage) {
    this.email = this.storage.getItem("company_email") ?? ""
    this.phone = this.storage.getItem("company_phone") ?? ""
  }

  ngOnInit(): void {
  }

}
