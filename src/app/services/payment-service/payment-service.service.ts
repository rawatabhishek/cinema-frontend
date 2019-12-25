import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "./../../../environments/environment";

@Injectable({
	providedIn: 'root'
})
export class PaymentServiceService {
	private paymentMicroservice = environment.paymentMicroservice;

	constructor(
		private http: HttpClient
	) { }

	public chargeTicketAmount(paymentPayload): Observable<any> {
		const endPoint = `${this.paymentMicroservice}/payment/charge-payment`;
		return this.http.post(endPoint, paymentPayload);
	}
}
