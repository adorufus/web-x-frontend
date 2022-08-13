import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbum, Lightbox } from 'ngx-lightbox';
import { Category, CategoryData, Portfolio, PortfolioData, Tier, TierData } from 'src/app/models/portfolio/portfolio.model';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-all-works',
  templateUrl: './all-works.component.html',
  styleUrls: ['./all-works.component.css']
})
export class AllWorksComponent implements OnInit {

  @Input() id?: string
  portfolio?: TierData
  private imageUrls: IAlbum[] = []
  ytUrl: string[] = []

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService, private lightbox: Lightbox) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = params.get('type')!)

    console.log(`Category id: ${this.id}`);

    this.getPortfolioData()
  }

  enlarge(index: number) {
    this.lightbox.open(this.imageUrls, index)
  }

  getPortfolioData(): void {
    this.portfolioService.getPortfolios(this.id!).subscribe({
      next: async (data) => {
        console.log(data);
        this.portfolio = await data;

        var tierData = this.portfolio?.data!

        for(let theData of tierData) {
          this.ytUrl.push(`https://www.youtube.com/embed/${theData.youtube_url}?controls=0`)
          for(let imageData of theData.tier_portofolio_files!) {
            const album: IAlbum = {
              src: imageData.url ?? "",
              caption: imageData.url,
              thumb: imageData.url ?? "",
              downloadUrl: imageData.url ?? ""
            }
            this.imageUrls.push(album)
          }
        }

        console.log(this.portfolio);
      },
      complete: () => {
        console.log("fetching works data completed")
      },
      error: (err) => {
        console.log(`an error occured: ${err}`)
      }
    })
  }

}
