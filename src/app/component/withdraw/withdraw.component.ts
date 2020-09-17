import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegisterServices } from 'src/app/shared/Services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  public withdraw: FormGroup;
  productid: number;

  constructor(private fb: FormBuilder, private WithdrawService: UserRegisterServices, private ActivateRoute: ActivatedRoute, private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.withdraw = this.fb.group({
      withdraw: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]

    });
  }
  Save(item) {
    if (this.withdraw.invalid) {
      return this.withdraw.markAllAsTouched();
    }
    const id = +this.ActivateRoute.snapshot.paramMap.get('id');

    this.WithdrawService.getWithdraw(id, item).subscribe((data: any) => {
      console.log(data);
      alert('added amount withdraw successfully');
      this.location.back();
    })
  }

}
