import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductspageComponent } from './productspage/productspage.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch: 'full'},
  {path: 'products', component: ProductspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
