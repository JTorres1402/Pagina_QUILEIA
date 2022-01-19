import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDispoComponent } from './add-dispo/add-dispo.component';
import { AddRedComponent } from './add-red/add-red.component';
import { ListRedComponent } from './list-red/list-red.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path:'add-dispositivo', component: AddDispoComponent},
  {path:'add-red', component: AddRedComponent},
  {path: 'list-red', component: ListRedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
