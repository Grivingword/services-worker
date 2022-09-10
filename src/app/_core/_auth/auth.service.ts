import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.apiUrl;

  constructor( private http: HttpClient,) { }

  public login(user: string, password: string): Observable <any> {
    const params = new HttpParams().set('email', user).set('password', password);

    return this.http.get<any>(this.url + '/auth/login', {
      params: params,
      responseType: 'json'
    });
  }

  public logout(){
    return this.http.post<any>(this.url + '/api/logout', httpOptions);
  }
}
