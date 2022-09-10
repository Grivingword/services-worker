import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../shared-ng.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LoginComponent}
    ]),
    SharedNgModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
