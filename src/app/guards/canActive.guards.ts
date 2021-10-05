import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, CanDeactivate, Resolve, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable, of } from "rxjs";
import { promise } from "selenium-webdriver";
import { ServiceService } from "../service.service";

@Injectable({
    providedIn: "root"
})


export class CanActiveService implements CanActivate {

    constructor(private router: Router, private service: ServiceService) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree {

        if (!this.service.getdata()) {
            //alert('You are not allowed to view this page. You are redirected to login Page');

            // this.router.navigate([""]);
            return false;
        }

        return true;
    }
}



@Injectable({
    providedIn: "root"
})

export class CanActiveChild implements CanActivateChild {

    constructor(private router: Router, private service: ServiceService) { }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.service.token()) {
            //alert('You are not allowed to view this page. You are redirected to login Page');

            // this.router.navigate([""]);
            return false;
        }

        return true;
    }
}



//resolve start

@Injectable({
    providedIn: "root"
})

export class AuthResolve implements Resolve<any> {
    constructor(private router: Router, private service: ServiceService) { }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return "welcome"
    }

}



@Injectable({
    providedIn: "root"
})
export class testCanload implements CanLoad {
    constructor(private router: Router, private service: ServiceService) { }
    canLoad(route: Route,): Observable<any> {
        if (route.path == "lazzy") {
            return of(false)
        }
        return of(false)

    }

}
