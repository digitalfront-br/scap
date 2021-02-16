import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor( private router: Router) {}
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = JSON.parse(window.sessionStorage.getItem('user'));
    const token = user?.user.token;
    if(user != null) {
      if(token){
        return true;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
