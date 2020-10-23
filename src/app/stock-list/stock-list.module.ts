import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockListRoutingModule } from './stock-list-routing.module';
import { StockListComponent } from './stock-list/stock-list.component';


@NgModule({
  declarations: [StockListComponent],
  imports: [
    CommonModule,
    StockListRoutingModule
  ]
})
export class StockListModule { }
