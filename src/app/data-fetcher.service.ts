import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {
  data: any;
  journal_data: any;
  softreader_data: any;
  thesis_data: any;
  textbook_data: any;

  constructor(private http: HttpClient) { }

  journalData() {
     this.journal_data = this.http.get('/softcopy/backend/journal-fetcher.php');
     return this.journal_data
  }

  textbookData() {
    return this.textbook_data = this.http.get('/softcopy/backend/textbook-fetcher.php');
  }

  thesisData() {
    return this.thesis_data =  this.http.get('/softcopy/backend/thesis-fetcher.php');
  }

  softData() {
    return this.softreader_data = this.http.get('/softcopy/backend/soft-fetcher.php');
  }

  specificBookData(incoming) {
    return this.http.post('/softcopy/backend/specific-book.php', {incoming});
  }

  getJournalData(){
    return this.journal_data
  }
  getTextBookData(){
    return this.textbook_data
  }
  getThesisData(){
    return this.thesis_data
  }
  getSoftReaderData(){
    return this.softreader_data
  }
}
