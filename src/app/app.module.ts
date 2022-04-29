import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { DefaultLayoutComponent } from './containers';
import { AdminModule } from './admin/admin.module';
// import { InstituteModule } from './institute/institute.module';
import { CommonnModule } from './commonn/commonn.module';
import { LoginComponent } from './layout/login/login.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
// import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
// import { LoadingBarService } from '@ngx-loading-bar/core';
// import { LoadingBarModule } from '@ngx-loading-bar/core';
import { RegisterComponent } from './layout/register/register.component';
import {NgxPaginationModule} from 'ngx-pagination';;
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



const APP_CONTAINERS = [
  DefaultLayoutComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DefaultLayoutComponent,
    LoginComponent,
    BreadcrumbComponent,
    RegisterComponent
  ],
  imports: [
    // NgModule,
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    FormsModule,
    AppRoutingModule,
    // NgxSpinnerModule,
    AdminModule,
    // InstituteModule,
    CommonnModule,
    HttpClientModule,
    LoadingBarRouterModule,
   // LoadingBarModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    

  ],
  exports: [
    MatInputModule, 
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule
  ],

  providers: [
   // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  //  {provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptorService, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
