import { Component } from '@angular/core';
import { StatsService } from '../stats.service';
import { Stats } from '../stats';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  stats!: Stats;

  constructor(StatsService: StatsService){
    StatsService.getStats().subscribe((stats)=>{
      this.stats=stats;
    });
  }
}
