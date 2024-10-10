import { Component, OnInit } from '@angular/core';
import { Flag } from '../Shared/Models/flag';
import { NgIf } from '@angular/common';
import { CountryFlagService } from '../services/country-flag.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-flag-list-item',
  standalone: true,
  imports: [NgIf, RouterLink, RouterLinkActive],
  templateUrl: './flag-list-item.component.html',
  styleUrl: './flag-list-item.component.scss'
})

export class FlagListItemComponent implements OnInit{
  
//Needs to be | undef because there wont always be a student thats clicked on
  flag: Flag | undefined; //The student to display
  flagList: Flag[] = [];// to store the list of students
  currentIndex: number = 0;//to track the current index

  constructor(
    private route: ActivatedRoute,
    private CountryFlagService: CountryFlagService,
    private router: Router
  ) {}
//rewrite onInit to get the list of students and the current student
  ngOnInit(): void {
    this.CountryFlagService.getFlag().subscribe(flags  => {
      this.flagList = flags;

      // Subscribe to paramMap changes to actually see the page changing
      //If we dont do this, the URL will change but the view will not
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.flagList.findIndex(flag => flag.id === id);
          this.flag = this.flagList[this.currentIndex];
        }
     });
});
  }

}

