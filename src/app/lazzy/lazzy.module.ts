import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazzyRoutingModule } from './lazzy-routing.module';
import { LazzyComponent } from './lazzy.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
// import { SampleComponent } from '../sample/sample.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [LazzyComponent],
  imports: [
    CommonModule,
    LazzyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ScrollingModule
  ]
})
export class LazzyModule { }
