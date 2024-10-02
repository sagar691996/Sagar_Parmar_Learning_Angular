import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Flags } from './Shared/Modules/flags';
import { CommonModule} from "@angular/common";
import { FlagsListsComponent } from './flags-list/flags-list.component';
import { NgForOf } from '@angular/common';
import { JsonPipe } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FlagsListsComponent, NgForOf, JsonPipe],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})

export class AppComponent {
  
  title = 'Flags';

}