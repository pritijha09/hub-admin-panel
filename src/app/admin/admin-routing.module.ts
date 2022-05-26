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
    data: { title: 'Home' },
    children: [
      {
        path: '', component: HomeComponent,
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
        title: 'Create Spoke',
        breadcrumb: 'Create Spoke'
      }
    },
    {
      path: 'view-sub-hub',
      component: ViewSubHubComponent,
      // canActivate: [AuthGuard],
      data: {
        // roles: [Role.Admin],
        title: 'Spoke List',
        breadcrumb: 'Spoke List'
      }
    },
    {
        path: 'update-sub-hub/:id',
        component: CreateSubHubComponent,
        // canActivate: [AuthGuard],
        data: {
          // roles: [Role.Admin],
          title: 'update-sub-hub',
          breadcrumb: 'update-sub-hub'
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
        path: 'all-patient-list',
        component: PatientListComponent,
        // canActivate: [AuthGuard],
        data: {
          // roles: [Role.Admin],
          title: 'All Patient List',
          breadcrumb: 'All Patient List'
        }
      },
    {
        path: 'patient-list/:id',
        component: PatientListComponent,
        // canActivate: [AuthGuard],
        data: {
          // roles: [Role.Admin],
          title: 'Patient List',
          breadcrumb: 'Patient List'
        }
      },
      {
        path: 'patient-details/:id',
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
