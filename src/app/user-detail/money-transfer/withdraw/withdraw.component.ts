import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Account} from '../../../shared/account';
import {RestApiService} from '../../../shared/rest-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Transaction} from '../../../shared/transaction';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  accounts: Account[];
  newWithdraw: Transaction = new Transaction();
  userId = 0;
  withdrawForm: FormGroup;

  constructor(private restApi: RestApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {


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
    this.newWithdraw.transactionTime = new Date().toDateString() + ' ' + new Date().toTimeString();
    this.newWithdraw.type = 'D';
    this.newWithdraw.text = 'Auszahlung';
    this.restApi.addTransaction(this.newWithdraw);
    this.router.navigate(['/overview'], {queryParams: {userId: this.userId}});
  }

}
