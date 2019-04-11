import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {PeciFormComponent} from './peci-form/peci-form/peci-form.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'peci', component: PeciFormComponent },
  { path: 'home', component: HomeComponent },
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
