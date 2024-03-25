import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CorsiService } from '../../corsi.service';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../admin.service';
import { Admin } from '../../admin';

@Component({
  selector: 'app-aggiungi-corso',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './aggiungi-corso.component.html',
  styleUrl: './aggiungi-corso.component.scss'
})
export class AggiungiCorsoComponent implements OnInit{
  
  
  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      const email = user?.email ?? '';
      this.adminService.getIsAdmin(email)
        .subscribe(admin => {
          this.admin = admin;
        });
    });
  }

  fb = inject(FormBuilder);
  authService=inject(AuthService);
  servizioCorsi = inject(CorsiService);
  adminService= inject(AdminService);
  router = inject(Router);
  admin!: Admin;
  

  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    durata: ['', Validators.required],
    descrizione: ['', Validators.required],
    immagine: ['', Validators.required],
  });

 

  erroreNuovoCorso: string | null = null;

  onSubmit(): void {
    const datiNuovoCorso = {
      nome: this.form.get('nome')?.value || '',
      durata: parseInt(this.form.get('durata')?.value ?? ''),
      descrizione: this.form.get('descrizione')?.value || '',
      immagine: this.form.get('immagine')?.value || '',
    };

    this.servizioCorsi.aggiungiCorso(datiNuovoCorso)
    .subscribe({
      next: (risposta) => {
        this.erroreNuovoCorso = null; 
        this.router.navigate(['/corsi']); 
      },
      error: (errore) => {
        if (errore.status === 400) {
          this.erroreNuovoCorso = errore.error; 
        } else {
          this.router.navigate(['/corsi']); 
        }
      }
    });
  }
}
