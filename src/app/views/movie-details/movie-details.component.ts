import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "./../../services/movies/movies.service";

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
	public movieDetails = {};

	constructor(
		private toastr: ToastrService,
		private route: ActivatedRoute,
		private movieService: MoviesService
	) { }

	ngOnInit() {
		let movieId = this.route.snapshot.paramMap.get('movieId');
		this.getMovieDetails(movieId);
	}

	public getMovieDetails(movieId) {
		this.movieService.getMovieDetails(movieId)
			.subscribe(
				response => {
					this.movieDetails = response;
				},
				error => {
					this.toastr.error('Something went wrong getMovieDetails', 'Error');
				}
			);
	}

	public getSelectedMovieDetails(cinemaId, showDateTime) {
		console.log(cinemaId, showDateTime);
	}

}
