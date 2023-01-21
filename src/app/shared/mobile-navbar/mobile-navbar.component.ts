import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MenuPopupComponent } from '../menu-popup/menu-popup.component';

@Component({
  selector: 'app-mobile-navbar',
  templateUrl: './mobile-navbar.component.html',
  styleUrls: ['./mobile-navbar.component.scss'],
})
export class MobileNavbarComponent implements OnInit, OnDestroy {
  currentRoute!: string;
  event$: Subscription | any;
  navItems: any[] = [
    {
      iconName: 'home',
      route: '/',
    },
    {
      iconName: 'equalizer',
      route: '/history',
    },
    {
      iconName: 'mode_comment',
      route: '/meesage',
    },
    {
      iconName: 'person',
      route: '/profile',
    },
  ];

  constructor(
    private location: Location,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.event$ = location.onUrlChange((val) => {
      this.currentRoute = val;
    });
  }

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  openMenu(enterAnimationDuration: any, exitAnimationDuration: any) {
    this.dialog.open(MenuPopupComponent, {
     
      panelClass: 'menu-popup',
      // enterAnimationDuration: enterAnimationDuration,
      // exitAnimationDuration: exitAnimationDuration,
      position: {
        bottom: '140px',
        // left: '0px'
      },
    });
  }

  ngOnDestroy(): void {
    // this.event$.unsubscribe()
  }
}
