import { Component, Input } from '@angular/core';
import { Flags } from '../Shared/Modules/flags';

@Component({
  selector: 'app-flags-list-item',
  templateUrl: './flags-list-item.component.html',
  styleUrls: ['./flags-list-item.component.css']
})
export class FlagsListItemComponent {
@Input() flag!: Flags;
}
