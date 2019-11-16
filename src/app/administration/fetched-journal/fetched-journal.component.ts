import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from 'src/app/data-fetcher.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-fetched-journal',
  templateUrl: './fetched-journal.component.html',
  styleUrls: ['./fetched-journal.component.css']
})
export class FetchedJournalComponent implements OnInit {
  
  public journal;
  constructor(private dataFetcher: DataFetcherService, private auth: AuthService, public rout: Router) { }

  ngOnInit() {
    //checking auth
    if(this.auth.checkAuth()){
      this.journalOn();
    }

    else {
      this.rout.navigate(['admin']);
    }
  }

  journalOn(): void {
    this.dataFetcher.journalData().subscribe(data=>{
      this.journal = data;
    });
  }

}
