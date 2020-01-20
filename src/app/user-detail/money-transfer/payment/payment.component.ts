import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Account} from '../../../shared/account';
import {Transaction} from '../../../shared/transaction';
import {RestApiService} from '../../../shared/rest-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  accounts: Account[];
  newTransfer: Transaction = new Transaction();
  userId = 0;
  iban: string = "";
  ibanTo: string = "";
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
    this.newTransfer.type = 'E';
    this.newTransfer.text = 'Transfer';
    this.newTransfer.iban = this.iban;
    this.newTransfer.ibanTo = this.ibanTo;
    this.newTransfer.amount = this.amount;
    this.restApi.addTransaction(this.newTransfer).subscribe(transaction => {
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
