import { JsonPipe, NgForOf } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FlagListComponent } from './flag-list/flag-list.component';
import { FlagListItemComponent } from "./flag-list-item/flag-list-item.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, FlagListComponent, FlagListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title:string = 'Flag';

  // isNumber = 3;
  // flagById :Observable<Flag | undefined>;

  // constructor (private CountryFlagService: CountryFlagService){
  //   this.flagById = this.CountryFlagService.getFlagById(this.isNumber);
  // };

  // ngOnInit(): void {
  //   // Call the getBooks method from BooksService and subscribe to the Observable
  //   this.CountryFlagService.getFlag().subscribe({
  //     next: (data: Flag[]) => this.flag = data,
  //     error: err => console.error("Error Fetching Flags", err),
  //     complete: () => console.log("Flag Fetch Complete!")
  //   });

  //   this.CountryFlagService.getFlagById(3).subscribe({
  //     next: (data: Flag[]) => this.flag = data,
  //     error: err => console.error("Error Fetching Books", err),
  //     complete: () => console.log("Books Fetch Complete!")
  //   });


  }

