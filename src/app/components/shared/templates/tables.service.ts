import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
readonly isClickable = signal<boolean>(false)
}
