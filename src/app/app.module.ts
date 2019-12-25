import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/layout/header/header.component';
import { FooterComponent } from './views/layout/footer/footer.component';
import { LoginComponent } from './views/auth/login/login.component';
import { ForgotPasswordComponent } from './views/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './views/auth/reset-password/reset-password.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { MoviesComponent } from './views/movies/movies.component';
import { CinemasComponent } from './views/cinemas/cinemas.component';

/** Services */
import { CinemasService } from "./services/cinemas/cinemas.service";
import { CinemaDetailsComponent } from './views/cinema-details/cinema-details.component';
import { MovieDetailsComponent } from './views/movie-details/movie-details.component';
import { TicketBookingComponent } from './views/ticket-booking/ticket-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './views/payment/payment.component';
import { AuthInterceptor } from "./interceptor/auth.interceptor";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		LoginComponent,
		ForgotPasswordComponent,
		ResetPasswordComponent,
		HomepageComponent,
		MoviesComponent,
		CinemasComponent,
		CinemaDetailsComponent,
		MovieDetailsComponent,
		TicketBookingComponent,
		PaymentComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatSelectModule,
		ToastrModule.forRoot()
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
