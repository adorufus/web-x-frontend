import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentConfig, ENV_CONFIG } from 'src/app/interfaces/env-config';
import { News } from 'src/app/models/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiUrl?: string;

  constructor(
    private http: HttpClient,
    @Inject(ENV_CONFIG) config: EnvironmentConfig
  ) {
    this.apiUrl = `${config.environment.baseUrl}`;
  }

  getNews(): Observable<News> {
    console.log("hit news service");
    console.log(this.apiUrl);
    return this.http.get<News>(this.apiUrl! + 'news/all', {
      headers: {
        'Bypass-Tunnel-Reminder': 'true',
      },
    });
  }
}
