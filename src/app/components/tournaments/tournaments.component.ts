import { Component, input } from '@angular/core';
import { DsplCardTemplateComponent } from '../shared/templates/dspl-card-template/dspl-card-template.component';


@Component({
  selector: 'dspl-tournaments',
  standalone: true,
  imports: [DsplCardTemplateComponent],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.scss',
})
export class TournamentsComponent {
  title = input<string>();
}
