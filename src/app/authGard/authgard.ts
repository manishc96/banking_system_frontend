import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserRegisterServices } from '../shared/Services/user.service';
@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(private userServices: UserRegisterServices, private router: Router) { }
    canActivate() {
        let token = localStorage.getItem('currentUser');
        if (!token) {
            alert('Please login first!');
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    }
}
