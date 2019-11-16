import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemporaryStorageService {
  journal_Data: any;

  constructor() { }
  public data;

  storeSubmitted(x) {
    this.data = x;
    return this.data;
  }

  getData(){
    return this.data;
  }

  journalData(data) {
    this.journal_Data = data;
    return this.journal_Data;
  }
  
  getJournalData(){
    // console.log(this.journal_Data)
    return this.journal_Data
  }
}
