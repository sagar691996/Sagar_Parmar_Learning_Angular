import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsListsComponent } from './flags-list.component';

describe('FlagsListsComponent', () => {
  let component: FlagsListsComponent;
  let fixture: ComponentFixture<FlagsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagsListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
