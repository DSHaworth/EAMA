import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  error: string;

  constructor(
    private authService: AuthService

  ) { 
    this.loginFormGroup = this.createLoginFormGroup();
  }

  validateField(formField: string){
    return (
      this.loginFormGroup.controls[formField].hasError('required') 
      && this.loginFormGroup.controls[formField].touched);
  }  

  login(){
    this.authService.login()
    .subscribe( 
      result => {
        alert("Done");
        //this.reportYears = result;
      },
      error => {
        this.error = error;
        alert("Here is the error: " + error);
      }
    ).add(() => {
      alert("finally done here");
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
