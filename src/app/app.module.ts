import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './menubar/top-nav/top-nav.component';
import { SampleComponent } from './sample/sample.component';
import { ServiceService } from './service.service';
import { RepositoryService } from './repository.service';
import { TemplateComponent } from './template/template.component';
import { Template1Component } from './template/template.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentTempComponent } from './parent-temp/parent-temp.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppendPipe } from './custom.pipe';
import { FilerPipe } from './custom.pipe';
import { AppendTest } from 'src/testcustom.pipe';
import { AuthGuardService } from './guards/test.guards';
import { AuthGuardServiceChild } from './guards/test.guards';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SampleComponent,
    TemplateComponent,
    Template1Component,
    ParentComponent,
    ChildComponent,
    ParentTempComponent,
    LoginformComponent,
    AppendPipe,
    FilerPipe,
    AppendTest,
    LifeCycleHookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   


  ],
  providers: [AuthGuardService, RepositoryService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
