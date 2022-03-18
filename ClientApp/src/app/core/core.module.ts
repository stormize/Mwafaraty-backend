import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
  
  ],
  providers: [
    DecimalPipe,
],
})
export class CoreModule { }
