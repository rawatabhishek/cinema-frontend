import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth/auth.service";
import { HttpRequest, HttpHandler, HttpInterceptor } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getAuthorizationToken;

        if (!authToken) {
            return next.handle(req);
        }
        return next.handle(req.clone({
            setHeaders: { Authorization: `Bearer ${authToken}` }
        }));
    }
}