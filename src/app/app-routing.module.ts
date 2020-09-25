import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import { MyTranscationComponent } from './component/my-transcation/my-transcation.component';
import { RegisterComponent } from './component/register/register.component';
import { AuthGuard } from '../app/authGard/authgard'
import { WithdrawComponent } from './component/withdraw/withdraw.component';
import { DepositComponent } from './component/deposit/deposit.component';
import { BankerComponent } from './component/banker/banker.component';
import { UserTranscationComponent } from './component/user-transcation/user-transcation.component';
import { AccountsComponent } from './component/accounts/accounts.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'mytranscation',
  component: MyTranscationComponent,
  canActivate: [AuthGuard]
},
{
  path: 'myprofile',
  component: MyProfileComponent,
  canActivate: [AuthGuard]
},
{
  path: 'withdraw/:id',
  component: WithdrawComponent,
  canActivate: [AuthGuard]
},
{
  path: 'deposit/:id',
  component: DepositComponent,
  canActivate: [AuthGuard]
},
{
  path: 'banker',
  component: BankerComponent,
  canActivate: [AuthGuard]
},
{
  path: 'usertranscation/:id',
  component: UserTranscationComponent,
  canActivate: [AuthGuard]
},
{
  path: 'account',
  component: AccountsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
