import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CinemasService } from "./../../services/cinemas/cinemas.service";

@Component({
	selector: 'app-cinema-details',
	templateUrl: './cinema-details.component.html',
	styleUrls: ['./cinema-details.component.css']
})
export class CinemaDetailsComponent implements OnInit {
	public cinemaDetails = {};
	constructor(
		private toastr: ToastrService,
		private route: ActivatedRoute,
		private cinemaService: CinemasService
	) { }

	ngOnInit() {
		let cinemaId = this.route.snapshot.paramMap.get('cinemaId');
		this.getCinemaById(cinemaId);
	}

	getCinemaById(cinemaId) {		
		this.cinemaService.getCinemaById(cinemaId)
			.subscribe(
				response => {
					this.cinemaDetails = response;
					console.log(this.cinemaDetails);
				}
			),
			error => {
				this.toastr.error('Something went wrong getCinemaById', 'Error');
			}
	}

}
