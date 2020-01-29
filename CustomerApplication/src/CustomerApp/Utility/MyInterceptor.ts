import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone(
            {
                setHeaders: { securityKey: 'key' }
            }

        );
        return next.handle(req);
    }

}
