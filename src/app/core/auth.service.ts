import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { config } from './config';

@Injectable({ 
  providedIn: 'root'
})
export class AuthService {

  public getMenus: BehaviorSubject<any> = new BehaviorSubject({});
  get authState(): any {
      let user = localStorage.getItem('currentUser') ?? '';
      if(!(user == null || user == '')){
        return JSON.parse(user);
      }
      return null;
      
  }

  constructor(private http: HttpClient) {
  }

  get authenticated(): boolean {
    return this.authState !== null ;
  }

  public getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  // Current user
  get currentUser() {
    return this.authenticated ? this.authState : null;
  }

  get profilePicture() {
    if (this.authenticated && this.authState  && this.authState.photoURL) {
      return this.authState.photoURL;
    } else {
      return config.organization.photoURL;
    }
  }

  get currentUserObservable() {
    return Promise.resolve(this.authState);
  }

  // Current login user id
  get currentUserId(): string {
    return this.authenticated ? this.authState.id : '';
  }

  // user account
  get currentUserName(): string {
    if (!this.authState) {
      return 'Shailendra Tiwari';
    } else {
      return this.authState['firstName'] + ' ' + this.authState['lastName'];
    }
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.anonymous : false;
  }

  emailLogin(email: string, password: string) : Observable<any> {
    let login = {
      email: email,
      password: password
    };
    return this.http.post(`${config.baseApiURL}v1/auth/login`, login);
  }

  /**
   *  email registration
   * */
  emailSignUp(user: any): Observable<any> {    
    return this.http.post(`${config.baseApiURL}v1/auth/register`, user);
  }

  /**
   *  email registration
   * */
  getProfiles(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/auth/me`);
  }

  /**
   *  get users Menus
   * */
  getMenusCall() {    
    return this.http.get(`${config.baseApiURL}v1/auth/me-menus`)
      .subscribe(data=>{
        this.getMenus.next(data);
      });
  }

  getAllMenus() : Observable<any>{    
    return this.http.get(`${config.baseApiURL}v1/auth/me-menus`);
  }
  
  updateProfiles(me: any): Observable<any> {    
    return this.http.post(`${config.baseApiURL}v1/auth/me`, me);
  }
  resetPassword(email: string) {
  }

  /**
   *  sign out
   * */
  signOut(): Observable<any> {
    return this.http.get(`${config.baseApiURL}v1/auth/logout`);
  }

  get getOrginization(): any {
    let orginization =  Object.assign(config.organization);
    //  if (this.authenticated && this.authState  && this.authState.loginCenter && this.authState.loginCenter.name) {
    //   orginization.companyName = this.authState.loginCenter.name;
    // }
    if (this.authenticated && this.authState && this.authState.loginOrganisation ) {
         orginization.companyName = this.authState.loginOrganisation.name;
      } 
    return orginization;
  }

   /**
   *  email registration
   * */
  getRoles(): Observable<any> {    
    return this.http.get(`${config.baseApiURL}v1/roles`);
  }

  get getGenders() {
    return config.genders;
  }
}
