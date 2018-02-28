import { Component, OnInit } from '@angular/core';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';
import { Account } from './entities/account.entity';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { min } from './validators/min.validator';
import { max } from './validators/max.validator';

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
 result: string;

 categories: Category[];
/*
  ngOnInit(): void {

    //this.result = 'Use One-Way';
    this.result = 'Use Two-Way';

    this.categories = [
      {id:'c1',name:'category 1'},
      {id:'c2',name:'category 2'},
      {id:'c3',name:'category 3'},
      {id:'c4',name:'category 4'},
    ];
  }
*/
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
 /*
 save(event: any):void{
   var selectedFiles = event.target.files;
   for(let i = 0; i< selectedFiles.length; i++){
    this.result += 'File name: ' + selectedFiles[i].name;
    this.result += '<br>File Size(byte): ' + selectedFiles[i].size;
    this.result += '<br>File Type: ' + selectedFiles[i].type;
    this.result += '<br>---------------------------';
   }
 }
 */
 //12.Form Controls in Angular 5(Form Controls)
  genders: any;
  roles: any;
  languages: any;
  registerForm: FormGroup;
  checkedList: string[];
  certificates:any;

  constructor(
    private formBuilder:FormBuilder
  ){}

  ngOnInit(){
    this.checkedList =[];

    this.certificates =[
      { value: 'cer1', display: 'Certificate 1' },
      { value: 'cer2', display: 'Certificate 2' },
      { value: 'cer3', display: 'Certificate 3' },
      { value: 'cer4', display: 'Certificate 4' },
      { value: 'cer5', display: 'Certificate 5' }
    ];

    this.genders = [
      { value: 'F', display: 'Female' },
      { value: 'M', display: 'Male' }
    ];

    this.roles = [
      {id:'r1',name:'Role 1'},
      {id:'r2',name:'Role 2'},
      {id:'r3',name:'Role 3'},
      {id:'r4',name:'Role 4'}
    ];

    this.languages = [
      {id:'lang1',name:'Language 1'},
      {id:'lang2',name:'Language 2'},
      {id:'lang3',name:'Language 3'},
      {id:'lang4',name:'Language 4'},
      {id:'lang5',name:'Language 5'}
    ];

    this.registerForm = this.formBuilder.group({
      username:['', [Validators.required, Validators.minLength(3),Validators.maxLength(10)]],
      password:['', [Validators.required, Validators.pattern('^((?=.*[0-9])(?=.*[a-z])(?=.*[@#$%]).{6,20})$')]],
      age: [0, [min(18),max(120)]],
      email:['',[Validators.required, Validators.pattern(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)]],
      website: ['', [Validators.pattern(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/)]],
      description:'',
      status:true,
      gender:this.genders[0].value,
      languages:[],
      role:[],
      certificates:[]
    });
  }

  save():void{
    let account: Account = this.registerForm.value;
    account.languages = this.checkedList;
    //this.displayAccountInfoConsole(account);
    console.log('Account Info');
    console.log('Username: ' + this.registerForm.value.username);
    console.log('Password: ' + this.registerForm.value.password);
    console.log('Age: ' + this.registerForm.value.age);
    console.log('Email: ' + this.registerForm.value.email);
    console.log('Website: ' + this.registerForm.value.website);
  };

  displayAccountInfoConsole(account: Account) {
    console.log('Username: ' + account.username);
    console.log('Password: ' + account.password);
    console.log('Description: ' + account.description);
    console.log('Gender :' + account.gender);
    console.log('Status: ' + account.status);
    console.log('Language Lists');
    for(var i = 0; i < account.languages.length; i++){
      console.log(account.languages[i]);
    }
    console.log('Role: ' + account.role);
    console.log('Certificates List');
    for(var i = 0; i < account.certificates.length; i++){
      console.log(account.certificates[i]);
    }
  }

  onCheckboxChange(option,event){
    if(event.target.checked){
      this.checkedList.push(option.id);
    } else {
      for(var i = 0; i < this.languages.length; i++){
        if(this.checkedList[i] == option.id){
          this.checkedList.splice(i,1);
        }
      }
    }
  }

}
