import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpClientModule } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, debounceTime } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { Iuser } from '../model/login';
import { Iregister } from '../model/register';
import { ITranscation } from '../model/product';
@Injectable({
    providedIn: "root"
})
export class UserRegisterServices {
    private loginendpoint: string = "http://localhost:3000/login";
    private getuserendpoint: string = "http://localhost:3000/user";
    private transcationEndPoint: string = "http://localhost:3000/account ";  // private contactUsEndPoint: string = "http://localhost:4500/api/contact/Contact";
    private registerEndPoint: string = "http://localhost:3000/user";
    private getUserTranscationEndPoint: string = "http://localhost:3000/account/";
    private getUserEndPoint: string = "http://localhost:3000/user/";
    private withdrawEndPoint: string = "http://localhost:3000/account/withdraw"
    private depositEndPoint: string = "http://localhost:3000/account/deposit"
    public header: HttpHeaders;
    public currentUser: Observable<Iuser>;
    private loggedin: BehaviorSubject<Iuser>;
    constructor(private http: HttpClient, private router: Router) {
        this.loggedin = new BehaviorSubject<Iuser>(
            JSON.parse(localStorage.getItem("currentUser"))
        );
        this.currentUser = this.loggedin.asObservable();
        this.header = new HttpHeaders({ "Content-Type": "application/json" });
    }
    public userLogin(data: Iuser): Observable<Iuser> {
        return this.http
            .post<Iuser>(this.loginendpoint, JSON.stringify(data), {
                headers: this.header
            })
            .pipe(map(Item => {
                if (Item && Item.d) {
                    localStorage.setItem("currentUser", JSON.stringify(Item));
                    this.loggedin.next(Item);
                    return Item;
                };
                return Item;
            })
            );
    }

    getTransaction(): Observable<ITranscation[]> {
        return this.http.get<ITranscation[]>(this.transcationEndPoint);

    }
    getUsers(): Observable<Iregister[]> {
        return this.http.get<Iregister[]>(this.getuserendpoint);
    }
    register(item1: Iregister): Observable<Iregister> {
        return this.http.post<Iregister>(this.registerEndPoint, JSON.stringify(item1), { headers: this.header })
    }
    getUserTranscation(id) {
        return this.http.get(this.getUserTranscationEndPoint + `/${id}`);
    }
    getUser(id) {
        return this.http.get(this.getUserEndPoint + `/${id}`);
    }
    getWithdraw(id, withdraw) {
        return this.http.put(this.withdrawEndPoint + `/${id}`, JSON.stringify(withdraw), { headers: this.header })
    }
    getDeposit(id, deposit) {
        return this.http.put(this.depositEndPoint + `/${id}`, JSON.stringify(deposit), { headers: this.header })
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.loggedin.next(null);
        location.reload();
        this.router.navigateByUrl('/login');
    }
}