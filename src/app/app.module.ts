import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionMenuComponent } from './transaction-menu/transaction-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BankingToolbarComponent } from './banking-toolbar/banking-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectUserComponent,
    AccountsComponent,
    TransactionMenuComponent,
    WelcomeComponent,
    BankingToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
