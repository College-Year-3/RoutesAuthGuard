import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { LoginComponent } from './core/login/login.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', redirectTo: '/Home'},
  {path: 'sample1', component: Sample1Component},
  {path: 'sample2', component: Sample2Component},
  {path: 'sample3', component: Sample3Component, canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent }, // Form, path name has to be same as folder name
  {path: 'register', component: RegisterComponent }, // Form, path name has to be same as folder name
  {path: '**', component: NotFoundComponent, pathMatch: 'full'} // this needs to be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ AuthGuard ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
