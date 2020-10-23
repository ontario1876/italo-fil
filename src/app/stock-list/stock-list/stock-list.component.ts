import { Component, OnInit } from '@angular/core';
import { STOCKS } from '../../stocks';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  stocks = STOCKS;

  constructor() { }

  ngOnInit(): void {
  }

}
