import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateComponent } from './template.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppendPipe } from '../custom.pipe';
import { AppendTest } from 'src/testcustom.pipe';
import { FilerPipe } from '../custom.pipe';
describe('TemplateComponent', () => {
  let component: TemplateComponent;
  let fixture: ComponentFixture<TemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateComponent,AppendPipe ,AppendTest,FilerPipe],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
