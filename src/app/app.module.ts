import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

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
		CinemaDetailsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [
		CinemasService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
