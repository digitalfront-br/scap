import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './components/guard/authentication.guard';
import { GuardLayoutComponent } from './pages/auth/guard-layout.component';
import { HomePageComponent } from './pages/auth/home-page/home-page.component';
import { CreateAccountPageComponent } from './pages/guest/create-account-page/create-account-page.component';
import { ForgotPasswordPageComponent } from './pages/guest/forgot-password-page/forgot-password-page.component';
import { GuestLayoutComponent } from './pages/guest/guest-layout.component';
import { LoginPageComponent } from './pages/guest/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: GuardLayoutComponent,
    children: [
      { path: '', component: HomePageComponent}
    ],
    canActivate: [AuthenticationGuard]
  },
  {
    path: '',
    component: GuestLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'login', component: LoginPageComponent},
      { path: 'create-account', component: CreateAccountPageComponent},
      { path: 'forgot-password', component: ForgotPasswordPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
