import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Account} from '../../../shared/account';
import {Transaction} from '../../../shared/transaction';
import {RestApiService} from '../../../shared/rest-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  accounts: Account[];
  newTransfer: Transaction = new Transaction();
  userId = 0;
  paymentForm: FormGroup;

  constructor(private restApi: RestApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.newTransfer.ibanTo = '';
    this.paymentForm = new FormGroup({
      firstName: new FormControl()
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.userId = params['userId']);
    this.restApi
      .getAccounts(this.userId)
      .subscribe((accounts) => {
        this.accounts = accounts;
      });
  }

  submitTransaction() {
    this.newTransfer.transactionTime = new Date().toDateString() + ' ' + new Date().toTimeString();
    this.newTransfer.type = 'E';
    this.newTransfer.text = 'Transfer';
    this.restApi.addTransaction(this.newTransfer);
    this.router.navigate(['/overview'], {queryParams: {userId: this.userId}});
  }

}
