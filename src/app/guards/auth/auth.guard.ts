import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { AuthService } from "./../../services/auth/auth.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private authService: AuthService
	) { }

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		const attemptedUrl = state.url;

		if (this.authService.isUserLoggedIn) { return true; }

		this.authService.redirectUrl = attemptedUrl;
		this.router.navigate(['/login']);
		return false;
	}
}
