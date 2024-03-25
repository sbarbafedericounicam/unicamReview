import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profilo } from './profilo';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {

  constructor(private httpClient: HttpClient) {}

  public getProfilo(email: string): Observable<Profilo>{
    return this.httpClient.get<Profilo>(`${environment.baseUrl}/api/profilo/${email}`);
  }
}
