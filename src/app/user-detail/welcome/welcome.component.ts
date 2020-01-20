import { Component, OnInit } from '@angular/core';
import {Customer} from '../../shared/customer';
import {RestApiService} from '../../shared/rest-api.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public customer: Customer;

  constructor(private restApi: RestApiService, private activatedRoute: ActivatedRoute) {
    this.getCustomer();
  }

  ngOnInit() {

  }

  getCustomer() {
    let userId;
    this.activatedRoute.queryParams.subscribe(params => userId = params['userId']);
    this.restApi
      .getCustomer(userId)
      .subscribe(customer => {
        this.customer = customer;
      })
  }

}
