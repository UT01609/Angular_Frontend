import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Component/list/list.component';
import { AddComponent } from './Component/add/add.component';
import { EditComponent } from './Component/edit/edit.component';
import { UserFormComponent } from './Component/Component/user/user-form/user-form.component';
import { UserListComponent } from './Component/Component/user/user-list/user-list.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'task',component:ListComponent},
  {path:'list',component:ListComponent},

  {path:'add',component:AddComponent},
  {path:'edit/:id',component:EditComponent},

  {path:'user-list',component:UserListComponent},
  {path:'add-user',component:UserFormComponent},
  {path:'edit-user/:id',component:UserFormComponent},

  
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'', component:LoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
