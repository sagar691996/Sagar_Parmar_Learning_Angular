import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import { CountryFlagService } from '../services/country-flag.service';
import { Flag } from '../Shared/Models/flag';
import { HighlightOnFocusDirective } from '../directives/highlight-on-focus.directive';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule, HighlightOnFocusDirective, MatLabel, MatFormFieldModule, MatTooltipModule,
    MatCheckboxModule, MatButtonModule, MatInput
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent {

  flagForm: FormGroup;
  flag: Flag | undefined;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private flagService: CountryFlagService,
    private router: Router
  ) {
    this.flagForm = this.fb.group({
      id: [this.flagService.generateNewId()],
      country: ['', Validators.required],
      material: ['', Validators.required],
      size: ['', Validators.required],
      isInStock: [false],
      image: [''],
      
    });
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.flagService.getFlagById(+id).subscribe({
        next: flag => {
          if(flag) {
            this.flagForm.patchValue(flag);
          }
        },
        error: err => {
          this.error = 'Error fetching flag';
          console.error('Error fetching flag:', err);
        }
      });
    }
  }
  onSubmit(): void {
    if(this.flagForm.valid) {
      const flag: Flag = this.flagForm.value;
      
      if(flag.id) {
      this.flagService.updateFlag(flag).subscribe(() => this.router.navigate(['/flags']));
    } else {
      flag.id = this.flagService.generateNewId();
      this.flagService.addFlag(flag).subscribe(() => this.router.navigate(['/flags']));
    }
  }
}

  navigateToFlagList(): void {
    this.router.navigate(['/flags']);
  }
}
