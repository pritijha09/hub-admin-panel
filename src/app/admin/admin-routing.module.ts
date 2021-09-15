import { PatientDetailsComponent } from './../commonn/patient-management/patient-details/patient-details.component';
import { ViewDoctorComponent } from './../commonn/hub-management/view-doctor/view-doctor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from '../_guards';
import { Role } from '../_model';
import { HomeComponent } from '../commonn/home/home.component';
import { CreateSubHubComponent } from '../commonn/hub-management/create-sub-hub/create-sub-hub.component';
import { ViewSubHubComponent } from '../commonn/hub-management/view-sub-hub/view-sub-hub.component';
import { PatientListComponent } from '../commonn/patient-management/patient-list/patient-list.component';
import { AddDoctorComponent } from '../commonn/hub-management/add-doctor/add-doctor.component';



const routes: Routes = [
  {
    path: '',
    data: { title: 'Admin' },
    children: [
      {
        path: '', component: AdminHomeComponent,
        data: {
          title: 'Dashboard',
          breadcrumb: 'Dashboard'
          }
      },
      
      {
        path: 'home',
        component: HomeComponent,
        // canActivate: [AuthGuard],
        data: {
          // roles: [Role.Admin],
          title: 'Dashboard',
          breadcrumb: 'Dashboard'
        }
      },
      
    
    //----------------------------------hub-management-------------------//
    {
      path: 'create-sub-hub',
      component: CreateSubHubComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Create Sub Hub',
        breadcrumb: 'Create Sub Hub'
      }
    },
    {
      path: 'view-sub-hub',
      component: ViewSubHubComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'View Sub Hub',
        breadcrumb: 'View Sub Hub'
      }
    },
    {
      path: 'add-doctor',
      component: AddDoctorComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Add Doctor',
        breadcrumb: 'Add Doctor'
      }
    },
    {
      path: 'view-doctor',
      component: ViewDoctorComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'view Doctor',
        breadcrumb: 'view Doctor'
      }
    },
    //----------------------------------patient-management-------------------//
    {
      path: 'patient-list',
      component: PatientListComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Patient List',
        breadcrumb: 'Patient List'
      }
    },
    {
      path: 'patient-details',
      component: PatientDetailsComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Patient Details',
        breadcrumb: 'Patient Details'
      }
    },

    

    

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
