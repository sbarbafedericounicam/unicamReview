import { Component, Input } from '@angular/core';
import { Corso } from '../corso';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corso',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './corso.component.html',
  styleUrl: './corso.component.scss'
})
export class CorsoComponent {
  @Input()
  public corso!: Corso;

}