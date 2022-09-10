import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access.component';
import { RouterModule } from '@angular/router';
import { SharedNgModule } from '../../shared-ng.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AccessComponent}
    ]),
    SharedNgModule
  ],
  declarations: [AccessComponent]
})
export class AccessModule {
}
