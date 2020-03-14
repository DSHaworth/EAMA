import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/ui/navbar.service';
import { NavItem } from 'src/app/models/nav-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu: NavItem[];

  constructor( 
    private navbarService: NavbarService
  ) { }

  clickMenu() { 
    this.navbarService.toggle();
  }

  ngOnInit(): void {
    this.menu = this.navbarService.getNavbarMenu();
  }
}
