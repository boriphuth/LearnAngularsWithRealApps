import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should be find', inject([ProductService], (service: ProductService) => {
    let product = service.find();

    spy = spyOn(service,'find').and.returnValue({
      id: 'p01',
      name: 'name 1',
      photo: 'card1.png',
      price: 20,
      quantity:3
    });

  }));

});
