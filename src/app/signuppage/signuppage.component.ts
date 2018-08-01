import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})

export class SignuppageComponent implements OnInit {
  title = '';
  passwordConfirmationFailed = false;
  passwordConfirmationTxt = '';

  signup = new Signup('', '', '','','','','' );

  constructor(  ) { }

  ngOnInit() {
  }

  confirmPassword() {
    if (this.signup.password === this.passwordConfirmationTxt) {
      this.passwordConfirmationFailed = false;
    } else {
      this.passwordConfirmationFailed = true;
    }
  }

  onSubmit() {
    console.log('First Name: ' + this.signup.firstName +
                'Middle Name: ' + this.signup.middleName +
                'Last Name: ' + this.signup.lastName +
                ', Email: ' + this.signup.email +
                ', Password: ' + this.signup.password );
  }
}

export class Signup {
  constructor (
    public email: string,
    public firstName: string,
    public middleName: string,
    public lastName: string,
    public password: string,
    public date_Of_Birth: any,
    public gender: string,

  ) {  }
}

