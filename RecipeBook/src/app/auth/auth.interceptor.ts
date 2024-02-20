// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpParams
// } from '@angular/common/http';
// import { take, exhaustMap } from 'rxjs/operators';

// import { AuthService } from './auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     return this.authService.user.pipe(
//       take(1),
//       exhaustMap(user => {
//         if (!user) {
//           return next.handle(req);
//         }
//         const modifiedReq = req.clone({
//           params: new HttpParams().set('auth', user.token)
//         });
//         return next.handle(modifiedReq);
//       })
//     );
//   }
// }
import { HttpHandler, HttpInterceptor, HttpRequest, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        console.log('User:', user);

        // Check if user or token is undefined
        if (!user || !user.token) {
          return next.handle(req);
        }

        console.log('Token:', user.token);
        const modified = req.clone({
          params: new HttpParams().set('auth', user.token),
        });
        return next.handle(modified);
      })
    );
  }
}

