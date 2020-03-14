// https://stackblitz.com/edit/angular-material-toggle-sidenav-in-another-component
// https://stackblitz.com/edit/responsive-menu-angular-material-flex-layout

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
//import {MatSidenavModule} from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

import { NavbarService } from 'src/app/services/ui/navbar.service';
import { NavItem } from 'src/app/models/nav-item';

@Component({
  selector: 'app-side-nav-main',
  templateUrl: './side-nav-main.component.html',
  styleUrls: ['./side-nav-main.component.scss']
})
export class SideNavMainComponent implements OnInit, OnDestroy {

  @ViewChild('sidenav') public sidenav; //: MatSidenavModule;
  subscription: Subscription;

  constructor( 
    private navbarService: NavbarService
  ) { }

  menu: NavItem[];

  ngOnInit(): void {
    this.menu = this.navbarService.getNavbarMenu();

    this.subscription = this.navbarService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });       
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
