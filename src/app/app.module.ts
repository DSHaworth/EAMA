import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material-module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './views/about/about.component';
import { SideNavMainComponent } from './components/side-nav-main/side-nav-main.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { LoginComponent } from './views/login/login.component';

import {interceptorProviders} from './services/interceptors/interceptors';
import { SnackbarComponent } from './services/ui/snackbar.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    SnackbarComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    SideNavMainComponent,
    LandingPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FlexLayoutModule,
    HttpClientModule,

    MaterialModule
  ],
  entryComponents: [SnackbarComponent],
  providers: [ interceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
