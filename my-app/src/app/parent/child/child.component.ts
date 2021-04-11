import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() placeholderText:string="teststring";
 @Input() selectlanguage:boolean=false;
 @Input() selectLearning:string;
  selectedLanguage:any;
  addToLearningList(){
    this.selectedLanguage=this.selectLearning
  }
}
