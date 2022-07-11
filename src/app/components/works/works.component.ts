import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/portfolio/portfolio.model';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  category?: Category;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.portfolioService.getCategories().subscribe({
      next: (data) => {
        this.category = data;
      },
      complete: () => {
        console.log("categories fetched")
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
