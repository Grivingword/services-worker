import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedNgModule } from '../../shared-ng.module';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedNgModule,
    RouterModule.forChild([
      {path: '', component: RegisterComponent}
    ]),
  ]
})
export class RegisterModule {
}
