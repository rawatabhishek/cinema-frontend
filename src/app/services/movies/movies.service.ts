import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "./../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class MoviesService {

	private microserviceUrl = environment.movieMicroservice;

	constructor(
		private http: HttpClient
	) { }

	public getMovies(): Observable<any> {
		const endPoint = `${this.microserviceUrl}/movie/list`;
		return this.http.get(endPoint);
	}

	public getMovieDetails(movieId): Observable<any> {
		const endPoint = `${this.microserviceUrl}/movie-details/${movieId}`;
		return this.http.get(endPoint);
	}

}
