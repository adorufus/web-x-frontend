import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  @Input() id?: string
  newsTitle: String = ""
  newsImage: String = ""
  newsContent: String = ""

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.id = params.get('id')!)

    this.getNews()
  }

  getNews() {
    console.log("test " + this.id);
    this.newsService.getNewsById(this.id!).subscribe({
      next: (data) => {
        console.log(data);
        this.newsTitle = data.data!.title!
        this.newsImage = data.data!.image!
        this.newsContent = data.data!.article!
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
