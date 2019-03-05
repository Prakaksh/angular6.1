import { NgModule } from '@angular/core';
import {RouterModule,Routes}from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ListEmployeeComponent } from './app/employee/list-employee.component';
import { CreateEmployeeComponent } from './app/employee/create-employee.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ProfileComponent } from './app/profile/profile.component';


//AppRoutingModule
const appRoutes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"list",component:ListEmployeeComponent},
  {path:"profileCreate",component:ProfileComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent}
]

@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
 
})


export class AppRoutingModule { }

