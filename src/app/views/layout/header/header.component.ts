import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { AuthService } from "./../../../services/auth/auth.service";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public userAuthState:boolean = false;

	constructor(
		private authService: AuthService,
		private router: Router
	) {
		this.authService.userAuthState$.subscribe(response => {
			this.userAuthState = response
		})
	}

	ngOnInit() {
	}

	logout() {
		localStorage.removeItem('userDetails');
		localStorage.removeItem('access_token');
		this.router.navigate(['/']);
		this.authService.updateAuthUserState(false);
	}

}
