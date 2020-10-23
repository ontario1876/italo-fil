import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
    loadChildren: () => import('./order-list/order-list.module').then((m) => m.OrderListModule),
  },
  { path: 'stock-list',
    loadChildren: () => import('./stock-list/stock-list.module').then((m) => m.StockListModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
