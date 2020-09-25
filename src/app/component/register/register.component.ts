import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserRegisterServices } from '../../shared/Services/user.service';
import { Iregister } from '../../shared/model/register';
import { Router } from '@angular/router';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fb: FormBuilder, private userRegistration: UserRegisterServices, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'firstName': ['', [Validators.required, Validators.minLength(3)]],
      'lastName': ['', [Validators.required, Validators.minLength(3)]],
      'fatherName': ['', [Validators.required, Validators.minLength(3)]],
      'dateOfBirth': ['', [Validators.required]],
      'mobileNumber': ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      'emailId': ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      'PanCardNumber': ['', [Validators.required, Validators.pattern(`[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}`)]],
      'IDProof': ['', Validators.required],
      'country': ['', [Validators.required, Validators.minLength(3)]],
      'state': ['', [Validators.required, Validators.minLength(3)]],
      'city': ['', [Validators.required, Validators.minLength(3)]],
      'pinCode': ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      'address': ['', [Validators.required, Validators.minLength(10)]],
      'userName': ['', [Validators.required, Validators.minLength(3)]],
      'password': ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  Save(data: Iregister) {
    this.submitted = true;
    if (!this.userForm.valid) { return; }
    this.userRegistration.register(data).subscribe(data => {
      alert('Registration SucessFul');
      this.router.navigateByUrl('/login');
    })

  }
}
