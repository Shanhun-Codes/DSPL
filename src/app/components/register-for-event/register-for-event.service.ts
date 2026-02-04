import { Injectable, OnInit, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterForEventService implements OnInit {
  selectedRowId = signal<string | null>(null);
  eventsInstorage = sessionStorage.getItem('downtown-springfield-poker-events');

  showSelectedEventInOptionOnTableRowClick() {
    console.log("CLICKED FROM RFE SERVICE");
    
    if (!this.selectedRowId) return;
    return JSON.parse(this.eventsInstorage!).find(
      (e: any) => e.id === this.selectedRowId(),
    );
  }

  ngOnInit(): void {}
}
