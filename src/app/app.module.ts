import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutuspageComponent } from './pages/aboutuspage/aboutuspage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PetspageComponent } from './pages/petspage/petspage.component';
import { PetsnamepageComponent } from './pages/petsnamepage/petsnamepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutuspageComponent,
    NavbarComponent,
    PetspageComponent,
    PetsnamepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
