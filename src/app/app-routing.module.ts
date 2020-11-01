import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { ListitemComponent } from './listitem/listitem.component';


const routes: Routes = [
  {
    path: 'addItem',
    component: AdditemComponent
  },
  {
    path: 'listItem',
    component: ListitemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
