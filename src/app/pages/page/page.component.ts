import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeaderNavComponent } from '../../components/header-nav/header-nav.component';
import { DeviceService } from '../../shared/services/device.service';
import { LeaderboardComponent } from '../../components/leaderboard/leaderboard.component';
import { TournamentsComponent } from '../../components/tournaments/tournaments.component';
import { DataService } from '../../shared/services/data.service';
import { TournamentComponent } from "../../components/tournaments/tournament-detail/tournament-detail.component";
import { TournamentSelectorComponent } from "../../components/tournaments/tournament-selector/tournament-selector.component";
import { DsplCardTemplateComponent } from "../../components/shared/templates/dspl-card-template/dspl-card-template.component";
import { TournamentsApiService } from '../../shared/services/api-services/tournaments-api.service';
import { TournamentsService } from '../../components/tournaments/tournaments.service';

@Component({
  selector: 'dspl-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderNavComponent,
    LeaderboardComponent,
    TournamentSelectorComponent,
],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
})
export class PageComponent implements OnInit {
  deviceService = inject(DeviceService);
  dataService = inject(DataService);
  isMobile = this.deviceService.isMobile;
  isLoading = this.dataService.loading;
  error = this.dataService.error;

  tService = inject(TournamentsService)

ngOnInit() {
}

}
