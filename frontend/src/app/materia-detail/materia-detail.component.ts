import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriaDetail } from '../materia-detail';
import { __param } from 'tslib';
import { CorsiService } from '../corsi.service';

@Component({
  selector: 'app-materia-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materia-detail.component.html',
  styleUrl: './materia-detail.component.scss'
})
export class MateriaDetailComponent {

  public dettaglioMateria?: MateriaDetail;

  constructor(private route: ActivatedRoute, private corsoService: CorsiService){
    this.route.params.subscribe(params=>{
      this.corsoService.getMateria(params['id']).subscribe((materiaDetail) =>{
        this.dettaglioMateria=materiaDetail;
    });
    
    });
  }
}
