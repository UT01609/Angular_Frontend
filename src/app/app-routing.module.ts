import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Component/list/list.component';
import { AddComponent } from './Component/add/add.component';
import { EditComponent } from './Component/edit/edit.component';
import { UserFormComponent } from './Component/Component/user/user-form/user-form.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'list',component:ListComponent},

  {path:'add',component:AddComponent},
  {path:'edit/:id',component:EditComponent},

  {path:'user-list',component:UserFormComponent},
  {path:'user-form',component:UserFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
