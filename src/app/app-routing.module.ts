import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./pages/signin/signin.component";
import {HomeComponent} from "./pages/admin/home/home.component";
import {AddUserComponent} from "./pages/admin/add-user/add-user.component";
import {ViewUserComponent} from "./pages/admin/view-user/view-user.component";
import {AdminGuard} from "./services/admin.guard";
import {LoginGuard} from "./services/login.guard";

const routes: Routes = [
  {
    path: '',
    component:SigninComponent,
    pathMatch:'full',
    canActivate:[LoginGuard],
  },
  {
    path:'admin-dashboard',
    component:HomeComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'add-user/:username',
        component:AddUserComponent
      },
      {
        path:'view-users',
        component:ViewUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
