import { Component, OnInit } from '@angular/core';
import { UserRegisterServices } from 'src/app/shared/Services/user.service';
// import {Location} from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public currentUser: any;
  public isbanker;

  constructor(private registerService: UserRegisterServices) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser) {
      this.isbanker = this.currentUser.isBanker;
    }

  }
  logOut() {
    this.registerService.logout();
  }

}
