import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./views/homepage/homepage.component";
import { CinemasComponent } from "./views/cinemas/cinemas.component";
import { MoviesComponent } from "./views/movies/movies.component";

const routes: Routes = [
	{ path: '', component: HomepageComponent, pathMatch: 'full' },
	{ path: 'movies', component: MoviesComponent },
	{ path: 'cinemas', component: CinemasComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
