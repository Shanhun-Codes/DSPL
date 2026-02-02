import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from "./pages/page/page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
