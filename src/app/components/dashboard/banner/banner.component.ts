import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { OwlDOMData } from 'ngx-owl-carousel-o/lib/models/owlDOM-data.model';
import { Banner } from 'src/app/models/banner.model';
import { BannerService } from 'src/app/services/banner/banner.service';
import { BROWSER_STORAGE } from 'src/app/utils/storage';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  banners?: Banner;
  jumbotronUrl: string = '';

  customOptions: OwlOptions = {
    loop: true,
    stagePadding: 100,
    margin: 10,
    // autoHeight: true,
    autoWidth: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      767: {
        items: 2,
      },
      1024: {
        items: 2,
      },
    },
    lazyLoad: true,
  };

  constructor(
    private bannerService: BannerService,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {
    this.jumbotronUrl = this.storage.getItem('jumbotron_image') ?? '';
  }

  ngOnInit(): void {
    this.getBanners();
  }

  @ViewChild('owlCarousel') owlElement?: CarouselComponent;

  getBanners() {
    this.bannerService.getBanner().subscribe({
      next: (data) => {
        this.banners = data;
        console.log(this.banners.data);
        this.owlElement?.changed;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
