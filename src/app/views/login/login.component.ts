import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { AuthService } from 'src/app/services/api/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  isBusy: boolean = false;

  constructor(
    private authService: AuthService,
    private snackbarService: SnackbarService,
  ) { 
    this.loginFormGroup = this.createLoginFormGroup();
  }

  validateField(formField: string){
    return (
      this.loginFormGroup.controls[formField].hasError('required') 
      && this.loginFormGroup.controls[formField].touched);
  }  

  login(){

    this.isBusy = true;
    this.authService.login(this.loginFormGroup.value)
      .subscribe( 
        result => {
          console.log(result);
          this.snackbarService.showSuccess("It worked");
        },
        error => {
          this.snackbarService.showError(error);
        }
      ).add(() => {
        this.isBusy = false;
      });
  }

  createLoginFormGroup(){
    return new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

}
