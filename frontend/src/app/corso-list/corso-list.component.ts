import { Component } from '@angular/core';
import { Corso } from '../corso';
import { CorsiService } from '../corsi.service';
import { CorsoComponent } from '../corso/corso.component';

@Component({
  selector: 'app-corso-list',
  standalone: true,
  imports: [CorsoComponent],
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
