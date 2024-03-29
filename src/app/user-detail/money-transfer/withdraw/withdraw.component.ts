import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Account} from '../../../shared/account';
import {RestApiService} from '../../../shared/rest-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Transaction} from '../../../shared/transaction';
import {FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  accounts: Account[];
  newWithdraw: Transaction = new Transaction();
  userId = 0;
  iban: string;
  amountWithdraw: number;

  constructor(private restApi: RestApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar) {
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
    this.newWithdraw.type = 'D';
    this.newWithdraw.text = 'Auszahlung';
    this.newWithdraw.iban = this.iban;
    this.newWithdraw.amount = this.amountWithdraw;
    this.restApi.addTransaction(this.newWithdraw).subscribe(transaction => {
      this.openSnackBar("Transaction erfolgreich!", "");
    });
    this.router.navigate(['/overview'], {queryParams: {userId: this.userId}});
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
