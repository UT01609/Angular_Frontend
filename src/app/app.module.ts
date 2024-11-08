import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './Component/list/list.component';
import { AddComponent } from './Component/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './Component/edit/edit.component';
import { TaskFilterPipe } from './pipes/task-filter.pipe';
import { UserListComponent } from './Component/Component/user/user-list/user-list.component';
import { UserFormComponent } from './Component/Component/user/user-form/user-form.component';
import { UserPipe } from './Component/user.pipe';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    TaskFilterPipe,
    UserListComponent,
    UserFormComponent,
    UserPipe,
    AdminDashboardComponent,
    RegisterComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
