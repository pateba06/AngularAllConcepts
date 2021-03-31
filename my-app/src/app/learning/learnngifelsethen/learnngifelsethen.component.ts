import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learnngifelsethen',
  templateUrl: './learnngifelsethen.component.html',
  styleUrls: ['./learnngifelsethen.component.css']
})
export class LearnngifelsethenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//eg 1--
  isValid:boolean=false;
   onCreateBlock(){
  this.isValid=true;
}

selectedProducts:string;
getProductval(val){
 this.selectedProducts=val.target.value;
}

}
