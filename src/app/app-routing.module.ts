import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SampleComponent } from './sample/sample.component';
import { Template1Component } from './template/template.component';
import { TemplateComponent } from './template/template.component';
import { ParentComponent } from './parent/parent.component';
import { ParentTempComponent } from './parent-temp/parent-temp.component';
import { ParentTempComponent1 } from './parent-temp/parent-temp.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthCandeactivate, AuthGuardService, AuthGuardServiceChild, AuthResolve } from './guards/test.guards';
import { CanActiveChild, CanActiveService, testCanload } from './guards/canActive.guards';
const routes: Routes = [

  { path: 'login', component: LoginformComponent },
  {
    path: 'sample', component: SampleComponent,
    // canDeactivate: [AuthCandeactivate]
    canLoad:[testCanload]
  },
  { path: 'edit/:id', component: LoginformComponent },

  {
    path: 'temp', component: TemplateComponent,
  },

  {
    path: 'cancel', component: ParentComponent,
    resolve: { resolvedData: AuthResolve }
  },

  // { path: 'cancel', component: ParentComponent, },
  { path: 'parent', component: ParentComponent },

  //login page
  {
    path: 'parentTemp', component: ParentTempComponent,

  },

  {
    path: 'parentTemp1', component: ParentTempComponent1,

    canActivate: [CanActiveService],
  },


  {
    path: 'parentTemp', component: ParentTempComponent,

    children: [
      { path: 'parentTemp1', component: ParentTempComponent1 },
      { path: 'parentTemp1', component: ParentTempComponent1 },
      { path: 'parentTemp1', component: ParentTempComponent1 }
    ],
    canActivateChild: [CanActiveChild],
    canActivate: [AuthGuardService]
  },

  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // canLoad: [testCanload]
  },

  { path: 'lazzy', loadChildren: () => import('./lazzy/lazzy.module').then(m => m.LazzyModule),
  // canLoad:[testCanload]
 },

  { path: 'life', loadChildren: () => import('./life/life.module').then(m => m.LifeModule) },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
