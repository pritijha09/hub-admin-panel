import {  NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
// import { CreateCompetitionComponent } from './create-competition.component';
import { AuthGuard } from '../_guards';
import { Role } from '../_model';


const routes: Routes = [
  {
    path: '',
    data: { title: 'Competition' },
    children: [
      // {
      //   path: '', redirectTo: url + '/create-competition'
      // },
      // {
      //   path: 'create-competition',
      //   component: CreateCompetitionComponent,
      //   canActivate: [AuthGuard],
      //   data: {
      //     roles: [Role.Admin, Role.Institute]
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonnRoutingModule {}
