import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
interface dataAuth{
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string
registered?:boolean

}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private http:HttpClient) { }
  onSignUp(email:string,password:string){
     return this.http.post<dataAuth>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyaz7NzQRoZp_J7v7VFrZ6kX_KDSWxHEA",{
      email:email,
      password:password,
      returnSecureToken	:true

    }).pipe(catchError(this.errorHandler ),
    tap(resData=>{
   this.authenticationHandler(resData.email,resData.localId, resData.idToken,+resData.expiresIn)                          
    }
    )
    )
  }
 
    onLogin(email:string,password:string){
      return this.http.post<dataAuth>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAyaz7NzQRoZp_J7v7VFrZ6kX_KDSWxHEA",{
       email:email,
       password:password,
       returnSecureToken	:true
 
     }).pipe(catchError(this.errorHandler ),tap(resData=>{
      this.authenticationHandler(resData.email,resData.localId, resData.idToken,+resData.expiresIn)                          
       }))
   } 

   private errorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = "An unknown error occurred.";
  
    if (errorRes.error || errorRes.error.error) {
      console.error( errorRes);
  
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = "This email already exists.";
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = "This is an incorrect password.";
          break;
        case 'INVALID_EMAIL':
          errorMessage = "Email not found.";
          break;
        default:
          errorMessage = "An unknown error occurred.";
          console.error( errorRes);
          break;
      }
    }
    return throwError(errorMessage);
  }
  private authenticationHandler(email:string,userId:string,token:string,expiresIn:number){
    const expirationDate=new Date (new Date().getTime()+ expiresIn*1000);

    const user=new User(email,
      userId,token,
      
      expirationDate)

    this.user.next(user) 
  } 
}
