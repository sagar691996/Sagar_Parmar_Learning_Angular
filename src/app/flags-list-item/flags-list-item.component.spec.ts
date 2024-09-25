import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsListItemComponent } from './flags-list-item.component';

describe('FlagsListItemComponent', () => {
  let component: FlagsListItemComponent;
  let fixture: ComponentFixture<FlagsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagsListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
