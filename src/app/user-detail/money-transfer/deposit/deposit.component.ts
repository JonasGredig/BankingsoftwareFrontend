import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Account} from '../../../shared/account';
import {RestApiService} from '../../../shared/rest-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Transaction} from '../../../shared/transaction';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  accounts: Account[];
  newDeposit: Transaction = new Transaction();
  userId = 0;
  iban: string = "";
  amount: number = 0;

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
    this.newDeposit.type = 'C';
    this.newDeposit.text = 'Einzahlung';
    this.newDeposit.iban = this.iban;
    this.newDeposit.amount = this.amount;
    this.restApi.addTransaction(this.newDeposit).subscribe(transaction => {
        this.openSnackBar("Transaction erfolgreich!", "");
      }
    );
    this.router.navigate(['/overview'], {queryParams: {userId: this.userId}});
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
