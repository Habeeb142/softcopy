import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from 'src/app/data-fetcher.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetched-thesis',
  templateUrl: './fetched-thesis.component.html',
  styleUrls: ['./fetched-thesis.component.css']
})
export class FetchedThesisComponent implements OnInit {

  public thesis;
  constructor(private dataFetcher: DataFetcherService, private auth: AuthService, public rout: Router) { }

  ngOnInit() {
    (this.auth.checkAuth())? this.thesisOn() : this.rout.navigate(['admin']);
  }

  thesisOn(): void {
    this.dataFetcher.thesisData().subscribe(data=>{
      this.thesis = data;
      // console.log(data)
    });
  }


}
