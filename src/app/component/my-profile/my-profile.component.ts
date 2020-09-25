import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iregister } from 'src/app/shared/model/register';
import { UserRegisterServices } from 'src/app/shared/Services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public register: Iregister[];
  public user: Iregister[];
  public userId: number;
  public currentUser: any;

  constructor(private transcationService: UserRegisterServices, private ActivateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = this.currentUser.userId;
    this.transcationService.getUsers().subscribe(data => {
      console.log(data);
      this.register = data;
    });
    this.transcationService.getUser(this.userId).subscribe((data) => {
      this.user = Object(data);
      console.log(this.user)

    })
  }

}
