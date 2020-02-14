import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor() { 
    this.loginFormGroup = this.createLoginFormGroup();
  }

  validateField(formField: string){
    return (
      this.loginFormGroup.controls[formField].hasError('required') 
      && this.loginFormGroup.controls[formField].touched);
  }  

  signin(){
    
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
