import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatevariablelearning',
  templateUrl: './templatevariablelearning.component.html',
  styleUrls: ['./templatevariablelearning.component.css']
})
export class TemplatevariablelearningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getInputInfo(val){
    
   return console.log(val.value)
  }
}
