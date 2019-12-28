import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "./../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class CinemasService {
	private microserviceUrl = environment.cinemaCatalogMicroservice;

	constructor(
		private http: HttpClient
	) { }

	public getCinemasByCity(cinemaId): Observable<any> {
		const endPoint = `${this.microserviceUrl}/cinema/${cinemaId}`;
		return this.http.get(endPoint);
	}

	public getCinemas(): Observable<any> {
		const endPoint = `${this.microserviceUrl}/cinema/list`;
		return this.http.get(endPoint);
	}

	public getCinemaById(cinemaId): Observable<any> {
		const endPoint = `${this.microserviceUrl}/cinema-details/${cinemaId}`;
		return this.http.get(endPoint);

	}
}
