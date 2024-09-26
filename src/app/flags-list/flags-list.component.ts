import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { Flags } from '../Shared/Modules/flags';
import {FlagsListItemComponent} from '../flags-list-item/flags-list-item.component';


@Component({
  selector: 'app-flags-list',
  standalone: true,
  imports: [NgForOf, NgForOf, FlagsListItemComponent],
  templateUrl: './flags-list.component.html',
  styleUrl: './flags-list.component.css'
})

export class FlagsListComponent {

  title: string = 'National Flags';

  displayedColumns:string[]= ['id', 'country', 'material', 'size', 'isInStock'];
  flagList : Flags[] = [
    { id: 1 , country: "India", material: "Paper", size: "1.5 meter", isInStock: true },
    { id: 2 , country: "Canada", material: "Plastic", size: "1.9 meter", isInStock: false },
    { id: 3 , country: "U.S.A", material: "Paper", size: "1.0 meter", isInStock: true },
    { id: 4 , country: "U.K", material: "Plastic", size: "1.7 meter", isInStock: false },
    { id: 5 , country: "Japan", material: "Paper", size: "1.2 meter", isInStock: true },

  ];
    //Catch the onclick event from the html
    selectedFlag?: Flags;
    // //function to set which student to display
    selectFlag(flag: Flags): void {
      this.selectedFlag = flag;
    }
  

}
