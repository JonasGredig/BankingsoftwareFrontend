import {Component, OnInit} from '@angular/core';
import {Customer} from '../shared/customer';
import {RestApiService} from '../shared/rest-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  public customers: Customer[];
  public selectedCustomerId: string;

  constructor(private restApi: RestApiService, private router: Router) {
    this.getCustomers();
  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/overview'], { queryParams: { userId: this.selectedCustomerId } });
  }

  getCustomers() {
    return this.restApi.getCustomers()
      .subscribe(customers => this.customers = customers);
  }

}
