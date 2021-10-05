
import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, CanDeactivate, Resolve } from '@angular/router';
import { Observable } from "rxjs";
import { promise } from "selenium-webdriver";
import { ServiceService } from "../service.service";

@Injectable()

export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private service: ServiceService) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree {
        debugger
        if (!this.service.getdata()) {
            //alert('You are not allowed to view this page. You are redirected to login Page');

            this.router.navigate([""]);
            return false;
        }

        return true;
    }
}


@Injectable({
    providedIn: "root"
})

export class AuthGuardServiceChild implements CanActivateChild {
    constructor(private router: Router, private service: ServiceService) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.service.token()) {
            //alert('You are not allowed to view this page. You are redirected to login Page');

            this.router.navigate([""]);
            return false;
        }

        return true;
    }
}

//candecativate start
export interface comoponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
    providedIn: "root"
})

export class AuthCandeactivate implements CanDeactivate<comoponentDeactivate> {
    constructor(private router: Router, private service: ServiceService) { }
    canDeactivate(
        component: comoponentDeactivate): any {
        return component && component.canDeactivate ? component.canDeactivate() : true;
    }

}
    //candecativate end


    //resolve start
    @Injectable({
        providedIn: "root"
    })
    
    export class AuthResolve implements Resolve<any> {
        constructor(private router: Router, private service: ServiceService) { }
        resolve(
            route:ActivatedRouteSnapshot,
            state:RouterStateSnapshot
        ):Observable<any>|Promise<any>|any{
            return "welcome"
        }
    
    }
    
    //resolve end