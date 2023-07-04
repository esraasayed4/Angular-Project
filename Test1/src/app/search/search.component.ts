import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ["div{margin:5px 0px ; background-color: #ff8a80;height:30px ; padding:4px;}","input:focus{background-color: #ea80fc}",".changeBackground{background-color: #ea80fc}"]
})
export class SearchComponent implements OnInit {
  name = '';
  constructor() { }

  ngOnInit() {
  }
  //custom event
   enterserchvalue:string='';
   @Output()
   searchTextChanged: EventEmitter<string>= new EventEmitter<string>();//an output event emitter
   OnsearchTextChanged(){
    this.searchTextChanged.emit(this.enterserchvalue);
   }
}
