import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  message:string=""
  //2. example (click)
  onAddCart(){
  this.message="Product Added into cart"
  }

  //3. example (click)
  onInputclick(event){
 console.log(event.target.value)
  }
  //4 example
 message1:string;
  onClickMsg(event){
this.message1=event.target.value + " Added in Cart"
  }

}
