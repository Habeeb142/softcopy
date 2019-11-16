import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token;

  constructor() { }

  setAuth() {
    //generating token
    this.token = Math.random().toString(36).substring(2) + Math.random()*100000000000000000;
    
    //setting into cookies
    document.cookie = 'logger='+this.token;

    //setting token to loaclstorage
    localStorage.setItem('logger', this.token);
  }

  checkAuth() {
    if(localStorage.getItem('logger') !=null){
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf('logger') == 0) {
          var decoded_cookie = c.substring('logger='.length, c.length);
          
          //returns true or false
          return localStorage.getItem('logger') == decoded_cookie;
      
        }
      }
      // return ca.length;
    }

    else {
      return false
    }
  }

  logout() {
    //setting auth to false
    localStorage.setItem('logger', null);
    document.cookie = "logger=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
}
