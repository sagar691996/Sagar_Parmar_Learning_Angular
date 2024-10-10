import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlagListItemComponent } from '../flag-list-item/flag-list-item.component';
import { Flag } from '../Shared/Models/flag';
import { CountryFlagService } from '../services/country-flag.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-flag-list',
  standalone: true,
  imports: [NgForOf,FlagListItemComponent,RouterLink, RouterLinkActive],
  templateUrl: './flag-list.component.html',
  styleUrl: './flag-list.component.scss'
})
export class FlagListComponent implements OnInit {

  displayedColumns:string[]= ['id', 'firstName', 'lastName', 'department', 'isAdmin'];
  flagList:Flag[] = [];

  constructor (private CountryFlagService: CountryFlagService){
    //this constructor is primarily used for dependency injection
  }

  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
   this.CountryFlagService.getFlag().subscribe({
     next: (data: Flag[]) => this.flagList = data,
     error:err => console.error("Its not fetching the flags form the arrays", err),
     complete:() => console.log("Flag data fetch complete!")
   })

  }

  selectedFlag?: Flag;
  selectFlag(flag: Flag): void {
    this.selectedFlag = flag;
  }
  //   { id: 1, country: 'India', material: 'Paper', size: '1.5 meter', isInStock: true },
  //   { id: 2, country: 'Canada', material: 'Plastic', size: '1.9 meter', isInStock: false },
  //   { id: 3, country: 'U.S.A', material: 'Paper', size: '1.0 meter', isInStock: true },
  //   { id: 4, country: 'U.K', material: 'Plastic', size: '1.7 meter', isInStock: false },
  //   { id: 5, country: 'Japan', material: 'Paper', size: '1.2 meter', isInStock: true }
  // ];
}
