import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { TicketBookingService } from "./../../services/ticket-booking/ticket-booking.service";

@Component({
	selector: 'app-ticket-booking',
	templateUrl: './ticket-booking.component.html',
	styleUrls: ['./ticket-booking.component.css']
})

export class TicketBookingComponent implements OnInit {
	public ticketBookingForm;
	public cinemaMovieDetails;
	public movieDateTime;

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private bookingService: TicketBookingService
	) {
	}

	ngOnInit() {
		let cinemaMovieId = this.route.snapshot.paramMap.get('cinemaMovieId');
		let showDateTime = this.route.snapshot.paramMap.get('showDateTime');
		this.movieDateTime = showDateTime;
		this.getCinemaMovieDetail(cinemaMovieId);
		this.ticketBookingForm = this.fb.group({
			movieId: [cinemaMovieId],
			showDateTime: [showDateTime],
			ticketPrice: ['', Validators.required],
			seats: ['', Validators.required]
		});
	}

	onTicketBookingFormSubmit() {
		if (this.ticketBookingForm.valid) {
			console.log(this.ticketBookingForm.value);
		} else {
			alert('Invalid');
		}
	}

	getCinemaMovieDetail(cinemaMovieId) {
		this.bookingService.getCinemaMovieDetails(cinemaMovieId).subscribe(
			response => {
				this.cinemaMovieDetails = response;
			},
			error => {
				console.log(error);
			}
		)
	}

}
