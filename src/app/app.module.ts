import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ParamexamplepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
