import { Injectable } from '@angular/core';
import { NavItem } from '../models/nav-item'

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public sideNavToggleSubject: Subject<any> = new Subject<any>();

  constructor() { }

  menu: NavItem[] = [
    {
      displayName: 'Home',
      iconName: 'fas fa-angle-right',
      route: '/home',
    },
    {
      displayName: 'About',
      iconName: 'fas fa-angle-right',
      route: '/about',
    }    
  ];

  getNavbarMenu(): NavItem[] {
    return this.menu;
  }

  public toggle() {
    console.log("Message received in service");
    console.log("Send message to subscribers");
    return this.sideNavToggleSubject.next();
  }   

}
