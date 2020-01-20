import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Account} from '../../../shared/account';
import {RestApiService} from '../../../shared/rest-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Transaction} from '../../../shared/transaction';
import {FormControl, FormGroup} from '@angular/forms';

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
  depositForm: FormGroup;

  constructor(private restApi: RestApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.depositForm = new FormGroup({
      firstName: new FormControl(),
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
    this.newDeposit.type = 'C';
    this.newDeposit.text = 'Einzahlung';
    this.newDeposit.iban = this.iban;
    this.newDeposit.amount = this.amount;
    this.restApi.addTransaction(this.newDeposit).subscribe();
    this.router.navigate(['/overview'], {queryParams: {userId: this.userId}});
  }

}
