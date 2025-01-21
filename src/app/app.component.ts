import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import createClient from '../client';
import { UsermavenClient, UsermavenOptions } from '@usermaven/sdk-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  usermavenClient: UsermavenClient | null = null;
  private routerSubscription: Subscription | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const options: UsermavenOptions = {
      key: 'UMHixXCh1k',
      tracking_host: 'https://events.usermaven.com',
      autocapture: true,
    };
    this.usermavenClient = createClient(options);

    // Track initial pageview
    this.trackPageView();

    // Track subsequent navigation events
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.trackPageView();
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private trackPageView(): void {
    if (this.usermavenClient) {
      this.usermavenClient.track('pageview');
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
