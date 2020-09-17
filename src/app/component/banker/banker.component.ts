import { Component, OnInit } from '@angular/core';
import { UserRegisterServices } from 'src/app/shared/Services/user.service';

@Component({
  selector: 'app-banker',
  templateUrl: './banker.component.html',
  styleUrls: ['./banker.component.css']
})
export class BankerComponent implements OnInit {
  public transaction
  constructor(private transcationService: UserRegisterServices) { }

  ngOnInit() {
    this.transcationService.getTransaction().subscribe(data => {
      console.log(data);
      this.transaction = data;
    });

  }

}
