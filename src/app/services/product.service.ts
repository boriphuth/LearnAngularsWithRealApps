import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

  constructor() { }

  find(): Product{
    return{
      id: 'p01',
      name: 'name 1',
      photo: 'card1.png',
      price: 20,
      quantity:3
    };
  }

  findAll(): Product[]{
    return [
      {
        id: 'p01',
        name: 'name 1',
        photo: 'card1.png',
        price: 20,
        quantity:3
      },
      {
        id: 'p02',
        name: 'name 2',
        photo: 'card2.png',
        price: 12,
        quantity:6
      },
      {
        id: 'p03',
        name: 'name 3',
        photo: 'card3.png',
        price: 16,
        quantity:7
      },
      {
        id: 'p04',
        name: 'name 4',
        photo: 'card4.png',
        price: 20,
        quantity:3
      }
    ];
  }
}
