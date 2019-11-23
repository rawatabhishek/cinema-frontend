import { Observable, Subject } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "./../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private microserviceUrl = environment.authenticationMicroservice;
	private userAuthStateSource = new Subject<boolean>();

	userAuthState$ = this.userAuthStateSource.asObservable();

	constructor(private http: HttpClient) { }

	public authentication(authPayload): Observable<any> {
		const endPoint = `${this.microserviceUrl}/login`;
		return this.http.post(endPoint, authPayload);
	}

	updateAuthUserState(state){
		this.userAuthStateSource.next(state);
	}
}
