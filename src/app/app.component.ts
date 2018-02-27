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
 
 //2.Pass Object from Component to View
 product: Product;

 ngOnInit(): void {
  this.product = {
    id: 'p01',
    name: 'name 1',
    photo: 'thumb1.gif',
    price: 20,
    quantity: 6
  };
}
}
