import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedNgModule } from '../../shared-ng.module';

const routes: Routes = [
  { path: '', component: LocationComponent}

];

@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CommonModule,
    SharedNgModule,
    RouterModule.forChild(routes)
  ]
})
export class LocationModule { }
