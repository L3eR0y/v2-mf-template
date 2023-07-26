export interface MainStore {
	auth: Auth
	[key: string]: any;
}

export interface Auth {
  user?: User
}

export interface User {
	iss?: string;
	sub?: string;
	aud?: string;
	exp?: number;
	iat?: number;
	auth_time?: number;
	nonce?: string;
	acr?: string;
	amr?: string;
	azp?: string;
	session_state?: string;
	[key: string]: any; // Add other attributes here.
}