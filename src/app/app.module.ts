import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { HeaderComponent } from './templates/header/header.component';
import { AboutComponent } from './templates/about/about.component';
import { ContactComponent } from './templates/contact/contact.component';
import { LoginComponent } from './includes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppLayoutComponent } from './includes/app-layout/app-layout.component';
import { EmiCalculatorComponent } from './templates/emi-calculator/emi-calculator.component';
import { AppHeaderComponent } from './includes/app-header/app-header.component';
import { AppMenuComponent } from './includes/app-menu/app-menu.component';
import { RegistrationComponent } from './templates/registration/registration.component';
import { HomepageComponent } from './templates/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    AppLayoutComponent,
    EmiCalculatorComponent,
    AppHeaderComponent,
    AppMenuComponent,
    RegistrationComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
