import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Materia } from '../../materia';
import { CorsiService } from '../../corsi.service';
import { AuthService } from '../../auth.service';
import { AdminService } from '../../admin.service';
import { Admin } from '../../admin';

@Component({
  selector: 'app-elimina-materia',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './elimina-materia.component.html',
  styleUrl: './elimina-materia.component.scss'
})
export class EliminaMateriaComponent implements OnInit {

  materie: Materia[]=[];
  router = inject(Router);
  servizioCorsi = inject(CorsiService);
  authService=inject(AuthService);
  adminService= inject(AdminService);
  admin!: Admin;
  erroreEliminaMateria: string | null = null;

  constructor(corsiService: CorsiService){ //so che non andrebbe fatto in corsiservice
    corsiService.getMaterie().subscribe((materie)=>{
      this.materie=materie;
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

  eliminaMateria(id: number): void {
    this.servizioCorsi.eliminaMateria(id).subscribe({
      next: (risposta) => {
        this.erroreEliminaMateria = null; 
        this.router.navigate(['/profilo']); 
      },
      error: (errore) => {
        if (errore.status === 400) {
          this.erroreEliminaMateria = errore.error; 
        } else {
          this.router.navigate(['/profilo']); 
        }
      }
    });
  }

}
