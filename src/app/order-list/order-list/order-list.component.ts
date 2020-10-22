import { Component, OnInit } from '@angular/core';

import { ORDERS } from '../../orders';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders = ORDERS;

  constructor() { }

  ngOnInit(): void {
  }

}
