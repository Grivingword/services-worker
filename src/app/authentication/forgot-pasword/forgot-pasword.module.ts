import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPaswordComponent } from './forgot-pasword.component';
import { SharedNgModule } from '../../shared-ng.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ForgotPaswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ForgotPaswordComponent}
    ]),
    SharedNgModule
  ]
})
export class ForgotPaswordModule { }
