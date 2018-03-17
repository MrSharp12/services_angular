import { Component, OnInit } from '@angular/core';
import { AccountServices } from 'app/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountServices) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}
