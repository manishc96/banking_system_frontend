import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/login';
import { UserRegisterServices } from 'src/app/shared/Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder, private login: UserRegisterServices, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'userName': ['', [Validators.required]],
      'password': ['', [Validators.required]],
    })
  }
  Save(data: Iuser) {
    this.submitted = true;
    if (!this.userForm.valid) { return; }
    this.login.userLogin(data).subscribe(data => {
      if (data.d) {
        this.router.navigate(['mytranscation']).then(() =>
          window.location.reload())
      }
    })
  }
}
