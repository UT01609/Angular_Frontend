import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Component/list/list.component';
import { AddComponent } from './Component/add/add.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'list',component:ListComponent},
  {path:'add',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
