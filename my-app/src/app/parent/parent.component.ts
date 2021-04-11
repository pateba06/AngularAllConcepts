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

  selectlanguage:boolean=false;
 selectLearning:string;
 selectedLanguage:any;
  addToLearn(val){
    this.selectlanguage=true;
  this.selectLearning=val
  }
  addToLearningList(){
    this.selectedLanguage=this.selectLearning
  }
}
