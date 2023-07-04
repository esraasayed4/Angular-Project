import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=[
    {id:1, price:'239'  ,color : 'Black', Available:'available', image:'/assets/image 1.PNG'},
    {id:2, price:'300' ,color: 'grey' ,Available:'available', image:'/assets/image2.PNG'},
    {id:3, price:'310'  ,color:'Brown' ,Available: ' Not available' , image:'/assets/image3.PNG'},
    {id:4, price:'227'  ,color: 'Dark grey',Available: ' Not available' , image:'/assets/image4.PNG'}
   ];
   showAlert(): void {
    alert('Thanks, your request has been registered');
  }
  constructor() { }

  ngOnInit() {
  }
      searchText:string='';
      OnSearchTextEntered(searchValue:string){
        this.searchText=searchValue;
      }
}
