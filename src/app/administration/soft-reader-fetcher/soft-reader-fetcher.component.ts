import { Component, OnInit } from '@angular/core';
import { DataFetcherService } from 'src/app/data-fetcher.service';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soft-reader-fetcher',
  templateUrl: './soft-reader-fetcher.component.html',
  styleUrls: ['./soft-reader-fetcher.component.css']
})
export class SoftReaderFetcherComponent implements OnInit {

  public soft;
  constructor(private dataFetcher: DataFetcherService, private auth: AuthService, public rout: Router) { }

  ngOnInit() { 
    (this.auth.checkAuth())? this.softOn() : this.rout.navigate(['admin']);
  }

  softOn(): void {
    this.dataFetcher.softData().subscribe(data=>{
      this.soft = data;
      // console.log(data)
    });
  }

}
