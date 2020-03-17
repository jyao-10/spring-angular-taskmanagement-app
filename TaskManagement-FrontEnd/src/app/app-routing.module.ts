import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewToDoListComponent } from './view-to-do-list/view-to-do-list.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { EditToDoComponent } from './edit-to-do/edit-to-do.component';
import { LoginComponent } from './login/login.component';
import { ViewAdminListComponent } from './view-admin-list/view-admin-list.component';

const routes: Routes = [
  { path : 'todos/view', component: ViewToDoListComponent}, 
  { path : 'todos/add', component: AddToDoComponent},
  { path : 'todos/edit/:id', component: EditToDoComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'todos/logout', component: LoginComponent},
  { path : 'todos/login', component: LoginComponent},
  { path: 'todos/admin', component: ViewAdminListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

