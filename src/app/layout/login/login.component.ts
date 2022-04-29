import { Component, OnInit} from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from 'src/app/_services';
import { ActivatedRoute, Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { NgxSpinnerService } from "ngx-spinner";
import { CoreHttpService } from 'src/app/_services/coreHttpServices/core-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginFormGroup: FormGroup;
    isSubmitted = false;
  
    returnUrl: string;
    error = "";
  

  // returnUrl: string;
  // isLoading = false;
  // error = '';
  // roleUrl: string;

  // public form = {
  //   email: null,
  //   password: null
  // };
  // model: any = {};

  constructor(
    private SpinnerService: NgxSpinnerService,
    private _formBuilder: FormBuilder,
    private coreHttpService: CoreHttpService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginFormGroup = this._formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get formControls() {
    return this.loginFormGroup.controls;
  }

  onLogin() {
    this.SpinnerService.show();
    this.isSubmitted = true;
    if (this.loginFormGroup.invalid) {
      return;
    } else {
      this.coreHttpService
        .post("hub/login", this.loginFormGroup.value)
        .subscribe(
          data => {
            //  this.isLoading = false;
            if (data.response === 200) {
              this.loginFormGroup.reset(this.loginFormGroup.value);
              this.SpinnerService.hide();
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem("currentUser", JSON.stringify(data.result));
              this.returnUrl =
                data.result.role === "Institute" ? "/institute" : "/admin";
              this.router.navigate([this.returnUrl]);
            } else {
                this.SpinnerService.hide();
              this.error = "Email or Password Doesn't Exist!";
            }
          },
          error => {
            this.SpinnerService.hide();
             this.handleError(error);
          }
        );
    }
    //   // this.isLoading = true;
    //   console.log('call');
    //   this.router.navigate(['/add-student']);
    // console.log(this.model.email);

    // const data = {email: userData.username.value , password: userData.password.value , mode: 'web', device_id : null};
  }
    handleError(errorData) {
      this.error = errorData;
    }

  // onLogin() {
  //   // this.isLoading = true;
  //   console.log('call');
  //   this.router.navigate(['/add-student']);
    // console.log(this.model.email);

    // const data = {email: userData.username.value , password: userData.password.value , mode: 'web', device_id : null};
    // this.authenticationService.login(this.model)
    //   .subscribe(
    //     data => {
    //       this.isLoading = false;
    //       this.error = '';
    //       if (data.response !== 401) {
    //         this.returnUrl = data.result.role === 'Institute' ? '/institute' : '/admin';
    //         // console.log(data.result.role);
    //         // console.log(this.returnUrl);
    //         // return;
    //         this.router.navigate([this.returnUrl]);
    //         // console.log(this.router.navigate([this.returnUrl]));
    //       } else {
    //         this.error = "Email or Password Doesn't Exist!";
    //         // console.log(this.error);
    //       }
    //     },
    //     error => {
    //       this.isLoading = false;
    //       this.handleError(error);
    //       // console.log('not', error);
    //     }
    //   );
  }
//   handleError(errorData) {
//     this.error = errorData;
//     this.isLoading = false;
//   }
// }
