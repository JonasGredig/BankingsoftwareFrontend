import {Component, OnInit} from '@angular/core';
import {Customer} from '../shared/customer';
import {RestApiService} from '../shared/rest-api.service';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  public customers: Customer[];

  constructor(private restApi: RestApiService) {
    this.getCustomers();
  }

  ngOnInit() {
  }

  // Get employees list
  getCustomers() {
    return this.restApi.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

}
