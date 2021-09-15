import { CommonnComponent } from './commonn/commonn.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './_guards';
import { Role } from './_model';
import {RegisterComponent} from "./layout/register/register.component";
// import { AddStudentComponent } from './commonn/student/add-student/add-student.component';


// let url: any;
// let role: any;
// let user: any;
// user = JSON.parse(localStorage.getItem('currentUser'));
// role = user.role;
// console.log(role);
// if (role === 'Admin') {
//   url = 'admin';
// } else if (role === 'Institute') {
//   url = 'institute';
// }
// console.log('url', url);

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent , data: { title: 'Login' }},
  { path: 'register', component: RegisterComponent , data: { title: 'Register' }},
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { title: 'Home' },
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule ),
        // loadChildren: './admin/admin.module#AminModule',
        // canActivate: [AuthGuard],
        data: {
          // roles: [ Role.Admin ]
        }
      },
      // {
      //   path: 'institute',
      //   loadChildren: () => import('./institute/institute.module').then(m => m.InstituteModule),
      //   // loadChildren: '.institute/institute.module#InstituteModule',
      //   canActivate: [AuthGuard],
      //   data: {
      //     roles: [ Role.Institute ]
      //   }
      // },
      
      {
        path: 'competition',
        loadChildren: () => import('./commonn/commonn.module').then(m => m.CommonnModule),
        canActivate: [AuthGuard],
        data: {
          roles: [ Role.Admin, Role.Institute ]
        }
      },

    
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
