import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Corso } from './corso';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CorsoDetail } from './corso-detail';
import { MateriaDetail } from './materia-detail';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {

  constructor(private httpClient: HttpClient) {}
  
    public getCorsi(): Observable<Corso[]>{
      return this.httpClient.get<Corso[]>(`${environment.baseUrl}/api/corsi`);
    }

    public getCorso(idCorso: number): Observable<CorsoDetail>{
      return this.httpClient.get<CorsoDetail>(`${environment.baseUrl}/api/corso-detail/${idCorso}`);
    }

    public getMateria(idMateria: number): Observable<MateriaDetail>{
      return this.httpClient.get<MateriaDetail>(`${environment.baseUrl}/api/materia-detail/${idMateria}`);
    }
   }

