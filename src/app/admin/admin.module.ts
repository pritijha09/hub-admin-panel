import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CommonnModule } from '../commonn/commonn.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { MaterialDesignModule } from '../material-design/material-design.module';

// import { CreateCompetitionComponent } from '../commonn/create-competition.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    // CreateCompetitionComponent
  ],
  imports: [
    NgxSpinnerModule,
    CommonModule,
    AdminRoutingModule,
    CommonnModule,
    NgxPaginationModule,
    FormsModule,
    MaterialDesignModule,
  
    
  ]
})
export class AdminModule {
  constructor() {
    // console.log('admin');
  }
}
