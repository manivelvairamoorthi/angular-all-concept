import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTempComponent } from './parent-temp.component';

describe('ParentTempComponent', () => {
  let component: ParentTempComponent;
  let fixture: ComponentFixture<ParentTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
