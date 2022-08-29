import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {

  news?: News;

  constructor(private newsService:NewsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  navigateNews(newsId: string) {
    this.router.navigateByUrl(`/news/${newsId}`);
  }

  fetchNews(): void {
    this.newsService.getNews().subscribe({
      next: (data) => {
        this.news = data;
      },
      complete: () => {
        console.log("news loaded")
      },
      error: (err) => {
        console.log("err");
      }
    })
  }

}
