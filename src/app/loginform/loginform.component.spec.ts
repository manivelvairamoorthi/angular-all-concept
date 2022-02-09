import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Router } from '@angular/router';
import { LoginformComponent } from './loginform.component';
import { RepositoryService } from '../repository.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, NgForm } from '@angular/forms'
describe('LoginformComponent', () => {
  let component: LoginformComponent;
  let fixture: ComponentFixture<LoginformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginformComponent],
      imports: [HttpClientModule,FormsModule],
      providers: [RepositoryService,  Router, {
        provide: Router,
        useClass: class { navigate = jasmine.createSpy("navigate"); }
      }],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sample test', () => {
    expect(component).toBeTruthy();
  });

  it('validLogin', () => {
    fixture = TestBed.createComponent(LoginformComponent);
    component=fixture.componentInstance;
    component.temp.username="test";
    component.temp.password="test";
    component.submitFunction();
    expect(component.service.loginstatus).toBe(true);
  });


  it('saample test',()=>{
    expect(component).toBeTruthy();
  });

});
