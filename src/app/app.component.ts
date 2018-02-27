import { Component, OnInit } from '@angular/core';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';

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
categories: Category[];

  ngOnInit(): void {
    this.categories = [
      {id:'c1',name:'category 1'},
      {id:'c2',name:'category 2'},
      {id:'c3',name:'category 3'},
      {id:'c4',name:'category 4'},
    ];
  }

  clickMe():void{
    this.result = 'Hello world';
  }

  display(event: any):void{
    //this.result = 'Hello ' + event.target.value;
    this.result = 'Category Id is selected: ' + event.target.value;
  }
/*
  save(event: any):void{
    var selectedFile = event.target.files[0];
    this.result = 'File name: ' + selectedFile.name;
    this.result += '<br>File Size(byte): ' + selectedFile.size;
    this.result += '<br>File Type: ' + selectedFile.type;
  }
  */
 save(event: any):void{
   var selectedFiles = event.target.files;
   for(let i = 0; i< selectedFiles.length; i++){
    this.result += 'File name: ' + selectedFiles[i].name;
    this.result += '<br>File Size(byte): ' + selectedFiles[i].size;
    this.result += '<br>File Type: ' + selectedFiles[i].type;
    this.result += '<br>---------------------------';
   }
 }
}
