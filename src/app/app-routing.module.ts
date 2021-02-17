import { DetailComponent } from './components/detail/detail.component';
import { MeetingPageComponent } from './pages/auth/meeting-page/meeting-page.component';
import { QuestionPageComponent } from './pages/auth/question-page/question-page.component';
import { CategoryPageComponent } from './pages/auth/category-page/category-page.component';
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
      { path: '', component: HomePageComponent},
      { path: 'categories', component: CategoryPageComponent},
      { path: 'categories/:id', component: DetailComponent},
      { path: 'questions', component: QuestionPageComponent},
      { path: 'questions/:id', component: DetailComponent},
      { path: 'meetings', component: MeetingPageComponent},
      { path: 'meetings/:id', component: DetailComponent}
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
