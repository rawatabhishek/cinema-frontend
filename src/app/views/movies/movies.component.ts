import { ToastrService } from 'ngx-toastr';
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
		private toastr: ToastrService,
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
					this.toastr.error('Something went wrong getMovies', 'Error');
				}
			);
	}

	public bookAMovie(movieId) {
		this.router.navigate(['/movie-details', movieId]);
	}

}
