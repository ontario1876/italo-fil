import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list/order-list.component';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./order-list/order-list.module').then((m) => m.OrderListModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
