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
import { FormsModule } from '@angular/forms';
import { CardListComponent } from './components/card-list/card-list.component';
import { CategoryPageComponent } from './pages/auth/category-page/category-page.component';
import { QuestionPageComponent } from './pages/auth/question-page/question-page.component';
import { MeetingPageComponent } from './pages/auth/meeting-page/meeting-page.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderLightComponent } from './components/header/header-light/header-light.component';
import { HeaderDarkComponent } from './components/header/header-dark/header-dark.component';
import { DetailComponent } from './components/detail/detail.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MakeSessionComponent } from './components/make-session/make-session.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CreateAccountPageComponent,
    ForgotPasswordPageComponent,
    HomePageComponent,
    GuardLayoutComponent,
    GuestLayoutComponent,
    CardListComponent,
    CategoryPageComponent,
    QuestionPageComponent,
    MeetingPageComponent,
    CardGridComponent,
    FooterComponent,
    HeaderLightComponent,
    HeaderDarkComponent,
    DetailComponent,
    MakeSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
