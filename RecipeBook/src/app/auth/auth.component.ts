import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(private authService:AuthService){}
  isLogging=true;
  isLoading=false;
  error:string=null;
  onSignUp(){
    this.isLogging=!this.isLogging;
  }
  onSubmit(form:NgForm){
    if(!form.valid){
      return
    }
  const email=form.value.email;
  const password=form.value.password;
  this.isLoading=true;
  if(this.isLogging){
    this.authService.onLogin(email,password).subscribe(responseData=>{
      console.log(responseData);
    
      this.isLoading=false;
    },errorMessage=>{
      console.log(errorMessage)
      this.error=errorMessage
      this.isLoading=false;
    }
    )
  }else{
  this.authService.onSignUp(email,password).subscribe(responseData=>{
    console.log(responseData)
    this.isLoading=false;
  }
  ,errorMessage=>{
    console.log(errorMessage)
    this.isLoading=false;
    this.error=errorMessage
  }
  )
}
form.reset();
  }
}
