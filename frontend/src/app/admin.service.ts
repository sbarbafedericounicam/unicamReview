import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) {}

  public getIsAdmin(email: string): Observable<Admin>{
    return this.httpClient.get<Admin>(`${environment.baseUrl}/api/is-admin/${email}`);
  }

}
