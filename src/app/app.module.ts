import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/guest/login-page/login-page.component';
import { CreateAccountPageComponent } from './pages/guest/create-account-page/create-account-page.component';
import { ForgotPasswordPageComponent } from './pages/guest/forgot-password-page/forgot-password-page.component';
import { HomePageComponent } from './pages/auth/home-page/home-page.component';
import { GuardLayoutComponent } from './pages/auth/guard-layout.component';
import { GuestLayoutComponent } from './pages/guest/guest-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CreateAccountPageComponent,
    ForgotPasswordPageComponent,
    HomePageComponent,
    GuardLayoutComponent,
    GuestLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
