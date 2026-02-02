import { Component, computed, input, OnInit } from '@angular/core';
import { LeaderboardRowDto } from '../../leaderboard/config/leaderboard-DTO.model';

@Component({
  selector: 'tr[dspl-table-row]',
  standalone: true,
  imports: [],
  templateUrl: './dspl-table-row.component.html',
  styleUrl: './dspl-table-row.component.scss'
})
export class DsplTableRowComponent implements OnInit {
readonly _d = input.required<LeaderboardRowDto>()

readonly cellData = computed(() => {
  const d = this._d();
  return ["Shark", d.username, d.lifetimePoints,  d.createdAt];
});



// readonly 
ngOnInit(): void {
  console.log(this.cellData());
  
}

}
