import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  templateUrl: './ngcontainer.component.html',
  styleUrls: ['./ngcontainer.component.css']
})
export class NgcontainerComponent implements OnInit {
  statusOnline=true;
  products=[
    {name:'bootstrap'},
    {name:'css'},
    {name:'html'},
    {name:'javascript'},
  ]
  
  constructor() { }

  ngOnInit() {
  }


}
