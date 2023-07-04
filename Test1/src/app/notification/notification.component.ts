import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class="container"> <p>the styles of Headphones availables to consumers are endless and profit also endles </p><span class="close-sign"(click)="closeNotification()">×</span></div>',

  styles: [".container{margin:5px 0px ; background-color: #1FEBEB;height:20px;position: relative}","p{font-size:14px ; text-align:center}",".close-sign {position: absolute; top: 0; right: 5px;font-size: 16px; cursor: pointer}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 closeNotification() {
    var container = document.querySelector('.container') as HTMLElement;
    container.style.display = 'none';
  }
}
