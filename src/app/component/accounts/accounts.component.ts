import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iaccount } from '../../../../src/app/shared/model/account';
import { UserRegisterServices } from '../../../../src/app/shared/Services/user.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
  public data: any;
  public userid;

  constructor(private fb: FormBuilder, private AddAccount: UserRegisterServices, private router: Router) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('currentUser'));

    if (this.data) {
      this.userid = this.data['userId'];
    }
    this.userForm = this.fb.group({
      'accType': ['', [Validators.required]],
      'user_id': [this.userid, [Validators.required]]

    })
  }
  Save(data: Iaccount) {
    this.submitted = true;
    if (!this.userForm.valid) { return; }
    this.AddAccount.addAccount(data).subscribe(data => {
      if (!this.userForm.valid) { return; }
      this.router.navigateByUrl('/mytranscation')
    })

  }
}
