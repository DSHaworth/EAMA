import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { NavItem } from 'src/app/models/nav-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private navbarService: NavbarService) { }

  menu: NavItem[];

  ngOnInit(): void {
    this.menu = this.navbarService.getNavbarMenu();

    console.info(this.menu);

  }

}
