import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagListItemComponent } from './flag-list-item.component';

describe('FlagListItemComponent', () => {
  let component: FlagListItemComponent;
  let fixture: ComponentFixture<FlagListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
