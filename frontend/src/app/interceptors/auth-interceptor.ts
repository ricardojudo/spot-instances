import { Injectable } from "@angular/core";
import { HttpRequest, HttpResponse, HttpHeaders, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { User } from "../models/user";
import { UserService } from "../services/user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private userService: UserService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        
        let user = this.userService.getCurrentUser();
        const headers = new HttpHeaders({
        });

        const _request = request.clone({headers});
        return next.handle(_request);
    }


}
