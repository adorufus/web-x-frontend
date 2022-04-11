import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
})
export class NewsItemComponent implements OnInit {

  @Input() newsData?: any;

  constructor() {}

  ngOnInit(): void {
    console.log(`data passed to child: ${this.newsData}`)
  }
}
