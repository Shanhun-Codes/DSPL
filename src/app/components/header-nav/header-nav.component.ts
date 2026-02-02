import { Component, inject, signal } from '@angular/core';
import { HEADER_NAV_CONFIG, HeaderNavItem } from './config/header-nav.config';
import { RouterLink } from "@angular/router";
import { DeviceService } from '../../shared/services/device.service';

@Component({
  selector: 'dspl-header-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  deviceService = inject(DeviceService)
  isMobile = this.deviceService.isMobile
  readonly navListItems: HeaderNavItem[] = HEADER_NAV_CONFIG
}
