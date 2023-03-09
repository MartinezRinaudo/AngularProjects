import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ItemComponent } from './Component/item/item.component';
import { ItemsListComponent } from './Component/items-list/items-list.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"articulos", component:ItemsListComponent},
  {path:"articulos/:id", component:ItemComponent},
  {path:"", redirectTo:"home", pathMatch:'full'},
  {path:"**", component:NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
