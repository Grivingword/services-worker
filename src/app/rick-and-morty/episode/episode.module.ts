import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeComponent } from './episode.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedNgModule } from '../../shared-ng.module';

const routes: Routes = [
  { path: '', component: EpisodeComponent}

];

@NgModule({
  declarations: [
    EpisodeComponent
  ],
  imports: [
    CommonModule,
    SharedNgModule,
    RouterModule.forChild(routes)
  ]
})
export class EpisodeModule { }
