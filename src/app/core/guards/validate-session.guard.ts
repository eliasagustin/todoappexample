import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,
   RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {

  private cookie: string | null = null;
   // para consultar la cookie al navegador

  constructor(private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookie(); //TODO: (Boleano que decide si te va a dejar continuar o no)
  }
  
  private checkCookie(): boolean {
    console.log('checkCookie  ',this.cookie);
    //return (this.cookie !== null) // Devuelve verdadero o falso, dependediendo si se cumple la sentencia
    if (this.cookie !==null){
      return true;
    } else {
      this.router.navigate(['/','auth','login'])
      return false;
    }
  }
}
