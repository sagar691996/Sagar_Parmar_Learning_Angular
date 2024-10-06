import { Component, Input } from '@angular/core';
import { Flag } from '../Shared/Models/flag';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-flag-list-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './flag-list-item.component.html',
  styleUrl: './flag-list-item.component.scss'
})
export class FlagListItemComponent {
  @Input() flagData?:Flag;
}
