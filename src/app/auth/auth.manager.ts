import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class AuthManager implements CanActivate {
    
    constructor(private router: Router) {}
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('CanActivate is called');
        if (localStorage.getItem('token')) {
            console.log('getting the item from the local storage');
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}