import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{map}from 'rxjs/operators';
import { Product } from './model/products';
@Component({
  selector: 'app-product-addition',
  templateUrl: './product-addition.component.html',
  styleUrls: ['./product-addition.component.css']
})
export class ProductAdditionComponent implements OnInit {
  allProducts:Product [] = [];
  constructor(private Http:HttpClient) { }
  onCreateProducts(products:{P_name:string,P_Price:string,P_Color:string}){//products is object
    console.log(products);
    this.Http.post('https://angulartest-67894-default-rtdb.firebaseio.com/products.json',products)//to store data in database
    .subscribe((res)=>{
      console.log(res);
    });
  }
  ngOnInit() {
    //  this.fetchPoducts();
  }
   fetchPoducts(){
    this.Http.get<{[key:string]:Product}>('https://angulartest-67894-default-rtdb.firebaseio.com/products.json')//to fetch data from database
    .pipe(map((res)=>{
       const products =[];
       for(const key in res ){
        if(res.hasOwnProperty(key)){
          products.push({...res[key],id:key})
        }
       }
       return  products;
    }))
    .subscribe(( products)=>{ //Data transfer is done by subscribe callback function
      console.log( products);
      this.allProducts = products;
    });
  }
}
