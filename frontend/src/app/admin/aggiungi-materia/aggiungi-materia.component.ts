import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { CorsiService } from '../../corsi.service';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../admin.service';
import { Admin } from '../../admin';
import { Corso } from '../../corso';

@Component({
  selector: 'app-aggiungi-materia',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './aggiungi-materia.component.html',
  styleUrl: './aggiungi-materia.component.scss'
})
export class AggiungiMateriaComponent implements OnInit {
  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      const email = user?.email ?? '';
      this.adminService.getIsAdmin(email)
        .subscribe(admin => {
          this.admin = admin;
        });
    });
    this.corsiService.getCorsi().subscribe(corsi => {
      this.corsi = corsi;
    });
  }

  fb = inject(FormBuilder);
  authService=inject(AuthService);
  servizioCorsi = inject(CorsiService);
  adminService= inject(AdminService);
  router = inject(Router);
  admin!: Admin;
  corsiService = inject(CorsiService);

  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    anno: ['', Validators.required],
    CFU: ['', Validators.required],
    descrizione: ['', Validators.required],
    corso_di_studio_id: ['', Validators.required],
  });

  erroreNuovoMateria: string | null = null;
  corsi: Corso[] = [];

  onSubmit(): void {
    const datiNuovaMateria = {
      nome: this.form.get('nome')?.value || '',
      anno: parseInt(this.form.get('anno')?.value ?? ''),
      CFU: parseInt(this.form.get('CFU')?.value ?? ''),
      descrizione: this.form.get('CFU')?.value || '',
      corso_di_studio_id: parseInt(this.form.get('corso_di_studio_id')?.value ?? ''),
    };

    this.servizioCorsi.aggiungiMateria(datiNuovaMateria)
    .subscribe({
      next: (risposta) => {
        this.erroreNuovoMateria = null; 
        this.router.navigate(['/profilo']); 
      },
      error: (errore) => {
        if (errore.status === 400) {
          this.erroreNuovoMateria = errore.error; 
        } else {
          this.router.navigate(['/profilo']); 
        }
      }
    });
  }
}
