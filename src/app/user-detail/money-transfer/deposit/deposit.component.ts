import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Account} from '../../../shared/account';
import {RestApiService} from '../../../shared/rest-api.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  accounts: Account[];

  constructor(private restApi: RestApiService,
              private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.restApi
      .getAccount(1)
      .subscribe((accounts) => {
        this.accounts = accounts;
        this.changeDetectorRefs.detectChanges();
      });

  }

}
