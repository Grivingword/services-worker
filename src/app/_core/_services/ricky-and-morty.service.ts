import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickyAndMortyService {
  apiUrl

  constructor(private http: HttpClient) {
    this.apiUrl =  environment.apiUrl
  }

  public getCharacter(): Observable<any>{
    return this.http.get(this.apiUrl + '/character')
  }
  public getCharacterPerPage(page): Observable<any>{
    return this.http.get(this.apiUrl + '/character/?page=' + page)
  }
}
