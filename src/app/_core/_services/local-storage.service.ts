import { Injectable } from '@angular/core';
import { Utils } from '../_uitls/Utils';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public storeToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  public storeUserData(userData: any) {
    sessionStorage.setItem('userData', JSON.stringify(userData));
  }

  public getToken(): String | null {
    return sessionStorage.getItem('token');
  }

  public getUserData(): String {
    let userData: any = sessionStorage.getItem('userData');

    return (!Utils.isNullOrUndefined(userData)) ? JSON.parse(userData) : null;

  }

  public clearSessionStorage(): void {
    sessionStorage.clear();
  }

  public storeJsonItem(keyName: string, jsonString: any) {
    sessionStorage.setItem(keyName, JSON.stringify(jsonString));
  }

  public getJsonItem(keyName: string): any {
    let settings: any = sessionStorage.getItem(keyName);

    return (Utils.isNullOrUndefined(settings)) ? null : JSON.parse(settings);
  }
}
