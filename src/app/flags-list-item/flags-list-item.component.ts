import { Component, Input } from '@angular/core';
import { Flags } from '../Shared/Modules/flags';

@Component({
  selector: 'app-flags-list-item',
  standalone: true,
  templateUrl: './flags-list-item.component.html',
  styleUrls: ['./flags-list-item.component.scss'] // Changed from styleUrl to styleUrls
})
export class FlagsListComponent {
  @Input() flag?: Flags;
}
