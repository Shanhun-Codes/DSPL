import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeaderNavComponent } from '../../components/header-nav/header-nav.component';
import { DeviceService } from '../../shared/services/device.service';
import { LeaderboardComponent } from "../../components/leaderboard/leaderboard.component";

@Component({
  selector: 'dspl-page',
  standalone: true,
  imports: [HeaderComponent, HeaderNavComponent, LeaderboardComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent {
  deviceService = inject(DeviceService);
  isMobile = this.deviceService.isMobile;
}
