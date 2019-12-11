import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "./../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class TicketBookingService {
	private bookingMicroserviceUrl = environment.bookingMicroservice;

	constructor(
		private http: HttpClient
	) { }

	public getCinemaMovieDetails(cinemaMovieId): Observable<any> {
		const endPoint = `${this.bookingMicroserviceUrl}/get-cinema-movie-details/${cinemaMovieId}`;
		return this.http.get(endPoint);
	}
}
