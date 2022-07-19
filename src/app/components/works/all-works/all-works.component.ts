import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = params.get('type')!)

    console.log(`Category id: ${this.id}`);

    this.getPortfolioData()
  }

  getPortfolioData(): void {
    this.portfolioService.getPortfolios(this.id!).subscribe({
      next: async (data) => {
        console.log(data);
        this.portfolio = await data;

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
