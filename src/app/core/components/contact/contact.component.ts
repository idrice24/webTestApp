import { Component, OnInit, Input, Output } from '@angular/core';
import { Stock } from 'src/app/shared/model/stock';
import { EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

	public stocks: Array<Stock>;
  public stock : Stock;
  private counter : number = 1;

  constructor() {
  
   }

  ngOnInit(): void {
    this.stock =  new Stock('Test Stock Company', 'TZI', 85, 80);
  }

  toggleFavorite(){
    console.log('We are toggling the favorite state');
    // this.stocks[index].favorite = !this.stocks[index].favorite;
  }

  changeStockPrice(){
      this.stock.price += 1;
  }

  changeStockObject(){
      this.stock = new Stock('' + this.counter++, 'TSC', 85, 80);
  }

  onToggleFavorite(stock: Stock){
    this.stock.favorite = !this.stock.favorite;
  }
  setStockName(){
  this.stock.name = name;
  }
  createStock(){
    console.log('Creating stock', this.stock);
    this.stock = new Stock( this.stock.name + this.counter++, '', 0,0);
  }

}
