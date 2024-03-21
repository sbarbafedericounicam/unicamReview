import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Stats } from './stats';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private httpClient: HttpClient) {}
  
    public getStats(): Observable<Stats>{
      return this.httpClient.get<Stats>(`${environment.baseUrl}/api/stats`);
    }

    
}
