import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {PeciFormComponent} from './peci-form/peci-form/peci-form.component';
import {PeciViewComponent} from './peci-form/peci-form/peciView-component';
import { ErrorComponent } from './error/error.component';
import { ScheduleComponent } from './schedule/schedule.component'; ;
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'peci', component: PeciFormComponent },
  { path: 'peciView', component: PeciViewComponent },
  { path: 'home', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'login', component: LoginComponent },
  { path: '',
      redirectTo: '/home',
     pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
