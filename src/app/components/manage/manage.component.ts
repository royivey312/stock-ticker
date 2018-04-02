import { Component, OnInit } from '@angular/core';
import {StockInterface, StocksService} from '../../services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

  symbols: Array<string>;

  stock: string;

  constructor(private stocksService: StocksService) {
    this.symbols = stocksService.get();
  }

  add(stock) {
    this.symbols = this.stocksService.add( this.stock.toUpperCase() );
    this.stock = '';
  }

  remove(stock) {
    this.symbols = this.stocksService.remove(stock);
  }

}
