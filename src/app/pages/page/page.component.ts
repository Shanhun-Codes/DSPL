import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeaderNavComponent } from '../../components/header-nav/header-nav.component';
import { DeviceService } from '../../shared/services/device.service';
import { LeaderboardComponent } from '../../components/leaderboard/leaderboard.component';
import { DataService } from '../../shared/services/data.service';
import { TABLE_TITLES_CONFIG } from './config/table-titles.config';
import { RegisterForEventComponent } from "../../components/register-for-event/register-for-event.component";
import { EventsService } from '../../components/events/events.service';
import { EventSelectorComponent } from "../../components/events/event-selector/event-selector.component";

@Component({
  selector: 'dspl-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderNavComponent,
    LeaderboardComponent,
    RegisterForEventComponent,
    EventSelectorComponent
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
  // make table titles config
  tableTitles = TABLE_TITLES_CONFIG;
  tService = inject(EventsService);
  ngOnInit() {}
}
