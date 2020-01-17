import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Account} from '../../../shared/account';
import {RestApiService} from '../../../shared/rest-api.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

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
