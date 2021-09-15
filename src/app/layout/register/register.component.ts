import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MustMatch} from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  isLoading = false;
  error = '';
  roleUrl: string;

  // phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      // instituteIcon: ['', Validators.required, requiredFileType('png')],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);

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

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  handleError(errorData) {
    this.error = errorData;
    this.isLoading = false;
  }

  onReset() {
    console.log('call');
    this.submitted = false;
    this.registerForm.reset();
  }

}
