import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
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
    console.log("Menu Clicked");
    this.navbarService.toggle();
  }

  ngOnInit(): void {
    this.menu = this.navbarService.getNavbarMenu();
  }
}
