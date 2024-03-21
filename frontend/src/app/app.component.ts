import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet, provideRouter } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'frontend';
  authService=inject(AuthService)

  ngOnInit(): void {
    this.authService.user$.subscribe((user)=>{
      if(user){
        this.authService.currentUserSig.set({
          email:user.email!,
          username:user.displayName!,
        });
      }else{
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
