import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITranscation } from 'src/app/shared/model/product';
import { UserRegisterServices } from 'src/app/shared/Services/user.service';

@Component({
  selector: 'app-my-transcation',
  templateUrl: './my-transcation.component.html',
  styleUrls: ['./my-transcation.component.css']
})
export class MyTranscationComponent implements OnInit {
  public transcation: ITranscation[];
  public model: ITranscation[];
  public userTranscation;
  public userId: number;
  public currentUser: any;

  constructor(private transcationService: UserRegisterServices, private activateRouter: ActivatedRoute) { }
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = this.currentUser.userId;
    this.transcationService.getUserTranscation(this.userId).subscribe((data) => {
      this.userTranscation = data;


    })


  }



}
