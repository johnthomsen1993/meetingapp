import * as auth0 from 'auth0-js';


class Auth {
    public auth0 = new auth0.WebAuth({
    audience: 'https://johnsmeetingwebapp.azurewebsites.net/api/',
    clientID: 'XgDxK328qjQQH5Yglxic6vOIDrAFbugY',
    domain: 'johntho1993.eu.auth0.com',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  public login() {
    this.auth0.authorize();
  }

  public handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  public setSession(authResult: auth0.Auth0DecodedHash) {
    // Set the time that the access token will expire at
    if(authResult.expiresIn!==undefined && authResult.accessToken !== undefined && authResult.idToken !== undefined){
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    }
  }

  public getAccessToken() {
    return localStorage.getItem('access_token')
  }

  public logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    const expireToken = localStorage.getItem('expires_at');
    if(expireToken!==null){
        const expiresAt = JSON.parse(expireToken);
    return new Date().getTime() < expiresAt;
    }else{
        return false;
    }
  }
}
const auth0Client = new Auth();

export default auth0Client;