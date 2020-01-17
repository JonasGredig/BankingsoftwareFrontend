import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SelectUserComponent} from './select-user/select-user.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatGridListModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule,
  MatInputModule,
} from '@angular/material';
import {AccountsComponent} from './user-detail/accounts/accounts.component';
import {WelcomeComponent} from './user-detail/welcome/welcome.component';
import {BankingToolbarComponent} from './banking-toolbar/banking-toolbar.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {MoneyTransferComponent} from './user-detail/money-transfer/money-transfer.component';
import { DepositComponent } from './user-detail/money-transfer/deposit/deposit.component';
import { WithdrawComponent } from './user-detail/money-transfer/withdraw/withdraw.component';
import { PaymentComponent } from './user-detail/money-transfer/payment/payment.component';

const appRoutes: Routes = [
  {path: '', component: SelectUserComponent},
  {path: 'customer/:id', component: UserDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SelectUserComponent,
    AccountsComponent,
    WelcomeComponent,
    BankingToolbarComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    MoneyTransferComponent,
    DepositComponent,
    WithdrawComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
