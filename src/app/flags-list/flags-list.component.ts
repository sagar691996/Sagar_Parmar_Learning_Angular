import { Component } from '@angular/core';
import { Flags } from '../Shared/Modules/flags';
import { mockFlag } from '../data/mock-flag';
import { FlagService } from '../services/flag.service';

@Component({
  selector: 'app-flags-list',
  standalone: true,
  templateUrl: './flags-list.component.html',
  styleUrls: ['./flags-list.component.scss'] // Changed from styleUrl to styleUrls
})
export class FlagsListComponent {
  title: string = 'National Flags';
  
  flagList: Flags[] = mockFlag;
  
  constructor (private flagService: FlagService){
    //this constructor is primarily used for dependency injection
  }
  
  

  selectedFlags?: Flags;
  selectFlag(flag: Flags): void {
    this.selectedFlags = flag;
  }
}



