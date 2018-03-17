import { LoggingService } from "app/logging.service";
import { Injectable, EventEmitter } from "@angular/core";

//here we are adding meta data
// let's angular know that it is an injectable
//you at @Injectable to the service where you want something injected
// the recieving service
@Injectable()
//one typical use of the service class to store and use data
export class AccountServices {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService) {}
    

      addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }
}