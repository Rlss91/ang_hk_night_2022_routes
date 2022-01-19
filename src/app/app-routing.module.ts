import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutuspageComponent } from './pages/aboutuspage/aboutuspage.component';
import { PetspageComponent } from './pages/petspage/petspage.component';
import { PetsnamepageComponent } from './pages/petsnamepage/petsnamepage.component';
import { ServersComponent } from './pages/servers/servers.component';
import { ServernamesComponent } from './pages/servernames/servernames.component';
import { AuthGuardGuard } from './services/auth-guard.guard';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'aboutus', component: AboutuspageComponent },
  {
    path: 'pets',
    canActivate: [AuthGuardGuard],
    component: PetspageComponent,
    children: [{ path: 'petsname', component: PetsnamepageComponent }],
  },
  {
    path: 'servers',
    canActivateChild: [AuthGuardGuard],
    component: ServersComponent,
    children: [{ path: 'servernames', component: ServernamesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
