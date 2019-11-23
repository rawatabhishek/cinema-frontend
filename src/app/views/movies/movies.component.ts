import { Component, OnInit } from '@angular/core';
import { MoviesService } from "./../../services/movies/movies.service";

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	public movieList:Array<Object> = [];

	constructor(
		private movieService: MoviesService
	) { }

	ngOnInit() {
		this.getMovies();
	}

	public getMovies() {
		this.movieService.getMovies()
			.subscribe(
				response => {
					this.movieList = response;
				},
				error => {
					console.log(error);
				}
			);
	}

}
