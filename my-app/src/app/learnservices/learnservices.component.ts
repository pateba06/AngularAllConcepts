import { Component, OnInit } from '@angular/core';
import { TestserviceService } from 'src/appServices/testservice.service';
import { MessageService } from '../../appServices/message.service'
@Component({
  selector: 'app-learnservices',
  templateUrl: './learnservices.component.html',
  styleUrls: ['./learnservices.component.css']
})
export class LearnservicesComponent implements OnInit {

  constructor(private _msgService: TestserviceService) { }
  product: string;
  mobile :any;
  employees={}
  ngOnInit() {
    this.product = this._msgService.product
    this.mobile = this._msgService.mobile
    this.employees=this._msgService.employee
  }
  btnclick() {
    const msgService = new MessageService();
    msgService.messageAlert();
  }

  testservicefunction() {
    this._msgService.servicetest();
  }

}
