import { JsonPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlagListComponent } from './flag-list/flag-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgForOf,JsonPipe,FlagListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'Sagar Jameshbhai Parmar';
}
