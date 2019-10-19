import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./views/homepage/homepage.component";
import { CinemasComponent } from "./views/cinemas/cinemas.component";
import { CinemaDetailsComponent } from "./views/cinema-details/cinema-details.component";
import { LoginComponent } from "./views/auth/login/login.component";
import { MoviesComponent } from "./views/movies/movies.component";

const routes: Routes = [
	{ path: '', component: HomepageComponent, pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'movies', component: MoviesComponent },
	{ path: 'cinemas-list', component: CinemasComponent },
	{ path: 'cinema-details/:cinemaId', component: CinemaDetailsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
