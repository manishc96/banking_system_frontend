import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegisterServices } from 'src/app/shared/Services/user.service';

@Component({
  selector: 'app-user-transcation',
  templateUrl: './user-transcation.component.html',
  styleUrls: ['./user-transcation.component.css']
})
export class UserTranscationComponent implements OnInit {
  public specficusertransaction;
  constructor(private usertranscationadmin: UserRegisterServices, private router: Router, private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activateRouter.snapshot.paramMap.get('id');
    this.usertranscationadmin.getUserTranscation(id).subscribe((data) => {
      this.specficusertransaction = data;
    })
  }

}
