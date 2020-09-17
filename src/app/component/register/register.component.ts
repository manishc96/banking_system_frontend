import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { UserRegisterServices } from '../../shared/Services/user.service';
import { Iregister } from '../../shared/model/register';
import { Router } from '@angular/router';

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
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'fatherName': ['', Validators.required],
      'dateOfBirth': ['', Validators.required],
      'mobileNumber': ['', Validators.required],
      'emailId': ['', Validators.required],
      'PanCardNumber': ['', Validators.required],
      'IDProof': ['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required],
      'city': ['', Validators.required],
      'pinCode': ['', Validators.required],
      'address': ['', Validators.required],
      'userName': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }
  Save(data: Iregister) {
    this.submitted = true;
    this.userRegistration.register(data).subscribe(data => {
      alert('Registration SucessFul');
      this.router.navigateByUrl('/login');
      console.log(data);
    })

  }
}
