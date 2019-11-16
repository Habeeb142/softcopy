import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from 'src/app/data-fetcher.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-fetched-textbook',
  templateUrl: './fetched-textbook.component.html',
  styleUrls: ['./fetched-textbook.component.css']
})
export class FetchedTextbookComponent implements OnInit {

  public textbook;
  constructor(private dataFetcher: DataFetcherService, public rout: Router, private auth: AuthService) { }

  ngOnInit() {
    (this.auth.checkAuth())? this.textbookOn(): this.rout.navigate(['admin']);
  }

  textbookOn(): void {
    this.dataFetcher.textbookData().subscribe(data=>{
      this.textbook = data;
      console.log(data)
    });
  }


}
