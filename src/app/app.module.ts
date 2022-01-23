import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutuspageComponent } from './pages/aboutuspage/aboutuspage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PetspageComponent } from './pages/petspage/petspage.component';
import { PetsnamepageComponent } from './pages/petsnamepage/petsnamepage.component';
import { ServersComponent } from './pages/servers/servers.component';
import { ServernamesComponent } from './pages/servernames/servernames.component';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { ParamexamplepageComponent } from './pages/paramexamplepage/paramexamplepage.component';
import { FormTamplateDrivenComponent } from './pages/form-tamplate-driven/form-tamplate-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutuspageComponent,
    NavbarComponent,
    PetspageComponent,
    PetsnamepageComponent,
    ServersComponent,
    ServernamesComponent,
    NotfoundpageComponent,
    ParamexamplepageComponent,
    FormTamplateDrivenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
