import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Account} from '../../shared/account';
import {RestApiService} from '../../shared/rest-api.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  public accounts: Account[];
  public displayedColumns: string[];
  public dataSource;

  constructor(private restApi: RestApiService,
              private changeDetectorRefs: ChangeDetectorRef,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let userId: number;
    this.activatedRoute.queryParams.subscribe(params => userId = params['userId']);

    this.restApi
      .getAccounts(userId)
      .subscribe((accounts) => {
        this.accounts = accounts;
        this.displayedColumns = ['iban', 'balance', 'overdraft'];
        this.dataSource = new MatTableDataSource(this.accounts);
        this.changeDetectorRefs.detectChanges();
      });

  }


}
