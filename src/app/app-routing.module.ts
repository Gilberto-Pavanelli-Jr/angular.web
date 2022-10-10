import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudListComponent } from './components/CRUD/crud-list/crud-list.component';
import { AddCrudComponent } from './components/add-crud/add-crud.component';

const routes: Routes = [
  {
    path: '',  
    component: CrudListComponent
},
{
  path: 'CRUD',  
  component: CrudListComponent
},
{
  path: 'CRUD/Add',  
  component: AddCrudComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
