import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/customer';
import {RestApiService} from '../../shared/rest-api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public customer: Customer;

  constructor(private restApi: RestApiService) {
    this.getCustomer();
  }

  ngOnInit() {
  }

  getCustomer() {
  }

}
