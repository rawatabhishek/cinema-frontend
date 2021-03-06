import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./views/homepage/homepage.component";
import { CinemasComponent } from "./views/cinemas/cinemas.component";
import { CinemaDetailsComponent } from "./views/cinema-details/cinema-details.component";
import { LoginComponent } from "./views/auth/login/login.component";
import { MoviesComponent } from "./views/movies/movies.component";
import { MovieDetailsComponent } from "./views/movie-details/movie-details.component";
import { TicketBookingComponent } from "./views/ticket-booking/ticket-booking.component";

import { AuthGuard } from "./guards/auth/auth.guard";

const routes: Routes = [
	{ path: '', component: HomepageComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'movies', component: MoviesComponent },
	{ path: 'cinemas-list', component: CinemasComponent },
	{ path: 'cinema-details/:cinemaId', canActivate: [AuthGuard], component: CinemaDetailsComponent },
	{ path: 'movie-details/:movieId', canActivate: [AuthGuard], component: MovieDetailsComponent },
	{ path: 'book-tickets/:cinemaMovieId/:showDateTime', canActivate: [AuthGuard], component: TicketBookingComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
