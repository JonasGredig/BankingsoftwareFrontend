import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Account} from '../../shared/account';
import {RestApiService} from '../../shared/rest-api.service';


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
              private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.restApi
      .getAccount(1)
      .subscribe((accounts) => {
        this.accounts = accounts;
        this.displayedColumns = ['iban', 'balance', 'overdraft'];
        this.dataSource = new MatTableDataSource(this.accounts);
        this.changeDetectorRefs.detectChanges();
      });

  }


}
