import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { MoviesService } from "./../../services/movies/movies.service";

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	public movieList: Array<Object> = [];

	constructor(
		private movieService: MoviesService,
		private router: Router
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

	public bookAMovie(movieId) {
		const accessToken = localStorage.getItem('access_token');
		if (accessToken) {
			this.router.navigate(['/movie-details', movieId]);
		} else {
			this.router.navigate(['/login'], { queryParams: { movieId: movieId } });
		}
	}

}
