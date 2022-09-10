import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../shared-ng.module';



@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ResetPasswordComponent}
    ]),
    SharedNgModule
  ]
})
export class ResetPasswordModule { }
