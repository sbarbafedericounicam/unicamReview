import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RecensioneService } from '../recensione.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CorsiService } from '../corsi.service';
import { Materia } from '../materia';

@Component({
  selector: 'app-recensione-materia',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recensione-materia.component.html',
  styleUrl: './recensione-materia.component.scss'
})
export class RecensioneMateriaComponent  implements OnInit{
  
  fb = inject(FormBuilder);
  authService=inject(AuthService);
  servizioRecensione = inject(RecensioneService);
  router = inject(Router);
  corsiService = inject(CorsiService);

  form = this.fb.nonNullable.group({
    materia_id: ['', Validators.required],
    voto: ['', Validators.required],
    testo: ['', Validators.required],
  });

  erroreRecensione: string | null = null;
  materie: Materia[] = [];

  ngOnInit(): void {
    this.corsiService.getMaterie().subscribe(materie => {
      this.materie = materie;
    });
  }

  onSubmit(): void {
    const datiRecensione = {
      materia_id: parseInt(this.form.get('materia_id')?.value ?? ''),
      voto: parseInt(this.form.get('voto')?.value ?? ''),
      testo: this.form.get('testo')?.value || '',
      email: this.authService.currentUserSig()?.email ?? '', 
      username: this.authService.currentUserSig()?.username ?? '', 
    };

    this.servizioRecensione.aggiungiRecensioneMateria(datiRecensione)
      .subscribe({
        next: (risposta) => {
          this.erroreRecensione = null; 
          this.router.navigate(['/materia-detail/' + datiRecensione.materia_id]); 
        },
        error: (errore) => {
          if (errore.status === 400) {
            this.erroreRecensione = errore.error; 
          } else {
            this.router.navigate(['/materia-detail/' + datiRecensione.materia_id]);
          }
        }
      });
  }
}
