import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneCharacterComponent } from './one-character.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedNgModule } from '../../shared-ng.module';

const routes: Routes = [
  { path: '', component: OneCharacterComponent}

];

@NgModule({
  declarations: [
    OneCharacterComponent
  ],
  imports: [
    CommonModule,
    SharedNgModule,
    RouterModule.forChild(routes)
  ]
})
export class OneCharacterModule { }
