import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "./../../../services/auth/auth.service";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', Validators.required]
	});

	constructor(
		private fb: FormBuilder,
		private authService: AuthService
	) { }

	ngOnInit() {

	}

	onLoginFormSubmit() {
		if(this.loginForm.valid){
			let authPayload = this.loginForm.value;
			this.authService.authentication(authPayload)
				.subscribe(response => {
					console.log(response);
				},
				error => {
					console.log(error);
				});
		} else {
			alert('Invalid');
		}
	}

}
