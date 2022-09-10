import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: 'access',
    loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'forgot-password',
    loadChildren: () => import('./forgot-pasword/forgot-pasword.module').then(m => m.ForgotPaswordModule) },
  { path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule) },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule {
}
