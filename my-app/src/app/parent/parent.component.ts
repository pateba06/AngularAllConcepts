import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }


 
  addToLearn(val){
    this.selectlanguage=true;
  this.selectLearning=val
  }
  selectLearning: string;
  selectlanguage:boolean=false;


  myval="badal"
  mytext="Angular Learning"
}
