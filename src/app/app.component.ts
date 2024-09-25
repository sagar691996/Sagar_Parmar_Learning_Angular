import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Flags } from './Shared/Modules/flags';
import { CommonModule} from "@angular/common";
import {FlagsListComponent} from "./flags-list/flags-list.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FlagsListComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title: string = 'National Flags';

}