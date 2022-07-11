import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentConfig, ENV_CONFIG } from 'src/app/interfaces/env-config';
import { Category, Portfolio, PortfolioData } from 'src/app/models/portfolio/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  apiUrl?: string

  constructor(private http: HttpClient, @Inject(ENV_CONFIG) config: EnvironmentConfig) {
    this.apiUrl = `${config.environment.baseUrl}`
  }

  getCategories(): Observable<Category> {
    console.log("hit categories api")
    return this.http.get<Category>(this.apiUrl! + 'portfolio/category/all')
  }
  
  getPortfolios(id: string): Observable<PortfolioData> {
    console.log("hit portfolio api")
    return this.http.get<PortfolioData>(this.apiUrl! + `portfolio?id=${id}`)
  }
}
