import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "./../../../services/auth/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	private movieIdQueryParam;

	loginForm = this.fb.group({
		username: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required]
	});

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private toastr: ToastrService,
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit() {
		const movieIdValue = this.activatedRoute.snapshot.queryParamMap.get('movieId');
		this.movieIdQueryParam = movieIdValue ? movieIdValue : "";

	}

	onLoginFormSubmit() {
		if (this.loginForm.valid) {
			let authPayload = this.loginForm.value;
			this.authService.authentication(authPayload)
				.subscribe(
					authUserDetails => {
						localStorage.setItem('userDetails', JSON.stringify(authUserDetails));
						let accessToken = authUserDetails.access_token;
						localStorage.setItem('access_token', accessToken);
						if (this.authService.redirectUrl) {
							this.router.navigate([this.authService.redirectUrl]);
						} else {
							this.router.navigate(['/cinemas-list']);
						}
						this.authService.updateAuthUserState(true);
					},
					error => {
						this.toastr.error('Something went wrong onLoginFormSubmit', 'Error');
					});
		} else {
			this.toastr.error('Form not valid', 'Error');
		}
	}
}
