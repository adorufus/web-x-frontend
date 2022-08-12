import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentConfig, ENV_CONFIG } from '../interfaces/env-config';
import { GeneralSettings } from '../models/general-settings.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralSettingsService {

  apiUrl: String = ""

  constructor(private httpClient: HttpClient, @Inject(ENV_CONFIG) config: EnvironmentConfig) { 

    this.apiUrl = `${config.environment.baseUrl}`

  }

  getSettings(): Observable<GeneralSettings> {
    return this.httpClient.get<GeneralSettings>(this.apiUrl + "settings/general");
  }
}
