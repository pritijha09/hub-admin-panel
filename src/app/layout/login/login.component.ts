import { Component, OnInit} from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
import { AuthenticationService } from 'src/app/_services';
import { ActivatedRoute, Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  

  // returnUrl: string;
  // isLoading = false;
  // error = '';
  // roleUrl: string;

  // public form = {
  //   email: null,
  //   password: null
  // };
  // model: any = {};

  constructor(private _formBuilder: FormBuilder) {}
    

  ngOnInit() {
    this.loginFormGroup = this._formBuilder.group({
      
      user_id:['', Validators.required,],
      user_password:['', Validators.required],
      
    });
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
