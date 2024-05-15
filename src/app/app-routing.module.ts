import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallComponent } from './getall/getall.component';
import { GetIdComponent } from './get-id/get-id.component';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  {path:'',component:GetallComponent},
  {path:'book/add',component:AddEditComponent},
  {path:'book/:id',component:GetIdComponent},
  {path:'edit/:id',component:AddEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
