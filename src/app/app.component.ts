import { Component, OnInit } from '@angular/core';
import { Product } from './entities/product.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    /*
    // 1.Pass Values from Component to View
    age: number;
    fullName: string;
    status: boolean;
    email: any;
  //1.Pass Values from Component to View
    ngOnInit(): void {
      this.age = 32;
      this.fullName = 'Boriphuth Saensukphattraka';
      this.status = true;
      this.email = 'boriphuth.sa@gmail.com';
    }
    title = 'app';
    */
  /*
  //2.Pass Object from Component to View
  product: Product;

  ngOnInit(): void {
    this.product = {
      id: 'p01',
      name: 'name 1',
      photo: 'card1.png',
      price: 20,
      quantity: 6
    };
  }
    */
   /*
  //3.Pass Object List from Component to View
  products: Product[];

  ngOnInit(): void {
    this.products = [{
      id: 'p01',
      name: 'name 1',
      photo: 'card1.png',
      price: 20,
      quantity: 6
    },
    {
      id: 'p02',
          name: 'name 2',
          photo: 'card2.png',
          price: 12,
          quantity: 3
    },
    {
      id: 'p03',
          name: 'name 3',
          photo: 'card3.png',
          price: 14,
          quantity: 8
    },
    {
      id: 'p04',
          name: 'name 4',
          photo: 'card4.png',
          price: 30,
          quantity: 9
    }
  ]
  }
  */
 //4.Click Event in Angular 5 (Event)
 result: string = '';

  ngOnInit(): void {

  }

  clickMe():void{
    this.result = 'Hello world';
  }

  display(event: any):void{
    //this.result = 'Hello ' + event.target.value;
    this.result = 'Category Id is selected: ' + event.target.value;
  }
}
