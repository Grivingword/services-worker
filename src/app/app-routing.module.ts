import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'one-character',
    pathMatch: "full"
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'character',
        loadChildren: () => import('./rick-and-morty/character/character.module').then(m => m.CharacterModule)
      },
      {
        path: 'episode',
        loadChildren: () => import('./rick-and-morty/episode/episode.module').then(m => m.EpisodeModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./rick-and-morty/location/location.module').then(m => m.LocationModule)
      },
    ]
  },
  {
    path: 'one-character',
    loadChildren: () => import('./rick-and-morty/one-character/one-character.module').then(m => m.OneCharacterModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
