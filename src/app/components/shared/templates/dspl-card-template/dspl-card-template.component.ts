import { Component, input } from '@angular/core';

@Component({
  selector: 'dspl-card-template',
  standalone: true,
  imports: [],
  templateUrl: './dspl-card-template.component.html',
  styleUrl: './dspl-card-template.component.scss',
})
export class DsplCardTemplateComponent {
  title = input<string>('');
  loading = input<boolean>()
  error = input<string | null>()
}
