import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutuspageComponent } from './pages/aboutuspage/aboutuspage.component';
import { PetspageComponent } from './pages/petspage/petspage.component';
import { PetsnamepageComponent } from './pages/petsnamepage/petsnamepage.component';
import { ServersComponent } from './pages/servers/servers.component';
import { ServernamesComponent } from './pages/servernames/servernames.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { NotfoundpageComponent } from './pages/notfoundpage/notfoundpage.component';
import { ParamexamplepageComponent } from './pages/paramexamplepage/paramexamplepage.component';
import { FormTamplateDrivenComponent } from './pages/form-tamplate-driven/form-tamplate-driven.component';
import { HttpusersComponent } from './pages/httpusers/httpusers.component';
import { TargilQueryParamsComponent } from './pages/targil-query-params/targil-query-params.component';

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
  {
    //http://localhost:4200/params/2022/02/02
    path: 'params/:year/:month/:day',
    component: ParamexamplepageComponent,
  },
  {
    path: 'template',
    component: FormTamplateDrivenComponent,
  },
  {
    path: 'http',
    component: HttpusersComponent,
  },
  {
    path: 'targilqp',
    component: TargilQueryParamsComponent,
  },
  {
    path: 'not-found',
    component: NotfoundpageComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
