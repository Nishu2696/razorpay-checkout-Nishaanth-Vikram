import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {
    path:"",
    component: ProductlistComponent
  },
  {
    path: "orders",
    component: OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
