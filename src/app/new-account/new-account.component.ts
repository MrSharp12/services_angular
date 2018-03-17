import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from 'app/logging.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providres lets angular know how to give us what is made in the constructor
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //this tells angular we need an instance of this service
  constructor(private loggingService: LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);
  }
}
