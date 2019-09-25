import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
		CinemasComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
