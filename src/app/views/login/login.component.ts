import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { AuthService } from 'src/app/services/api/auth.service';
import { SnackbarService } from 'src/app/services/ui/snackbar.service';
import { LoggingService } from 'src/app/services/shared/logging.service';

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
    private loggingService: LoggingService
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
          this.snackbarService.showSuccess("It worked");
          this.loggingService.log(result);
        },
        error => {
          this.snackbarService.showError(error);
          this.loggingService.log(error);
        }
      ).add(() => {
        this.isBusy = false;
        this.loggingService.log("DONE");
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
