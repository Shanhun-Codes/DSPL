import { Component, input } from '@angular/core';

@Component({
  selector: 'dspl-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
readonly d = input<any>()
}
