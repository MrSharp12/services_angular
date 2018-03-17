import { Component } from '@angular/core';
import { LoggingService } from 'app/logging.service';
import { AccountServices } from 'app/accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //provides lets angular know how to give us what is made in the constructor
  // providers: [LoggingService]
})
export class NewAccountComponent {

  //this tells angular we need an instance of this service
  constructor(private loggingService: LoggingService,
              private accountServices: AccountServices) {

              }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountServices.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
