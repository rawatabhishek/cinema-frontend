import { Injectable } from '@angular/core';
import { environment } from "./../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class MoviesService {

	private microserviceUrl = environment.movieMicroservice;

	constructor() { }

	
}
