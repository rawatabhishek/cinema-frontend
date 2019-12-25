import { Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "./../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private microserviceUrl = environment.authenticationMicroservice;
	private userAuthStateSource = new BehaviorSubject<boolean>(this.isUserLoggedIn);
	public redirectUrl: string;

	userAuthState$ = this.userAuthStateSource.asObservable();

	constructor(
		private router: Router,
		private http: HttpClient
	) { }

	public authentication(authPayload): Observable<any> {
		const endPoint = `${this.microserviceUrl}/login`;
		return this.http.post(endPoint, authPayload);
	}

	updateAuthUserState(state) {
		this.userAuthStateSource.next(state);
	}

	get isUserLoggedIn() {
		const checkAuthUser = localStorage.getItem('access_token');
		return checkAuthUser ? true : false;
	}

	get getAuthorizationToken() {
		return localStorage.getItem('access_token');
	}

	logout() {
		localStorage.removeItem('userDetails');
		localStorage.removeItem('access_token');
		this.router.navigate(['/']);
		this.updateAuthUserState(false);
	}

}
