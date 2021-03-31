import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pushslicengfor',
  templateUrl: './pushslicengfor.component.html',
  styleUrls: ['./pushslicengfor.component.css']
})
export class PushslicengforComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  //created empty array.
  users=[]
  //method to push name in user array.
  onCreateUser(uname){
   this.users.push({
     name:uname.value
   });
  }


  //this method will splice on remove button..so every button it will reduce one length
  onRemoveUser(){
    this.users.splice(this.users.length - 1)
  }

  onRemoveItem(item){
    this.users.splice(item,1,)
  }
}
