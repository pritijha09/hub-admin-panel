import { LoginComponent } from './../layout/login/login.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule, DatePipe, LowerCasePipe, TitleCasePipe} from '@angular/common';
import { CommonnRoutingModule } from './commoonn-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';
import {BsDatepickerModule, DatepickerModule} from 'ngx-bootstrap/datepicker';
import {MaterialDesignModule} from '../material-design/material-design.module';
import {ModalModule} from 'ngx-bootstrap/modal';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { CommonnComponent } from './commonn.component';
import { HomeComponent } from './home/home.component';
import { CreateSubHubComponent } from './hub-management/create-sub-hub/create-sub-hub.component';
import { ViewSubHubComponent } from './hub-management/view-sub-hub/view-sub-hub.component';
import { PatientListComponent } from './patient-management/patient-list/patient-list.component';
import { AddDoctorComponent } from './hub-management/add-doctor/add-doctor.component';
import { ViewDoctorComponent } from './hub-management/view-doctor/view-doctor.component';
import { PatientDetailsComponent } from './patient-management/patient-details/patient-details.component';
import { GrdFilterPipe } from './_pipe/grd-filter.pipe';






@NgModule({
  declarations: [
    CommonnComponent,
    HomeComponent,
    CreateSubHubComponent,
    ViewSubHubComponent,
    PatientListComponent,
    AddDoctorComponent,
    ViewDoctorComponent,
    PatientDetailsComponent,
    GrdFilterPipe
    
  ],
  imports: [
    CommonnRoutingModule,
    CommonModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    DatepickerModule,
    MaterialDesignModule,
    NgxDatatableModule,
    
 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    NgxDatatableModule,
    
    
   
    
  ],
  providers: [TitleCasePipe, LowerCasePipe, DatePipe]
})
export class CommonnModule {}
