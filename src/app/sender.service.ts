import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SenderService {
    //calling a function from search-bar component inside dashboard component
    triggerClientData = new EventEmitter();
    subscription: Subscription;
    //end

    public holder;

  constructor(private http: HttpClient) { }

  //used to trigger a function from one component to another
  send(x) {
    //opening emiter for various components
    this.holder = x;
    this.triggerClientData.emit();
  }

  hold() {
    return this.holder
  }
}
