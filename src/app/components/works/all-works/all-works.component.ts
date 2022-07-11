import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Portfolio, PortfolioData } from 'src/app/models/portfolio/portfolio.model';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-all-works',
  templateUrl: './all-works.component.html',
  styleUrls: ['./all-works.component.css']
})
export class AllWorksComponent implements OnInit {

  @Input() id?: string
  portfolio?: PortfolioData

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = params.get('type')!)

    console.log(`Category id: ${this.id}`);

    this.getPortfolioData()
  }

  getPortfolioData(): void {
    this.portfolioService.getPortfolios(this.id!).subscribe({
      next: (data) => {
        this.portfolio = data;
      },
      complete: () => {
        console.log("fetching data completed")
      },
      error: (err) => {
        console.log(`an error occured: ${err}`)
      }
    })
  }

}
