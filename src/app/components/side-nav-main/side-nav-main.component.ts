import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

import { NavbarService } from '../../services/navbar.service';
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
    console.log("in init");
    this.menu = this.navbarService.getNavbarMenu();

    this.subscription = this.navbarService.sideNavToggleSubject.subscribe(()=> {
      console.log("Subscription received message");
      this.sidenav.toggle();
    });       
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    //this.subscription.unsubscribe();
  }

}
