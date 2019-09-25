import { Component, OnInit } from '@angular/core';
import { CinemasService } from "./../../services/cinemas/cinemas.service";

@Component({
	selector: 'app-cinemas',
	templateUrl: './cinemas.component.html',
	styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {
	public cinemaList:Array<Object> = [];

	constructor(
		private cinemaService: CinemasService
	) { }

	ngOnInit() {
		this.getCinemas();
	}

	public getCinemasByCity(cinemaId) {
		this.cinemaService.getCinemasByCity(cinemaId)
			.subscribe(
				response => {
					this.cinemaList = response;
				},
				error => {
					console.log(error);
				}
			);
	}

	public getCinemas() {
		this.cinemaService.getCinemas()
			.subscribe(
				response => {
					this.cinemaList = response;
				},
				error => {
					console.log(error);
				}
			);
	}

}
