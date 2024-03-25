import { Component, OnInit, inject } from '@angular/core';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { Profilo } from '../profilo';
import { ProfiloService } from '../profilo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profilo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  authService = inject(AuthService);
  adminService = inject(AdminService);
  router = inject(Router);
  admin!: Admin;

  profilo?: Profilo;

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) { 
        const email = user.email ?? ''; 
        this.adminService.getIsAdmin(email)
          .subscribe(admin => {
            this.admin = admin;
          });

        this.corsoService.getProfilo(email)
          .subscribe((profilo) => {
            console.log("email:", email);
            this.profilo = profilo;
          });
      }
    });
  }

  constructor(private route: ActivatedRoute, private corsoService: ProfiloService) { }
}