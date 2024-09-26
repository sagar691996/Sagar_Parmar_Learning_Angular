import {Component, Input} from '@angular/core';
import {Flags} from "../Shared/Modules/flags";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-flags-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './flags-list-item.component.html',
  styleUrl: './flags-list-item.component.css'
})
export class FlagsListItemComponent {
  //Input marks the property as an input property
//that can receive data from a parent
  //? says it is optional
  @Input() flag?: Flags;

}