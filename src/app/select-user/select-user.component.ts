import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  customerList: Array<Customer> = [{
    id: 1,
    city: 'Zurich',
    customerNumber: 1,
    firstname: 'Jonas',
    lastname: 'Gredig',
    street: 'Mühli 1',
    title: 'Herr',
    zipcode: 7427
  },
    {
      id: 2,
      city: 'Bern',
      customerNumber: 2,
      firstname: 'Jonassss',
      lastname: 'Grsedig',
      street: 'Msühli 1',
      title: 'Hserr',
      zipcode: 7427
    },
    {
      id: 3,
      city: 'Zursdfsdfich',
      customerNumber: 3,
      firstname: 'Jonsdfas',
      lastname: 'Gsdfsredig',
      street: 'Mfdfsdfühli 1',
      title: 'Hersr',
      zipcode: 7427
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
