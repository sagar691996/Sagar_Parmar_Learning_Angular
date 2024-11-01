import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import { CountryFlagService } from '../services/country-flag.service';
import { Flag } from '../Shared/Models/flag';


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent {

  flagForm: FormGroup;
  flag: Flag | undefined;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private flagService: CountryFlagService,
    private router: Router
  ) {
    this.flagForm = this.fb.group({
      id: ['', Validators.min(0)],
      name: ['', Validators.required],
      title: ['', Validators.required],
      class: ['', Validators.pattern(/^[A-Z, a-z]*$/)],
      price: ['', Validators.max(7300)],
      isOP: [false],
      src: ['']
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.flagService.getFlagById(+id).subscribe(flag => {
        if(flag) {
          this.flag = flag;
          this.flagForm.patchValue(flag);
        }
      });
    }
  }
  onSubmit(): void {
    const flag: Flag = this.flagForm.value;

    if(flag.id) {
      this.flagService.updateFlag(flag);
    } else {
      flag.id = this.flagService.generateNewId();
      this.flagService.addFlag(flag);
    }
    this.router.navigate(['/flags']);
  }

  navigateToFlagList(): void {
    this.router.navigate(['/flags']);
  }
}
