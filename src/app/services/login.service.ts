import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';
import {LoginResponse} from '../types/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = 'http://localhost:8080/auth/'

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {

    const fullUrl: string = this.apiUrl + 'login'

    return this.http.post<LoginResponse>(fullUrl, {email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem('auth-token', value.token)
        sessionStorage.setItem('username', value.name)
      })
    )
  }

  signup(name: string, email: string, password: string) {
    const fullUrl: string = this.apiUrl + 'register'
    return this.http.post<LoginResponse>(fullUrl, {name, email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem('auth-token', value.token)
        sessionStorage.setItem('username', value.name)
      })
    )
  }
}
