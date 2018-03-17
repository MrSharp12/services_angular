import { Component, Input} from '@angular/core';
import { LoggingService } from 'app/logging.service';
import { AccountServices } from 'app/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  

  constructor(private loggingService: LoggingService,
              private accountService: AccountServices) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    //this emits the event that was set up in the service file
    this.accountService.statusUpdated.emit(status);
  }
}
