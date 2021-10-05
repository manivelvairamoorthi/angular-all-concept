import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazzyComponent } from './lazzy.component';
import { SampleComponent } from '../sample/sample.component';

const routes: Routes = [
  { path: '', component: LazzyComponent },
  { path: 'test', component: SampleComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazzyRoutingModule { }
