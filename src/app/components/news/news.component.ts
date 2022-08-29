import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { News } from 'src/app/models/news.model';
import {Router} from '@angular/router'
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news?: News;

  constructor(private newsService: NewsService, private router: Router) {}

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
        console.log(this.news.data);
      },
      complete: () => {
        console.log("news completed");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
