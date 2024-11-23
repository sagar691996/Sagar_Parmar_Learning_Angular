import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import { FlagListComponent } from './flag-list/flag-list.component';
import { FlagListItemComponent } from "./flag-list-item/flag-list-item.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title:string = 'Flag';

  }

