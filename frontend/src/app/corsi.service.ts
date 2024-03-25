import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Corso } from './corso';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CorsoDetail } from './corso-detail';
import { MateriaDetail } from './materia-detail';
import { Materia } from './materia';

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

    public getMaterie(): Observable<Materia[]>{ //non c'entra con corsi
      return this.httpClient.get<Materia[]>(`${environment.baseUrl}/api/materie`);
    }

    public getMateria(idMateria: number): Observable<MateriaDetail>{
      return this.httpClient.get<MateriaDetail>(`${environment.baseUrl}/api/materia-detail/${idMateria}`);
    }

    aggiungiCorso(datiNuovoCorso: { nome: string, durata: number, descrizione: string, immagine: string}): Observable<any> {
      return this.httpClient.post(`${environment.baseUrl}/api/corsi/nuovo`, datiNuovoCorso);
    }

    aggiungiMateria(datiNuovoCorso: { nome: string, anno: number, CFU: number, descrizione: string, corso_di_studio_id: number}): Observable<any> {
      return this.httpClient.post(`${environment.baseUrl}/api/materie/nuovo`, datiNuovoCorso);
    }

    eliminaCorso(idCorso: number): Observable<any> {
      return this.httpClient.delete(`api/corsi/elimina/${idCorso}`);
    }

    eliminaMateria(idMateria: number): Observable<any> {
      return this.httpClient.delete(`api/materie/elimina/${idMateria}`);
    }
  
   }

