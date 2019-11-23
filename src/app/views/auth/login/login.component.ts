import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "./../../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm = this.fb.group({
		username: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required]
	});

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router
	) { }

	ngOnInit() {

	}

	onLoginFormSubmit() {
		if (this.loginForm.valid) {
			let authPayload = this.loginForm.value;
			this.authService.authentication(authPayload)
				.subscribe(authUserDetails => {
					localStorage.setItem('userDetails', JSON.stringify(authUserDetails));
					let accessToken = authUserDetails.access_token;
					localStorage.setItem('access_token', accessToken);
					this.router.navigate(['/cinemas-list']);
					this.authService.updateAuthUserState(true);
				},
					error => {
						console.log(error);
					});
		} else {
			alert('Invalid');
		}
	}
}
