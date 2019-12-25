import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { TicketBookingService } from "./../../services/ticket-booking/ticket-booking.service";
import { PaymentServiceService } from "./../../services/payment-service/payment-service.service";

import { environment } from "./../../../environments/environment";

declare const StripeCheckout;

@Component({
	selector: 'app-ticket-booking',
	templateUrl: './ticket-booking.component.html',
	styleUrls: ['./ticket-booking.component.css']
})

export class TicketBookingComponent implements OnInit {
	public ticketBookingForm;
	public cinemaMovieDetails;
	public movieDateTime;
	public ticketPrices;
	public availSeats = ['A1', 'A2', 'B1', 'B2'];

	public handler;

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute,
		private toastr: ToastrService,
		private bookingService: TicketBookingService,
		private paymentService: PaymentServiceService
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

		this.handler = StripeCheckout.configure({
			key: environment.stripePublicKey,
			locale: 'auto',
			token: (token: any) => {
				this.chargeTicketAmount(token);
			}
		});
	}

	onTicketBookingFormSubmit() {
		if (this.ticketBookingForm.valid) {
			this.handler.open({
				name: 'Cinema Microservice',
				amount: 100
			});
		} else {
			alert('Invalid');
		}
	}

	chargeTicketAmount(token) {
		const authUserDetails = localStorage.getItem('userDetails');
		const paymentPayload = this.ticketBookingForm.value;
		paymentPayload['chargeToken'] = token.id;
		paymentPayload['chargeType'] = 'TOKEN';
		paymentPayload['description'] = 'Ticket Booking';
		paymentPayload['userDetails'] = authUserDetails;
		paymentPayload['movieDetails'] = this.cinemaMovieDetails;

		this.paymentService.chargeTicketAmount(paymentPayload).subscribe(
			response => {
				this.toastr.success(response.message, 'Success');
			},
			error => {
				console.log(error)
			}
		);
	}

	getCinemaMovieDetail(cinemaMovieId) {
		this.bookingService.getCinemaMovieDetails(cinemaMovieId).subscribe(
			response => {
				this.cinemaMovieDetails = response;
				this.ticketPrices = response.ticket_price ? response.ticket_price : [];
			},
			error => {
				console.log(error);
			}
		)
	}

}
