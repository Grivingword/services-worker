import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../shared-ng.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ErrorComponent}
    ]),
    SharedNgModule
  ],
  declarations: [ErrorComponent]
})
export class ErrorModule {
}
