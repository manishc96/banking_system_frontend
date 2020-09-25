import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { LoginComponent } from './component/login/login.component';
import { MyTranscationComponent } from './component/my-transcation/my-transcation.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { FootarComponent } from './component/footer/footar.component';
import { WithdrawComponent } from './component/withdraw/withdraw.component';
import { DepositComponent } from './component/deposit/deposit.component';
import { BankerComponent } from './component/banker/banker.component';
import { UserTranscationComponent } from './component/user-transcation/user-transcation.component';
import { AccountsComponent } from './component/accounts/accounts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    MyTranscationComponent,
    HomeComponent,
    RegisterComponent,
    MyProfileComponent,
    FootarComponent,
    WithdrawComponent,
    DepositComponent,
    BankerComponent,
    UserTranscationComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
