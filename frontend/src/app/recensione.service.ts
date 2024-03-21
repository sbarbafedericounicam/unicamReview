import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecensioneService {

  constructor(private http: HttpClient) { }

  aggiungiRecensioneCorso(datiRecensione: { corso_di_studio_id: number, voto: number, testo: string, email: string, username: string }): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/recensione-corso`, datiRecensione);
  }

  aggiungiRecensioneMateria(datiRecensione: { materia_id: number, voto: number, testo: string, email: string, username: string }): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/recensione-materia`, datiRecensione);
  }
}
