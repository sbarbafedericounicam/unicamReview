import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RecensioneService } from '../recensione.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CorsiService } from '../corsi.service';
import { Corso } from '../corso';


@Component({
  selector: 'app-recensione-corso',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recensione-corso.component.html',
  styleUrl: './recensione-corso.component.scss'
})
export class RecensioneCorsoComponent implements OnInit {
  
  fb = inject(FormBuilder);
  authService=inject(AuthService);
  servizioRecensione = inject(RecensioneService);
  router = inject(Router);
  corsiService = inject(CorsiService);

  form = this.fb.nonNullable.group({
    corso_di_studio_id: ['', Validators.required],
    voto: ['', Validators.required],
    testo: ['', Validators.required],
  });

  erroreRecensione: string | null = null;
  corsi: Corso[] = [];

  ngOnInit(): void {
    this.corsiService.getCorsi().subscribe(corsi => {
      this.corsi = corsi;
    });
  }
  
  onSubmit(): void {
    const datiRecensione = {
      corso_di_studio_id: parseInt(this.form.get('corso_di_studio_id')?.value ?? ''),
      voto: parseInt(this.form.get('voto')?.value ?? ''),
      testo: this.form.get('testo')?.value || '',
      email: this.authService.currentUserSig()?.email ?? '', 
      username: this.authService.currentUserSig()?.username ?? '', 
    };

    this.servizioRecensione.aggiungiRecensioneCorso(datiRecensione)
      .subscribe({
        next: (risposta) => {
          this.erroreRecensione = null; 
          this.router.navigate(['/corso-detail/' + datiRecensione.corso_di_studio_id]); 
        },
        error: (errore) => {
          if (errore.status === 400) {
            this.erroreRecensione = errore.error; 
          } else {
            this.router.navigate(['/corso-detail/' + datiRecensione.corso_di_studio_id]);
          }
        }
      });
  }
}
