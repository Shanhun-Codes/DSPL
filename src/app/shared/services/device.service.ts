import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
isMobile = signal<boolean>(false)
}
