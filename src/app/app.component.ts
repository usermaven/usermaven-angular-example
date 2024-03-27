import { Component, OnInit } from '@angular/core';
import createClient from '../client';
import { UsermavenClient, UsermavenOptions } from '@usermaven/sdk-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  usermavenClient: UsermavenClient | null = null;

  constructor() {}

  ngOnInit(): void {
    const options: UsermavenOptions = {
      key: 'UMHixXCh1k',
      tracking_host: 'https://events.usermaven.com',
      autocapture: true,
    };
    this.usermavenClient = createClient(options);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
