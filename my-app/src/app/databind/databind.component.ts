import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //dynamic use of string interpolation
  dynName: string = "John smith"
  //js method to use in string interpolation
  myMethod() {
    return "My Channel Name is" + this.dynName;
  }


  //turnery example
  appStatus: boolean = false;
  //other way to use turnery
  status1 = "Online";
  status2 = "Offline"


//enable 6.hidden atti..property binding
enable:boolean=false;





}
