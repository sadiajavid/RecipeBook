import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private http:HttpClient) { }
  onSignUp(email:string,password:string){
     return this.http.post<dataAuth>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyaz7NzQRoZp_J7v7VFrZ6kX_KDSWxHEA",{
      email:email,
      password:password,
      returnSecureToken	:true

    })}
 
    onLogin(email:string,password:string){
      return this.http.post<dataAuth>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAyaz7NzQRoZp_J7v7VFrZ6kX_KDSWxHEA",{
       email:email,
       password:password,
       returnSecureToken	:true
 
     })
   } 
}
