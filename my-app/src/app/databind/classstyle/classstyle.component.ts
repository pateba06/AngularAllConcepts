import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classstyle',
  templateUrl: './classstyle.component.html',
  styleUrls: ['./classstyle.component.css']
})
export class ClassstyleComponent implements OnInit {
  //dyanmic control of property class that we define 3rd exxample change true and false
  mypro:boolean=true;

  //eg 4
  myStyle1:string ="15px"

  //eg5 related
  isActive:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }


  //eg:7 creating object to involve multiple classes..then check in inspect element
  mtlclasses={
    class1:true,
    class2:false,
    class3:true
  }


  mtlStyle={
  'background':'red',
  'border':'10px solid green'
  }
}
