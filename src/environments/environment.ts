// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	cinemaCatalogMicroservice: 'http://localhost:3000',
	movieMicroservice: 'http://localhost:3010',
	authenticationMicroservice: 'http://localhost:3020',
	bookingMicroservice: 'http://localhost:3030',
	paymentMicroservice: 'http://localhost:3040',
	stripePublicKey: 'pk_test_aRwpT5842YFdXBpzxvhgSQHz008IAW1UfK'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
