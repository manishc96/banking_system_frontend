import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegisterServices } from 'src/app/shared/Services/user.service';
import { Location } from '@angular/common';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  public deposit: FormGroup;
  productid: number;

  constructor(private fb: FormBuilder, private DepositService: UserRegisterServices, private ActivateRoute: ActivatedRoute, private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.deposit = this.fb.group({
      deposit: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]

    });
  }
  Save(item: number) {
    if (this.deposit.invalid) {
      return this.deposit.markAllAsTouched();
    }
    const id = this.ActivateRoute.snapshot.params['id'];
    this.DepositService.getDeposit(id, item).subscribe((data: any) => {
      console.log(data);
      alert('added  amount deposited successfully');
      this.location.back()
    })
  }

}
