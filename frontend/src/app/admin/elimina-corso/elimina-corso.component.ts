import { Component, OnInit, inject } from '@angular/core';
import { Corso } from '../../corso';
import { CorsiService } from '../../corsi.service';
import { Router, RouterLink } from '@angular/router';
import { Admin } from '../../admin';
import { AdminService } from '../../admin.service';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-elimina-corso',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './elimina-corso.component.html',
  styleUrl: './elimina-corso.component.scss'
})
export class EliminaCorsoComponent implements OnInit{
  corsi: Corso[]=[];
  router = inject(Router);
  servizioCorsi = inject(CorsiService);
  authService=inject(AuthService);
  adminService= inject(AdminService);
  admin!: Admin;
  erroreEliminaCorso: string | null = null;

  constructor(corsiService: CorsiService){
    corsiService.getCorsi().subscribe((corsi)=>{
      this.corsi=corsi;
    });
  }
  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      const email = user?.email ?? '';
      this.adminService.getIsAdmin(email)
        .subscribe(admin => {
          this.admin = admin;
        });
    });
  }

  eliminaCorso(id: number): void {
    this.servizioCorsi.eliminaCorso(id).subscribe({
      next: (risposta) => {
        this.erroreEliminaCorso = null; 
        this.router.navigate(['/corsi']); 
      },
      error: (errore) => {
        if (errore.status === 400) {
          this.erroreEliminaCorso = errore.error; 
        } else {
          this.router.navigate(['/corsi']); 
        }
      }
    });
  }
  
}
