import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PrimeNgModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PrimeNgModule,
  ]
})
export class SharedNgModule {
}
