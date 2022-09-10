import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private LocalStorage: LocalStorageService ) { }

  get userData(): any{
    return this.LocalStorage.getUserData();
  }

  public getAvatarInitials(string: string): string {
    let names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 2) {
      initials += ' ' + names[names.length - 2].substring(0, 1).toUpperCase();
    } else {
      if (names.length > 1) {
        initials += ' ' + names[names.length - 1].substring(0, 1).toUpperCase();
      }
    }

    return initials;
  };


}
