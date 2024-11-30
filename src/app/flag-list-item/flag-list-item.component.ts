import { Component, OnInit } from '@angular/core';
import { Flag } from '../Shared/Models/flag';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { CountryFlagService } from '../services/country-flag.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-flag-list-item',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, MatCardModule, MatIconModule],
  templateUrl: './flag-list-item.component.html',
  styleUrl: './flag-list-item.component.scss'
})

export class FlagListItemComponent implements OnInit{
  
//Needs to be | undef because there wont always be a student thats clicked on
  flag: Flag | undefined; //The student to display
  flagList: Flag[] = [];// to store the list of students
  currentIndex: number = 0;//to track the current index
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private CountryFlagService: CountryFlagService,
    private router: Router
  ) {}
//rewrite onInit to get the list of students and the current student
  ngOnInit(): void {
    this.CountryFlagService.getFlag().subscribe({
      next: (flags: Flag[]) => {
        this.flagList = flags;
        this.error = null;

        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.flagList.findIndex(flag => flag.id === id);
            this.flag = this.flagList[this.currentIndex];
          }
       });
    },
    error: (err) => {
      this.error = 'Error fetching flags';
      console.error('Error fetching flags:', err);
    }
  });
}




  items = [
    { name: 'Item 1', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Item 2', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Item 3', imageUrl: 'https://via.placeholder.com/150' },
  ];
} 

