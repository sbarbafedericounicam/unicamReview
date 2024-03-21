import { Component } from '@angular/core';
import { CorsiService } from '../corsi.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { __param } from 'tslib';
import { CorsoDetail } from '../corso-detail';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corso-detail',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './corso-detail.component.html',
  styleUrl: './corso-detail.component.scss'
})

export class CorsoDetailComponent {

  public dettaglio?: CorsoDetail;

  constructor(private route: ActivatedRoute, private corsoService: CorsiService){
    this.route.params.subscribe(params=>{
      this.corsoService.getCorso(params['id']).subscribe((corsoDetail) =>{
        this.dettaglio=corsoDetail;
    });
    
    });
  }
}
