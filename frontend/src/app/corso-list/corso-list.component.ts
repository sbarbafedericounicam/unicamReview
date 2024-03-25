import { Component, NgModule } from '@angular/core';
import { Corso } from '../corso';
import { CorsiService } from '../corsi.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corso-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './corso-list.component.html',
  styleUrl: './corso-list.component.scss'
})
export class CorsoListComponent {
  corsi: Corso[]=[];

  constructor(corsiService: CorsiService){
    corsiService.getCorsi().subscribe((corsi)=>{
      this.corsi=corsi;
    });
  }
}
