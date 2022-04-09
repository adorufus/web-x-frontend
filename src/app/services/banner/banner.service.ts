import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentConfig, ENV_CONFIG } from 'src/app/interfaces/env-config';
import { Banner } from 'src/app/models/banner.model';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  apiUrl?: string;
  constructor(
    private http: HttpClient,
    @Inject(ENV_CONFIG) config: EnvironmentConfig
  ) {
    console.log(config.environment.baseUrl);
    this.apiUrl = `${config.environment.baseUrl}`;
  }

  getBanner(): Observable<Banner> {
    return this.http.get<Banner>(this.apiUrl! + 'banner/all');
  }

  onClick() {}
}
