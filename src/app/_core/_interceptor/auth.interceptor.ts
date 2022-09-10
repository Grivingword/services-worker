import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../_auth/auth.service';
import { LocalStorageService } from '../_services/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    allowedWithoutToken = [
        ['POST', /api\/user\/signup$/],
        ['GET', /api\/organizationalUnit$/],
        ['GET', /api\/organizationalUnit\/withCompanies$/],
        ['GET', /api\/roles$/],
        ['GET', /api\/systemSettings\/login$/],
        ['GET', /auth\//],
        ['POST', /forgotPassword\/sendEmailLink$/],
        ['POST', /forgotPassword\/reset$/],
        ['POST', /\/preview$/]  // add preview
    ];

    constructor(
        private router: Router,
        private authService: AuthService,
        private localStorage: LocalStorageService
    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.isAllowedUrl(req))
            return next.handle(req);

        if (req.url.match(/api\//)) { // api call
            let authToken = this.localStorage.getToken();

            if (authToken !== null && authToken !== undefined) {
                let authHeader = 'Bearer ' + authToken;

                const authReq = req.clone({
                    setHeaders: {
                        'Accept': 'application/json',
                        'Authorization': authHeader
                    }
                });

                return next.handle(authReq).pipe(tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        //after sent success request
                    }
                }, (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        console.log('INTERCEPTOR ERROR');
                        console.log(err);

                        if (err.status === 401) {
                            // redirect to the login route
                            // or show a modal
                            console.log('401 UNAUTHORIZED');
                            this.router.navigate(['/login']);
                            return new Observable<any>();
                        }
                    }
                }));
            } else {
                this.router.navigate(['/login']);
                return new Observable<any>();
            }
        }

        return new Observable<any>();
    }

    isAllowedUrl(req: HttpRequest<any>) {
        let status = false;

        this.allowedWithoutToken.forEach(function (allowedUrl) {
            let method = allowedUrl[0];
            let url = allowedUrl[1];

            if (req.method === method && req.url.match(url))
                status = true;
        });

        return status;
    }
}